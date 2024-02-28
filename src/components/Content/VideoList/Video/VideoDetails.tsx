import Link from "next/link";
import Image from "next/image";
import '../../Content.css'
import formatTimeElapsed from "@/hooks/formats/formatTimeElapsed";
import {useNumbersFormatting} from "@/hooks/formats/useNumbersFormatting";
import React from "react";
import {Icons} from "@/components/icons";

interface VideoProps {
    avatar_link: string | null;
    channelId: string;
    id: string;
    title: string;
    channel: string;
    views: string;
    date: string;
    videoType: string;
    description: string;
}

const VideoDetails: React.FC<VideoProps> = (props) => {
    const {formatViews} = useNumbersFormatting();
    const descriptionLines = props.description.split('\\n');
    return (
        <>
            {props.videoType === 'main' || props.videoType === 'compakt' ? (
                <div
                    className={props.videoType === 'main' ? 'relative p-3 flex flex-row justify-between' : props.videoType === 'compakt' ? 'w-[226px] h-[94px] ml-2' : ''}>
                    <div className={'w-full flex flex-row justify-start items-start'}>
                        {props.avatar_link ? (
                                <Link href={`/${props.channelId}`} className={'w-12'}>
                                    <Image src={props.avatar_link} alt={'channel image'} width={36} height={36}
                                           className={'rounded-full cursor-pointer'}></Image>
                                </Link>
                            ) : props.avatar_link === null ? null : (
                                <Icons.profile className={'rounded-full h-40 w-40'}/>
                            )}
                        <div className={'w-56 flex flex-col justify-start items-start text-sm'}>
                            <Link
                                href={`/watch/${props.id}`}
                                className={props.videoType === 'main' ? 'text-base font-medium cursor-pointer line-clamp-3' : props.videoType === 'compakt' ? 'text-sm mb-2 w-full max-h-10 overflow-hidden break-words cursor-pointer' : ''}>{props.title}</Link>
                            <Link
                                className={props.videoType === 'main' ? 'w-full text-secondary hover:text-white truncate' : props.videoType === 'compakt' ? 'text-xs h-5 details-color overflow-hidden break-words' : ''}
                                href={`/${props.channelId}`}>{props.channel}</Link>
                            <Link
                                href={`/watch/${props.id}?autoplay=1`}
                                className={props.videoType === 'main' ? 'text-xs flex' : props.videoType === 'compakt' ? 'flex text-xs h-5 details-color' : ''}>

                                <div className={'text-secondary'}>{formatViews(props.views)}</div>
                                <div className={'font-bold px-1'}>{'\u00B7'}</div>
                                <div className={'text-secondary'}>{formatTimeElapsed(props.date)}</div>
                            </Link>
                        </div>
                    </div>
                    {/*<div className={'absolute right-0 bottom-0'}>*/}
                    {/*    <Icons.three_dots*/}
                    {/*           className={'w-5 h-5 brightness-0 invert cursor-not-allowed rotate-90'}/>*/}
                    {/*</div>*/}
                </div>
            ) : props.videoType === 'result' ? (
                <div
                    className={'p-3 w-full flex flex-col justify-start items-start text-ellipsis'}>
                    <Link href={`/watch/${props.id}`}
                          className={'text-lg font-medium cursor-pointer truncate'}>{props.title}</Link>
                    <Link href={`/watch/${props.id}`} className={'text-xs flex'}>
                        <div className={'text-secondary'}>{formatViews(props.views)}</div>
                        <div className={'font-bold px-1 text-secondary'}>{'\u00B7'}</div>
                        <div className={' text-secondary'}>{formatTimeElapsed(props.date)}</div>
                    </Link>
                    <Link href={`/${props.channelId}`} className={'flex justify-center items-center w-full py-3'}>
                        {props.avatar_link ? (
                            <Image src={props.avatar_link} alt={'channel image'} width={24} height={24}
                                   className={'rounded-full mr-2'}></Image>
                        ) : (
                            <Icons.profile className={'rounded-full h-6 w-6 mr-2'}/>
                        )}
                        <div
                            className={'text-secondary w-full text-xs truncate hover:text-white hover:text-opacity-90'}>{props.channel}</div>
                    </Link>
                    <Link href={`/watch/${props.id}`} id={'video-description'}
                          className={'truncate w-full text-xs text-secondary'}>
                        {descriptionLines.map((line, index) => (
                            <React.Fragment key={index}>
                                {line && line}
                                {index !== descriptionLines.length - 1 && ' '}
                            </React.Fragment>
                        ))}
                    </Link>
                </div>
            ) : null}
        </>
    )
}

export default VideoDetails

