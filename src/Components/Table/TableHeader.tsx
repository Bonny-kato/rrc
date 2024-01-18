import { twMerge } from "tailwind-merge";
import { forwardRef } from "react";

const TableHeader = forwardRef<
    HTMLTableSectionElement,
    React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
    <thead
        ref={ref}
        className={twMerge("[&_tr]:border-b", className)}
        {...props}
    />
));
TableHeader.displayName = "TableHeader";

export default TableHeader;
