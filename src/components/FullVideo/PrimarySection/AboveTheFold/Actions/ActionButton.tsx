import Modal from "@/components/FullVideo/PrimarySection/AboveTheFold/Actions/Modal";
import LoginButton from "@/components/auth/login-button";
import React, {useState} from "react";
import {isAuthenticated} from "@/utils/Auth";
import {UserAuth} from "@/contexts/AuthContext";
import {doc} from "@firebase/firestore";
import {db} from "@/lib/firebase/firebase";
import '@/components/FullVideo/FullVideo.css'

interface ActionButtonProps {
    _id: string;
    onClick: () => void;
    primaryContents: string;
    secondaryContents: string;
    btnStyle: string;
    children: React.ReactNode;
    modal: boolean;
}

const ActionButton: React.FC<ActionButtonProps> = (props) => {
    const isAuth = isAuthenticated();
    const {user} = UserAuth();
    const userEmail = user?.email;
    const userRef = userEmail ? doc(db, 'users', userEmail) : null;
    const [isModalOpen, setIsModalOpen] = useState<boolean>(props.modal);

    const handleModalClose = () => {
        setIsModalOpen(false);
    }

    return (
        <div className={'relative flex justify-center items-center'}>
            <div
                onClick={props.onClick}
                className={props.btnStyle}>
                {props.children}
            </div>
            <Modal isOpen={isModalOpen} onClose={handleModalClose}
                   styles={'absolute min-w-[400px] min-h-[174px] bg-darkgray z-[9] flex-col top-full left-0 rounded-md'}>
                    <span
                        className={'px-5 pt-5 text-base'}>{props.primaryContents}</span>
                <span className={'px-5 pt-3 text-sm text-secondary'}>{props.secondaryContents}</span>
                <div className={'px-5 pt-10 pb-5'}><LoginButton/></div>
            </Modal>
        </div>
    )
}

export default ActionButton