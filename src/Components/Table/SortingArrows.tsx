import { Column } from "@tanstack/react-table";
import { FC } from "react";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/outline";

type Sorting = "asc" | "desc" | false;

const getArrowIcon = (sorting: Sorting) => {
    if (sorting) {
        return {
            asc: <ArrowUpIcon className={"h-4 w-4"} />,
            desc: <ArrowDownIcon className={"h-4 w-4"} />,
        }[sorting];
    }
};

const SortingArrows: FC<{ column: Column<any> }> = ({ column }) => {
    const arrowIcon = getArrowIcon(column.getIsSorted());
    return <div>{arrowIcon}</div>;
};
export default SortingArrows;
