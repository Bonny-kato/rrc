import { forwardRef, ThHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const TableHead = forwardRef<
    HTMLTableHeaderCellElement,
    ThHTMLAttributes<HTMLTableHeaderCellElement>
>(({ className, ...props }, ref) => (
    <th
        ref={ref}
        className={twMerge(
            "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
            className,
        )}
        {...props}
    />
));
TableHead.displayName = "TableHead";

export default TableHead;
