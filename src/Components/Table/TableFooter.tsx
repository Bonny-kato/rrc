import { forwardRef, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const TableFooter = forwardRef<
    HTMLTableSectionElement,
    HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
    <tfoot
        ref={ref}
        className={twMerge(
            "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
            className,
        )}
        {...props}
    />
));
TableFooter.displayName = "TableFooter";
export default TableFooter;
