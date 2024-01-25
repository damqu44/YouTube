import Image from "next/image";
import {Icons} from "@/components/icons";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import SubscribeButton from "@/components/ui/subscribe-button";
import {useNumbersFormatting} from "@/hooks/formats/useNumbersFormatting";
import {isAuthenticated} from "@/utils/Auth";
import '../../FullVideo.css'
import LikeDislikeButtons from "@/components/FullVideo/PrimarySection/AboveTheFold/Actions/LikeDislikeButtons";
import SaveButton from "@/components/FullVideo/PrimarySection/AboveTheFold/Actions/SaveButton";
import ShareButton from "@/components/FullVideo/PrimarySection/AboveTheFold/Actions/ShareButton";
import SettingsButton from "@/components/FullVideo/PrimarySection/AboveTheFold/Actions/SettingsButton";
import DownloadButton from "@/components/FullVideo/PrimarySection/AboveTheFold/Actions/DownloadButton";
import ClipButton from "@/components/FullVideo/PrimarySection/AboveTheFold/Actions/ClipButton";

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
    const {formatSubscribers} = useNumbersFormatting();
    const [isSaveButtonVisible, setIsSaveButtonVisible] = useState<boolean>(false)
    const [isDownloadButtonVisible, setIsDownloadButtonVisible] = useState<boolean>(false)
    const [isClipButtonVisible, setIsClipButtonVisible] = useState<boolean>(false)


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
                <Link className={'mr-3 h-10 w-10'} href={`/${props.channelId}`}>
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
                <ShareButton/>
                {!isAuth ? (
                    <SaveButton isButtonVisible={isSaveButtonVisible}/>
                ) : (
                    <>
                        {isDownloadButtonVisible ? <DownloadButton isButtonVisible={isDownloadButtonVisible}/> : null}
                        {isClipButtonVisible ? <ClipButton isButtonVisible={isClipButtonVisible}/> : null}
                        {isSaveButtonVisible ? <SaveButton isButtonVisible={isSaveButtonVisible}/> : null}
                    </>
                )}
                <SettingsButton isDownloadButtonVisible={isDownloadButtonVisible}
                                isClipButtonVisible={isClipButtonVisible} isSaveButtonVisible={isSaveButtonVisible}/>
            </div>
        </div>
    )
}

TopRow.displayName = 'TopRow'
export default TopRow