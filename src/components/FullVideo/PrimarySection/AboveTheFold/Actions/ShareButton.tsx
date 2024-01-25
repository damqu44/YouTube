import {Icons} from "@/components/icons";
import React, {useRef, useState} from "react";
import Modal from "@/components/FullVideo/PrimarySection/AboveTheFold/Actions/Modal";
import {usePathname} from "next/navigation";


const ShareButton: React.FC = () => {
    const pathname = usePathname()
    const [isShareModalOpen, setIsShareModalOpen] = useState<boolean>(false)
    const shareLinkRef = useRef<HTMLDivElement>(null)
    const handleModalClose = () => {
        setIsShareModalOpen(false)
    }
    const handleModalOpen = () => {
        setIsShareModalOpen(true)
    }

    const copyShareLink = () => {
        if (shareLinkRef.current) {
            navigator.clipboard.writeText(shareLinkRef.current.innerText)
                .then(() => {
                    console.log('Skopiowano do schowka: ', shareLinkRef.current?.innerText);
                })
                .catch((err) => {
                    console.error('Błąd kopiowania do schowka: ', err);
                });
        } else {
            console.error('Referencja do shareLinkRef.current jest niezdefiniowana.');
        }
    }

    return (
        <div
            onClick={handleModalOpen}
            className={'action-button flex rounded-full mr-2'}>
            <Icons.share
                className={'w-6 h-6 brightness-0 invert mr-1'}/>
            <span className={'mr-2'}>Udostępnij</span>
            <Modal isOpen={isShareModalOpen} onClose={handleModalClose}
                   styles={'absolute bg-darkgray z-[9] flex flex-row top-full left-0 rounded-2xl px-4 py-5 cursor-default'}>
                <div
                    className={'bg-black/50 px-3 py-2 flex justify-start items-center rounded-2xl border border-gray-500'}>
                    <div ref={shareLinkRef}
                         className={' text-base mr-6'}>{'youtube-liart-delta.vercel.app' + pathname}</div>
                    <button onClick={copyShareLink}
                            className={'bg-myblue text-black text-sm rounded-2xl px-4 py-2 hover:bg-opacity-90 focus:bg-opacity-80'}>Kopiuj
                    </button>
                </div>
            </Modal>
        </div>
    )
}

export default ShareButton