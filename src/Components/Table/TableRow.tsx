import { forwardRef, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const TableRow = forwardRef<
    HTMLTableRowElement,
    HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
    <tr
        ref={ref}
        className={twMerge(
            "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
            className,
        )}
        {...props}
    />
));
TableRow.displayName = "TableRow";

export default TableRow;
