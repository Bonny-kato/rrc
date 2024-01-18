import { forwardRef, TdHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const TableCell = forwardRef<
    HTMLTableDataCellElement,
    TdHTMLAttributes<HTMLTableDataCellElement>
>(({ className, ...props }, ref) => (
    <td
        ref={ref}
        className={twMerge(
            "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
            className,
        )}
        {...props}
    />
));
TableCell.displayName = "TableCell";

export default TableCell;
