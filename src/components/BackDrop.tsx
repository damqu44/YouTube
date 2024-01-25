import React from "react";

interface BackdropProps {
    isVisible: boolean;
    onClick: () => void;
}

const Backdrop: React.FC<BackdropProps> = ({ isVisible, onClick }) => {
    return (
        <>
            {isVisible && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-10"
                    onClick={onClick}
                />
            )}
        </>
    );
};

export default Backdrop;