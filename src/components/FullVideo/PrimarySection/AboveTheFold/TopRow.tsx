import Image from "next/image";
import {Icons} from "@/components/icons";
import Link from "next/link";
import React from "react";
import SubscribeButton from "@/components/ui/subscribe-button";
import {useNumbersFormatting} from "@/hooks/formats/useNumbersFormatting";
import {isAuthenticated} from "@/utils/Auth";
import LikeDislikeButtons from "@/components/FullVideo/PrimarySection/AboveTheFold/Actions/LikeDislikeButtons";


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

    return (
        <div id={'top-row'} className={'flex flex-row pt-4'}>
            <div id={'owner'} className={'flex flex-row w-1/2 justify-start items-center'}>
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
                        <div className={'text-xs gray-color'}>{formatSubscribers(props.subscriptions)}</div>
                    </div>
                </div>
                <div id={'subscribe-button'}>
                    <SubscribeButton channelId={props.channelId}/>
                </div>
            </div>
            <div id={'actions'}
                 className={'flex flex-row w-1/2 h-10 justify-end items-center text-sm font-medium text-white whitespace-nowrap'}>
                <div id={'top-level-buttons'} className={'flex flex-row h-full'}>
                    <LikeDislikeButtons _id={props._id} likes={props.likes}/>
                    <div id={'share-button'}
                         className={'flex flex-row actions-color rounded-full justify-center items-center mr-2'}>
                        <Icons.share
                            className={'w-6 h-6 brightness-0 invert mr-1'}/>
                        <span className={'mr-2'}>Udostępnij</span>
                    </div>
                    {!isAuth ? (
                        <div id={'save-button'}
                             className={'flex flex-row actions-color rounded-full justify-center items-center mr-3'}>
                            <Icons.save
                                className={'w-6 h-6 brightness-0 invert mr-1'}/>
                            <span className={'mr-2'}>Zapisz</span>
                        </div>
                    ) : (
                        <>
                            <div id={'download-button'}
                                 className={'flex flex-row actions-color rounded-full justify-center items-center mr-3'}>
                                <Icons.download
                                    className={'w-6 h-6 brightness-0 invert mr-1'}/>
                                <span className={'mr-2'}>Pobierz</span>
                            </div>
                            <div id={'clip-button'}
                                 className={'flex flex-row actions-color rounded-full justify-center items-center mr-3'}>
                                <Icons.scissors
                                    className={'w-6 h-6 brightness-0 invert mr-1'}/>
                                <span className={'mr-2'}>Klip</span>
                            </div>
                        </>
                    )}
                    <div id={'spec-button'}
                         className={'actions-color h-full flex justify-center items-center rounded-full hover:cursor-not-allowed'}>
                        <Icons.three_dots
                            className={'w-6 h-7 brightness-0 invert'}/>
                    </div>


                </div>
            </div>
        </div>
    )
}

TopRow.displayName = 'TopRow'
export default TopRow