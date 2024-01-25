import {Icons} from "@/components/icons";
import React, {useState} from "react";
import Modal from "@/components/FullVideo/PrimarySection/AboveTheFold/Actions/Modal";
import SaveButton from "@/components/FullVideo/PrimarySection/AboveTheFold/Actions/SaveButton";
import ClipButton from "@/components/FullVideo/PrimarySection/AboveTheFold/Actions/ClipButton";
import DownloadButton from "@/components/FullVideo/PrimarySection/AboveTheFold/Actions/DownloadButton";

interface SettingsButtonProps {
    isDownloadButtonVisible: boolean;
    isClipButtonVisible: boolean;
    isSaveButtonVisible: boolean;
}

const SettingsButton: React.FC<SettingsButtonProps> = ({isDownloadButtonVisible,isClipButtonVisible,isSaveButtonVisible}) => {
    const [isSettingsModalOpen, setIsSettingsModalOpen] = useState<boolean>(false)

    const handleModalClose = () => {
        setIsSettingsModalOpen(false)
    }
    const handleModalOpen = () => {
        setIsSettingsModalOpen(true)
    }
    return (
        <div
            onClick={handleModalOpen}
            className={'relative action-button flex rounded-full mr-2'}>
            <Icons.three_dots
                className={'w-6 h-6 brightness-0 invert'}/>
            <Modal
                styles={'absolute min-w-[50px] bg-darkgray z-[9] flex-col top-full left-0 py-1 rounded-md'}
                isOpen={isSettingsModalOpen} onClose={handleModalClose}>
                {!isDownloadButtonVisible ? <DownloadButton isButtonVisible={isDownloadButtonVisible}/> : null}
                {!isClipButtonVisible ? <ClipButton isButtonVisible={isClipButtonVisible}/> : null}
                {!isSaveButtonVisible ? <SaveButton isButtonVisible={isSaveButtonVisible}></SaveButton> : null}
                <div
                    className={'flex justify-start items-center hover:bg-primary py-2 px-4 hover:cursor-not-allowed'}>
                    <Icons.feedback
                        className={'w-6 h-6 brightness-0 invert mr-1'}/>
                    <span className={'mr-2'}>Zgłoś</span>
                </div>
            </Modal>
        </div>
    )
}

export default SettingsButton