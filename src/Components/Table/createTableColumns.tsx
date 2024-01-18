import CheckBox from "@/Components/Table/CheckBox.tsx";
import { TColumn } from "@/Components/Table/DataTable.tsx";
import { ColumnDef } from "@tanstack/react-table";

const createTableColumns = <TData = unknown,>(
    columns: TColumn<TData>[],
): ColumnDef<TData>[] => {
    return [
        {
            id: "selection",
            header: ({ table }) => (
                <CheckBox
                    checked={table.getIsAllRowsSelected()}
                    indeterminate={table.getIsSomeRowsSelected()}
                    onChange={() => table.toggleAllRowsSelected()}
                />
            ),
            cell: ({ row }) => (
                <CheckBox
                    checked={row.getIsSelected()}
                    onChange={() => row.toggleSelected()}
                />
            ),
        },
        ...columns.map((column) => {
            return {
                header: column.displayName,
                accessorKey: column.objectKey,
            };
        }),
    ];
};

export default createTableColumns;
