import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    RowSelectionState,
    SortingState,
    useReactTable,
} from "@tanstack/react-table";
import createTableColumns from "@/Components/Table/createTableColumns.tsx";
import Table from "@/Components/Table/Table.tsx";
import { useEffect, useState } from "react";
import SortingArrows from "@/Components/Table/SortingArrows.tsx";

export type TColumn<TData> = {
    objectKey: keyof TData;
    displayName: string;
};

interface Props<TData> {
    columnHeaders: TColumn<TData>[];
    data: TData[];
    enableSorting?: boolean;
    onRowSelection?: (roes: TData[]) => void;
}

const DataTable = <TData = unknown,>({
    columnHeaders,
    data,
    onRowSelection,
}: Props<TData>) => {
    const [sorting, setSorting] = useState<SortingState>([]);
    const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
    const [globalFilter, setGlobalFilter] = useState();

    const table = useReactTable<TData>({
        columns: createTableColumns(columnHeaders),
        data,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onSortingChange: setSorting,
        onRowSelectionChange: setRowSelection,
        onGlobalFilterChange: setGlobalFilter,
        getPaginationRowModel: getPaginationRowModel(),
        state: {
            sorting,
            globalFilter,
            rowSelection,
        },
    });

    // get selected rows
    useEffect(() => {
        const selectedRows = table
            .getSelectedRowModel()
            .rows.map((row) => row.original);
        onRowSelection?.(selectedRows);
    }, [rowSelection, table, onRowSelection]);

    // set total items per page
    useEffect(() => {
        table.setPageSize(5);
    }, [table]);

    return (
        <div>
            {/* TODO: Replace this with `SearchBox` component */}
            <div>
                <input
                    className={"text-gray-600"}
                    type="text"
                    onChange={({ target: { value: inputValue } }) => {
                        table.setGlobalFilter(inputValue);
                    }}
                />
            </div>
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

            {/*  TODO: Replace with `Pagination` component */}
            <div className={"flex justify-between items-center"}>
                <p>
                    {table.getState().pagination.pageIndex} of{" "}
                    {table.getPageCount() - 1}
                </p>

                <div className={"gap-3 flex"}>
                    <button
                        disabled={!table.getCanPreviousPage()}
                        onClick={() => table.previousPage()}
                    >
                        previous
                    </button>
                    <button
                        disabled={!table.getCanNextPage()}
                        onClick={() => table.nextPage()}
                    >
                        next
                    </button>
                </div>
            </div>
        </div>
    );
};
export default DataTable;
