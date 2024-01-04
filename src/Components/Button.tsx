import { FC } from "react";
import clsx from "clsx";

interface IButtonProps {
    variant?: "elevated" | "filled" | "filled tonal" | "outlined" | "text";
}

const baseStyledClasses = `
        px-4 py-2  relative 
        hover:opacity-90
        font-medium
        active:outline-none 
        rounded-lg text-sm
        focus:outline-none 
        focus:ring-2 
        focus:ring-primary/50 
        active:ring-2 
        active:ring-primary/50 
`;

const Button: FC<IButtonProps> = ({ variant = "filled" }) => {
    const variantClassName = clsx(
        {
            "bg-primary border border-primary text-white/90 ":
                variant === "filled",
        },
        {
            "bg-transparent border border-primary text-primary":
                variant === "outlined",
        },
        {
            "bg-transparent border border-primary text-primary":
                variant === "filled tonal",
        },
        { "bg-primary-50/50 shadow text-primary-600": variant === "elevated" },
        { "text-primary-600": variant === "text" },
    );
    return (
        <button className={`${baseStyledClasses} ${variantClassName}`}>
            {" "}
            Button Component{" "}
        </button>
    );
};
export default Button;
