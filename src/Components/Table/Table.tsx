import { forwardRef, HTMLAttributes, RefAttributes } from "react";
import { twMerge } from "tailwind-merge";

import TableHead from "@/Components/Table/TableHead.tsx";
import TableBody from "@/Components/Table/TableBody.tsx";
import TableCell from "@/Components/Table/TableCell.tsx";
import TableFooter from "@/Components/Table/TableFooter.tsx";
import TableRow from "@/Components/Table/TableRow.tsx";
import TableCaption from "@/Components/Table/TableCaption.tsx";
import TableHeader from "@/Components/Table/TableHeader.tsx";

// Define the extended interface for the Table component
interface TableComponent
    extends React.ForwardRefExoticComponent<
        HTMLAttributes<HTMLTableElement> & RefAttributes<HTMLTableElement>
    > {
    Header: typeof TableHeader;
    Head: typeof TableHead;
    Body: typeof TableBody;
    Cell: typeof TableCell;
    Footer: typeof TableFooter;
    Row: typeof TableRow;
    Caption: typeof TableCaption;
}

const Table = forwardRef<HTMLTableElement, HTMLAttributes<HTMLTableElement>>(
    ({ className, ...props }, ref) => (
        <div className="relative w-full overflow-auto">
            <table
                ref={ref}
                className={twMerge("w-full caption-bottom text-sm", className)}
                {...props}
            />
        </div>
    ),
) as TableComponent; // Cast the component to the extended type

Table.displayName = "Table";

// Assign the static properties
Table.Head = TableHead;
Table.Header = TableHeader;
Table.Body = TableBody;
Table.Cell = TableCell;
Table.Footer = TableFooter;
Table.Row = TableRow;
Table.Caption = TableCaption;

export default Table;
