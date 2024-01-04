import { FC, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const baseStyledClasses = `
    after:contents-['']
    after:absolute 
    after:inset-0 
    after:-translate-x-full
    after:bg-skeleton-gradient
    after:animate-shimmer
    relative overflow-hidden
    bg-[#E7EDF0] rounded w-full py-2
`;

const SkeletonLoader: FC<HTMLAttributes<HTMLParagraphElement>> = ({
    className,
    ...rest
}) => {
    return <p {...rest} className={twMerge(baseStyledClasses, className)} />;
};

export default SkeletonLoader;
