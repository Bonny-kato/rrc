import { FC, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const SkeletonLoader: FC<HTMLAttributes<HTMLParagraphElement>> = ({
    className,
    ...rest
}) => {
    return (
        <p
            {...rest}
            className={`
                after:contents-['']
                after:absolute 
                after:inset-0 
                after:-translate-x-full
                after:bg-custom-gradient
                after:animate-shimmer
                relative overflow-hidden 
               
                ${twMerge("bg-[#E7EDF0]  rounded w-full py-2 ", className)}`}
        />
    );
};

export default SkeletonLoader;
