import { FC, Fragment, ReactNode } from "react";
import { Dialog, Transition } from "@headlessui/react";

export interface IModal {
    open: boolean;
    children: ReactNode;
    showBackdropBlur?: boolean;
    dialogClass?: string;
    onClose: (value: boolean) => void;
}

const Modal: FC<IModal> = ({
    open,
    onClose,
    children,
    showBackdropBlur = true,
    dialogClass = "pt-[10vh]",
}) => {
    return (
        <Transition appear show={open} as={"div"}>
            <Dialog
                onClose={onClose}
                className={`fixed inset-0 top-0 z-50 p-5 ${dialogClass}`}
            >
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo={`opacity-100 ${
                        showBackdropBlur && " backdrop-blur-[2px]"
                    }`}
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Dialog.Overlay className="fixed bg-gradient-to-t from-gray-900/80 to-gray-900/50 inset-0 transition-opacity" />
                </Transition.Child>

                <Transition.Child
                    className="mx-auto w-fit"
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-50"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {children}
                </Transition.Child>
            </Dialog>
        </Transition>
    );
};

export default Modal;
