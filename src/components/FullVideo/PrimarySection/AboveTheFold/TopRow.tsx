import Image from "next/image";
import {Icons} from "@/components/icons";
import React from "react";
import SubscribeButton from "@/components/ui/subscribe-button";
import {useNumbersFormatting} from "@/hooks/formats/useNumbersFormatting";
import Link from "next/link";
import {useUser} from "@clerk/nextjs";

type VideoProps = {
    _id: string;
    channel: string;
    subscriptions: string;
    likes: string;
    avatar_link: string;
    channelId: string;
};
const TopRow: React.FC<VideoProps> = (props) => {
    const {formatSubscribers} = useNumbersFormatting();
    const {isSignedIn, user} = useUser()

    return (
        <div id={'top-row'} className={'flex flex-row pt-4'}>
            <div id={'owner'} className={'flex flex-row w-1/2 justify-start items-center'}>
                <Link className={'pr-3'} href={`/${props.channelId}`}>
                    <Image src={props.avatar_link} alt={'channel image'} width={40} height={40}
                           className={'rounded-full cursor-pointer'}></Image>
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
                    <SubscribeButton/>
                </div>
            </div>
            <div id={'actions'}
                 className={'flex flex-row w-1/2 h-10 justify-end items-center text-sm font-medium text-white whitespace-nowrap'}>
                <div id={'top-level-buttons'} className={'flex flex-row h-full'}>
                    <div id={'like-dislike-button'}
                         className={'flex flex-row justify-center items-center'}>
                        <div id={'like-button'}
                             className={'flex flex-row actions-color rounded-l-full justify-center items-center relative'}>
                            <Icons.like
                                className={'w-6 h-7 brightness-0 invert mr-3'}/>
                            <span className={'mr-4'}>{props.likes}</span>
                        </div>
                        <div id={'dislike-button'}
                             className={'flex flex-row actions-color rounded-r-full justify-center items-center mr-2'}>
                            <Icons.dislike
                                className={'w-6 h-7 brightness-0 invert ml-2 mr-1'}/>
                        </div>
                    </div>
                    <div id={'share-button'}
                         className={'flex flex-row actions-color rounded-full justify-center items-center mr-2'}>
                        <Icons.share
                            className={'w-6 h-6 brightness-0 invert mr-1'}/>
                        <span className={'mr-2'}>Udostępnij</span>
                    </div>
                    {!isSignedIn ? (
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

export default TopRow