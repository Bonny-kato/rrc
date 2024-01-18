import { forwardRef, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const TableCaption = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <caption
            ref={ref}
            className={twMerge("mt-4 text-sm text-muted-foreground", className)}
            {...props}
        />
    ),
);

TableCaption.displayName = "TableCaption";

export default TableCaption;
