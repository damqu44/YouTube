import Link from "next/link";
import Image from "next/image";
import formatTimeElapsed from "@/hooks/formats/formatTimeElapsed";
import {useNumbersFormatting} from "@/hooks/formats/useNumbersFormatting";
import menuicon from "@/../public/icons/menu.svg";
import React from "react";

interface VideoProps {
    avatar_link: string | null;
    channelId: string;
    _id: string;
    title: string;
    channel: string;
    views: string;
    date: string;
}
const VideoDetails: React.FC<VideoProps> = ({avatar_link,channelId,_id,title,channel,views,date}) => {
    const {formatViews} = useNumbersFormatting();

    return (
        <div id={'details'} className={'p-3 flex flex-row justify-between'}>
            <div className={'w-full flex flex-row justify-start items-start'}>
                {avatar_link !== null && (
                    <Link href={`/${channelId}`} className={'w-12'}>
                        <Image src={avatar_link} alt={'channel image'} width={36} height={36}
                               className={'rounded-full cursor-pointer'}></Image>
                    </Link>
                )}
                <div id={'metadata'} className={'w-56 flex flex-col justify-start items-start text-sm'}>
                    <Link id={'video-title-link'} href={`/watch/${_id}?autoplay=1`}
                          className={'text-base font-medium cursor-pointer line-clamp-3'}>{title}</Link>
                    <Link id={'channel-name'} className={'w-full video-color-channel truncate'}
                          href={`/${channelId}`}>{channel}</Link>
                    <Link href={`/watch/${_id}?autoplay=1`} id={'by-line-container'}
                          className={'text-xs flex'}>
                        <div id={'video-views'}
                             className={'video-color-views'}>{formatViews(views)}
                        </div>
                        <div className={'font-bold px-1'}>{'\u00B7'}</div>
                        <div id={'video-time-added'}
                             className={'video-color-views'}>{formatTimeElapsed(date)}</div>
                    </Link>
                </div>
            </div>
            <div className={'w-8'}>
                <Image src={menuicon} alt={'video settings'}
                       className={'pb-6 brightness-0 invert cursor-not-allowed'}></Image>
            </div>
        </div>
    )
}

export default VideoDetails