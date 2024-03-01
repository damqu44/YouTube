import Link from "next/link";
import Image from "next/image";
import '../../Content.css'
import formatTimeElapsed from "@/hooks/formats/formatTimeElapsed";
import {useNumbersFormatting} from "@/hooks/formats/useNumbersFormatting";
import React from "react";
import {Icons} from "@/components/icons";
import {VideoItem} from "@/lib/types";

interface VideoProps {
    video: VideoItem;
    videoType: string;
}

const VideoDetails: React.FC<VideoProps> = ({video, videoType}) => {
    const {formatViews} = useNumbersFormatting();
    const descriptionLines = video.description.split('\\n');
    return (
        <>
            {videoType === 'main' || videoType === 'compakt' ? (
                <div
                    className={ videoType === 'main' ? 'relative p-3 flex flex-row justify-between' : videoType === 'compakt' ? 'w-[226px] h-[94px] ml-2' : ''}>
                    <div className={'w-full flex flex-row justify-start items-start'}>
                        {video.channelInfo.avatar_link ? (
                            <Link href={`/${video.channel_id}`} className={'w-12'}>
                                <Image src={video.channelInfo.avatar_link} alt={'channel image'} width={36} height={36}
                                       className={'rounded-full cursor-pointer'}></Image>
                            </Link>
                        ) : video.channelInfo.avatar_link === null ? null : (
                            <Icons.profile className={'rounded-full h-40 w-40'}/>
                        )}
                        <div className={'w-56 flex flex-col justify-start items-start text-sm'}>
                            <Link
                                href={`/watch/${video.id}`}
                                className={videoType === 'main' ? 'text-base font-medium cursor-pointer line-clamp-3' : videoType === 'compakt' ? 'text-sm mb-2 w-full max-h-10 overflow-hidden break-words cursor-pointer' : ''}>{video.title}</Link>
                            <Link
                                className={videoType === 'main' ? 'w-full text-secondary hover:text-white truncate' : videoType === 'compakt' ? 'text-xs h-5 details-color overflow-hidden break-words' : ''}
                                href={`/${video.channel_id}`}>{video.channelInfo.name}</Link>
                            <Link
                                href={`/watch/${video.id}?autoplay=1`}
                                className={videoType === 'main' ? 'text-xs flex' : videoType === 'compakt' ? 'flex text-xs h-5 details-color' : ''}>

                                <div className={'text-secondary'}>{formatViews(video.views)}</div>
                                <div className={'font-bold px-1'}>{'\u00B7'}</div>
                                <div className={'text-secondary'}>{formatTimeElapsed(video.date)}</div>
                            </Link>
                        </div>
                    </div>
                    {/*<div className={'absolute right-0 bottom-0'}>*/}
                    {/*    <Icons.three_dots*/}
                    {/*           className={'w-5 h-5 brightness-0 invert cursor-not-allowed rotate-90'}/>*/}
                    {/*</div>*/}
                </div>
            ) : videoType === 'result' ? (
                <div
                    className={'p-3 w-full flex flex-col justify-start items-start text-ellipsis'}>
                    <Link href={`/watch/${video.id}`}
                          className={'text-lg font-medium cursor-pointer truncate'}>{video.title}</Link>
                    <Link href={`/watch/${video.id}`} className={'text-xs flex'}>
                        <div className={'text-secondary'}>{formatViews(video.views)}</div>
                        <div className={'font-bold px-1 text-secondary'}>{'\u00B7'}</div>
                        <div className={' text-secondary'}>{formatTimeElapsed(video.date)}</div>
                    </Link>
                    <Link href={`/${video.channel_id}`} className={'flex justify-center items-center w-full py-3'}>
                        {video.channelInfo.avatar_link ? (
                            <Image src={video.channelInfo.avatar_link} alt={'channel image'} width={24} height={24}
                                   className={'rounded-full mr-2'}></Image>
                        ) : (
                            <Icons.profile className={'rounded-full h-6 w-6 mr-2'}/>
                        )}
                        <div
                            className={'text-secondary w-full text-xs truncate hover:text-white hover:text-opacity-90'}>{video.channel}</div>
                    </Link>
                    <Link href={`/watch/${video.id}`} id={'video-description'}
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

