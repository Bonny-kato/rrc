import { FC, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { IModal } from "@/Components/Modal";

interface IProps extends Omit<IModal, "dialogClass"> {
    position?: "left" | "right";
}

const SlideOver: FC<IProps> = ({
    onClose,
    open,
    children,
    position = "right",
}) => {
    const isRightSide = position === "right";
    const transformDirection = isRightSide
        ? "translate-x-full"
        : "-translate-x-full";
    const transformDirectionZero = "translate-x-0";

    return (
        <Transition appear show={open} as={"div"}>
            <Dialog
                onClose={onClose}
                className={`fixed top-0 h-full ${
                    isRightSide ? "right-0" : "left-0 "
                } z-40`}
            >
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100 backdrop-blur-[2px]"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Dialog.Overlay className="fixed inset-0 bg-[#192B40]/70 transition-opacity" />
                </Transition.Child>

                <Transition.Child
                    className={"h-full relative"}
                    enter="transform transition ease-in-out duration-300 "
                    enterFrom={transformDirection}
                    enterTo={transformDirectionZero}
                    leave="transform transition ease-in-out duration-300 "
                    leaveFrom={transformDirectionZero}
                    leaveTo={transformDirection}
                >
                    {children}
                </Transition.Child>
            </Dialog>
        </Transition>
    );
};

export default SlideOver;
