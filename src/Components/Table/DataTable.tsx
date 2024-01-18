import {
    flexRender,
    getCoreRowModel,
    getSortedRowModel,
    SortingState,
    useReactTable,
} from "@tanstack/react-table";
import createTableColumns from "@/Components/Table/createTableColumns.tsx";
import Table from "@/Components/Table/Table.tsx";
import { useState } from "react";
import SortingArrows from "@/Components/Table/SortingArrows.tsx";

export type TColumn<TData> = {
    objectKey: keyof TData;
    displayName: string;
};

interface Props<TData> {
    columnHeaders: TColumn<TData>[];
    data: TData[];
    enableSorting?: boolean;
}

const DataTable = <TData extends {}>({ columnHeaders, data }: Props<TData>) => {
    const [sorting, setSorting] = useState<SortingState>([]);

    const table = useReactTable<TData>({
        columns: createTableColumns(columnHeaders),
        data,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        onSortingChange: setSorting,
        state: {
            sorting,
        },
    });

    return (
        <div>
            <Table>
                <Table.Header>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <Table.Row key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <Table.Head
                                    onClick={header.column.getToggleSortingHandler()}
                                    key={header.id}
                                >
                                    <div className={"flex items-center"}>
                                        {!header.isPlaceholder &&
                                            flexRender(
                                                header.column.columnDef.header,
                                                header.getContext(),
                                            )}
                                        <SortingArrows column={header.column} />
                                    </div>
                                </Table.Head>
                            ))}
                        </Table.Row>
                    ))}
                </Table.Header>

                <Table.Body>
                    {table.getRowModel().rows.map((row) => (
                        <Table.Row id={row.id} key={row.id}>
                            {row.getVisibleCells().map((cell) => (
                                <Table.Cell key={cell.id}>
                                    {flexRender(
                                        cell.column.columnDef.cell,
                                        cell.getContext(),
                                    )}
                                </Table.Cell>
                            ))}
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
    );
};
export default DataTable;
