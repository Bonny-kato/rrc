import { useCallback, useEffect, useState } from "react";

type Callback = () => void;

type TProps = {
    open: boolean;
    closeModal: () => void;
};

const useOpenAndCloseModal = (callback?: Callback): TProps => {
    const [open, setOpen] = useState(false);

    // Immediately set state to true on component mount
    useEffect(() => {
        setOpen(true);
    }, []);

    const closeModal = useCallback(() => {
        setOpen(false);

        setTimeout(() => {
            if (callback) {
                callback();
            }
        }, 300);
    }, [callback]);

    return { open, closeModal };
};

export default useOpenAndCloseModal;
