import { FC, useEffect, useRef } from "react";

interface Props {
    checked?: boolean;
    indeterminate?: boolean;
    onChange: () => void;
}
const CheckBox: FC<Props> = ({ checked, onChange, indeterminate }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (indeterminate && inputRef.current) {
            inputRef.current.indeterminate = indeterminate;
        }
    }, [indeterminate]);

    return (
        <input
            ref={inputRef}
            checked={checked}
            onChange={onChange}
            type={"checkbox"}
        />
    );
};
export default CheckBox;
