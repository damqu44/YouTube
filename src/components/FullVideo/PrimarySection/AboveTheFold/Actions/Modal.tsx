import React, {useEffect, useRef} from "react";

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({isOpen, onClose, children}) => {
    const modalRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (modalRef && !modalRef.current?.contains(event.target as Node)) {
                onClose();
            }
        }

        const handleEscapeKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && modalRef.current) {
                onClose()
            }
        }

        if (isOpen) {
            document.addEventListener("click", handleOutsideClick);
            document.addEventListener("keydown", handleEscapeKey);
        }

        return () => {
            document.removeEventListener("click", handleOutsideClick);
            document.removeEventListener("keydown", handleEscapeKey);
        };
    }, [isOpen, onClose, modalRef]);
    return (
        <div
            ref={modalRef}
            className={`${isOpen ? "flex" : "hidden"} absolute min-w-[400px] min-h-[174px] bg-darkgray z-[9] flex-col top-full left-0 rounded-md`}>
            {children}
        </div>
    );
};

export default Modal;