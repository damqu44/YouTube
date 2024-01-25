import {Icons} from "@/components/icons";
import Modal from "@/components/FullVideo/PrimarySection/AboveTheFold/Actions/Modal";
import React, {useEffect, useState} from "react";
import BackDrop from "@/components/BackDrop";

interface SaveButtonProps {
    isButtonVisible: boolean;
}
const SaveButton: React.FC <SaveButtonProps>= ({isButtonVisible}) => {
    const [isSaveModalOpen, setIsSaveModalOpen] = useState<boolean>(false)

    const handleModalOpen = () => {
        setIsSaveModalOpen(true)
    }

    const handleModalClose = () => {
        setIsSaveModalOpen(false)
    }

    return (
        <>
            <div
                onClick={handleModalOpen}
                className={isButtonVisible ? 'action-button flex rounded-full mr-2' : 'flex justify-start items-center hover:bg-primary py-2 px-4'}>
                <Icons.save
                    className={'w-6 h-6 brightness-0 invert mr-1'}/>
                <span className={'mr-2'}>Zapisz</span>
            </div>
            <BackDrop isVisible={isSaveModalOpen} onClick={handleModalClose}/>
            <Modal isOpen={isSaveModalOpen} onClose={handleModalClose}
                   styles={'fixed bg-darkgray z-[12] flex flex-col pt-6 rounded-md top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] cursor-default'}>
                <>
                    <div>
                        <div className={'text-lg mb-5 pl-4 pr-12 '}>Zapisz film na playliście...</div>
                    </div>
                    <ul className={'flex flex-col pl-4'}>
                        <li className={'flex cursor-pointer mb-4'}>
                            <div className={'w-5 h-5 bg-transparent border-2 border-white'}></div>
                            <div className={'pl-4 text-md hover:text-white/80'}>Do obejrzenia</div>
                        </li>
                        <li className={'flex cursor-pointer mb-4'}>
                            <div className={'w-5 h-5 bg-transparent border-2 border-white'}></div>
                            <div className={'pl-4 text-md hover:text-white/80'}>Przykładowa lista</div>
                        </li>
                    </ul>
                    <div className={'flex py-2 pl-4 pr-12 cursor-pointer'}>
                        <Icons.plus className={'w-6 h-6 brightness-0 invert mr-3'}/>
                        <div className={'hover:text-white/80'}>Utwórz nową playlistę</div>
                    </div>
                </>
            </Modal>
        </>
    )
}

export default SaveButton