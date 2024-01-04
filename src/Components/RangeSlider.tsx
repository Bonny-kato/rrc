import { ChangeEvent, useEffect, useRef, useState } from "react";

const MAXIMUM_VALUE = 1000,
    MINIMUM_VALUE = 340,
    RANGE_GAP = 50;

const inputRangeClasses = `
        appearance-none 
        z-20 -top-2 
        pointer-events-none
        absolute w-full bg-transparent
       
        [&::-moz-range-thumb]:appearance-none 
        [&::-moz-range-thumb]:h-6
        [&::-moz-range-thumb]:w-6
        [&::-moz-range-thumb]:rounded-full
        [&::-moz-range-thumb]:bg-primary
        [&::-moz-range-thumb]:border-none
        [&::-moz-range-thumb]:pointer-events-auto
        [&::-moz-range-thumb]:cursor-pointer
        [&::-moz-range-thumb]:hover:bg-primary-600 
        
        [&::-webkit-slider-thumb]:appearance-none 
        [&::-webkit-slider-thumb]:h-6
        [&::-webkit-slider-thumb]:w-6
        [&::-webkit-slider-thumb]:rounded-full
        [&::-webkit-slider-thumb]:bg-primary
        [&::-webkit-slider-thumb]:border-none
        [&::-webkit-slider-thumb]:pointer-events-auto
        [&::-webkit-slider-thumb]:cursor-pointer
        [&::-webkit-slider-thumb]:hover:bg-primary-600
    `;

const calculatePercentage = (value: number) => {
    const range = MAXIMUM_VALUE - MINIMUM_VALUE;
    return Math.round(((value - MINIMUM_VALUE) / range) * 100);
};

const RangeSlider = () => {
    const [minValue, setMinValue] = useState<number>(MINIMUM_VALUE);
    const [maxValue, setMaxValue] = useState<number>(MAXIMUM_VALUE);
    const rangeRef = useRef<HTMLDivElement | null>(null);

    const updateRange = () => {
        if (rangeRef.current) {
            rangeRef.current.style.left = `${calculatePercentage(minValue)}%`;
            rangeRef.current.style.right = `${
                100 - calculatePercentage(maxValue)
            }%`;
        }
    };

    useEffect(updateRange, [maxValue, minValue]);

    const handleRangeChange = (
        e: ChangeEvent<HTMLInputElement>,
        isMin: boolean,
    ) => {
        const inputValue = parseInt(e.target.value);
        const isValidRangeGap = isMin
            ? maxValue - inputValue >= RANGE_GAP
            : inputValue - minValue >= RANGE_GAP;

        if (isValidRangeGap) {
            isMin ? setMinValue(inputValue) : setMaxValue(inputValue);
        }
    };

    return (
        <div className={"flex flex-col"}>
            <div
                className={"w-96 h-1.5 rounded-full relative bg-blue-100 mt-5"}
            >
                {["min", "max"].map((type, index) => (
                    <input
                        key={index}
                        type="range"
                        min={MINIMUM_VALUE}
                        max={MAXIMUM_VALUE}
                        value={type === "min" ? minValue : maxValue}
                        onChange={(e) => handleRangeChange(e, type === "min")}
                        className={inputRangeClasses}
                    />
                ))}
                <div
                    ref={rangeRef}
                    style={{ left: "20", right: "0" }}
                    className={"bg-primary absolute z-10 rounded-full h-full"}
                ></div>
            </div>
        </div>
    );
};
export default RangeSlider;
