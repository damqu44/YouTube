import Image from "next/image";
import {Icons} from "@/components/icons";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import SubscribeButton from "@/components/ui/subscribe-button";
import {useNumbersFormatting} from "@/hooks/formats/useNumbersFormatting";
import {isAuthenticated} from "@/utils/Auth";
import LikeDislikeButtons from "@/components/FullVideo/PrimarySection/AboveTheFold/Actions/LikeDislikeButtons";
import '../../FullVideo.css'
import Modal from "@/components/FullVideo/PrimarySection/AboveTheFold/Actions/Modal";
import {usePathname} from "next/navigation";


type VideoProps = {
    _id: string;
    channel: string;
    subscriptions: string;
    likes: string;
    avatar_link: string;
    channelId: string;
};


const TopRow: React.FC<VideoProps> = (props) => {
    const isAuth = isAuthenticated()
    const pathname = usePathname()
    const {formatSubscribers} = useNumbersFormatting();
    const [isSaveButtonVisible, setIsSaveButtonVisible] = useState<boolean>(false)
    const [isDownloadButtonVisible, setIsDownloadButtonVisible] = useState<boolean>(false)
    const [isClipButtonVisible, setIsClipButtonVisible] = useState<boolean>(false)
    const [isSettingsModalOpen, setIsSettingsModalOpen] = useState<boolean>(false)
    const [isShareModalOpen, setIsShareModalOpen] = useState<boolean>(false)
    const handleModalClose = () => {
        setIsSettingsModalOpen(false)
        setIsShareModalOpen(false)
    }
    const showSettingsModal = () => {
        setIsShareModalOpen(false)
        setIsSettingsModalOpen(true)
    }
    const showShareModal = () => {
        setIsSettingsModalOpen(false)
        setIsShareModalOpen(true)

    }

    useEffect(() => {
        const handleSecondaryVisibility = () => {
            setIsSaveButtonVisible(window.innerWidth > 1920);
            setIsClipButtonVisible(window.innerWidth > 1550);
            setIsDownloadButtonVisible(!(window.innerWidth <= 1325 && window.innerWidth >= 1015));
        }

        handleSecondaryVisibility();  // Initial call
        window.addEventListener("resize", handleSecondaryVisibility);
        return () => {
            window.removeEventListener("resize", handleSecondaryVisibility);
        }
    }, [])
    return (
        <div className={'flex flex-row justify-between mt-4 w-full'}>
            <div className={'flex flex-row justify-center items-center'}>
                <Link className={'pr-3'} href={`/${props.channelId}`}>
                    {props.avatar_link ? (
                        <Image src={props.avatar_link} alt={'channel image'} width={40} height={40}
                               className={'rounded-full cursor-pointer'}></Image>
                    ) : (
                        <Icons.profile className={'w-10 h-10 rounded-full cursor-pointer'}/>
                    )}
                </Link>
                <div id={'channel-info'}
                     className={'flex flex-col justify-center items-center pr-8'}>
                    <Link id={'channel'} href={`/${props.channelId}`}
                          className={'w-full h-6 text-base font-medium cursor-pointer overflow-hidden'}>
                        {props.channel}
                    </Link>
                    <div id={'subscriptions'}
                         className={'w-full flex flex-row'}>
                        <div className={'text-xs gray-color truncate'}>{formatSubscribers(props.subscriptions)}</div>
                    </div>
                </div>
                <div id={'subscribe-button'}>
                    <SubscribeButton channelId={props.channelId}/>
                </div>
            </div>
            <div
                className={'flex flex-row justify-end items-center text-sm font-medium text-white whitespace-nowrap'}>
                <LikeDislikeButtons _id={props._id} likes={props.likes}/>
                <div
                    onClick={showShareModal}
                    className={'action-button flex rounded-full mr-2'}>
                    <Icons.share
                        className={'w-6 h-6 brightness-0 invert mr-1'}/>
                    <span className={'mr-2'}>Udostępnij</span>
                    <Modal isOpen={isShareModalOpen} onClose={handleModalClose}
                           styles={'absolute min-w-[400px] min-h-[50px] bg-darkgray z-[9] flex flex-row top-full left-0 rounded-md'}>
                        <div className={'px-6 py-4'}>{'youtube-liart-delta.vercel.app' + pathname}</div>
                        <button>Kopiuj</button>
                    </Modal>
                </div>
                {!isAuth ? (
                    <div
                        style={{display: isDownloadButtonVisible ? 'flex' : 'none'}}
                        className={'action-button rounded-full mr-2'}>
                        <Icons.save
                            className={'w-6 h-6 brightness-0 invert mr-1'}/>
                        <span className={'mr-2'}>Zapisz</span>
                    </div>
                ) : (
                    <>
                        <div
                            style={{display: isDownloadButtonVisible ? 'flex' : 'none'}}
                            className={'action-button rounded-full mr-2 hover:cursor-not-allowed'}>
                            <Icons.download
                                className={'w-6 h-6 brightness-0 invert mr-1'}/>
                            <span className={'mr-2'}>Pobierz</span>
                        </div>
                        <div
                            style={{display: isClipButtonVisible ? 'flex' : 'none'}}
                            className={'action-button rounded-full mr-2 hover:cursor-not-allowed'}>
                            <Icons.scissors
                                className={'w-6 h-6 brightness-0 invert mr-1'}/>
                            <span className={'mr-2'}>Klip</span>
                        </div>
                        <div
                            style={{display: isSaveButtonVisible ? 'flex' : 'none'}}
                            className={'action-button rounded-full mr-2'}>
                            <Icons.save
                                className={'w-6 h-6 brightness-0 invert mr-1'}/>
                            <span className={'mr-2'}>Zapisz</span>
                        </div>
                    </>
                )}
                <div
                    onClick={showSettingsModal}
                    className={'relative action-button flex rounded-full mr-2'}>
                    <Icons.three_dots
                        className={'w-6 h-6 brightness-0 invert'}/>
                    <Modal
                        styles={'absolute min-w-[50px] bg-darkgray z-[9] flex-col top-full left-0 py-1 rounded-md'}
                        isOpen={isSettingsModalOpen} onClose={handleModalClose}>
                        <div
                            style={{display: isDownloadButtonVisible ? 'none' : 'flex'}}
                            className={'flex justify-start items-center hover:bg-primary py-2 px-4 hover:cursor-not-allowed'}>
                            <Icons.download
                                className={'w-6 h-6 brightness-0 invert mr-1'}/>
                            <span className={'mr-2'}>Pobierz</span>
                        </div>
                        <div
                            style={{display: isClipButtonVisible ? 'none' : 'flex'}}
                            className={'flex justify-start items-center hover:bg-primary py-2 px-4 hover:cursor-not-allowed'}>
                            <Icons.scissors
                                className={'w-6 h-6 brightness-0 invert mr-1'}/>
                            <span className={'mr-2'}>Klip</span>
                        </div>
                        <div
                            style={{display: isSaveButtonVisible ? 'none' : 'flex'}}
                            className={'flex justify-start items-center hover:bg-primary py-2 px-4'}>
                            <Icons.save
                                className={'w-6 h-6 brightness-0 invert mr-1'}/>
                            <span className={'mr-2'}>Zapisz</span>
                        </div>
                        <div
                            className={'flex justify-start items-center hover:bg-primary py-2 px-4 hover:cursor-not-allowed'}>
                            <Icons.feedback
                                className={'w-6 h-6 brightness-0 invert mr-1'}/>
                            <span className={'mr-2'}>Zgłoś</span>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

TopRow.displayName = 'TopRow'
export default TopRow