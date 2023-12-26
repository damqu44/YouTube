import Image from "next/image";
import React from "react";
import formatTimeElapsed from "@/hooks/formats/formatTimeElapsed";
import formatDuration from "@/hooks/formats/formatDuration";
import {useNumbersFormatting} from "@/hooks/formats/useNumbersFormatting";
import Link from "next/link";

type CompaktVideoProps = {
    _id: string;
    title: string;
    channel: string;
    channelId: string;
    thumbnail: string;
    views: string;
    date: string;
    duration: string;
};

const CompaktVideo: React.FC<CompaktVideoProps> = (props) => {
    const {formatViews} = useNumbersFormatting();

    return (
        <div id={'compact-video'} className={'h-24 w-full flex flex-row justify-center items-start mb-2'}>
            <Link id={'compact-video-thumbnail'} href={`/watch/${props._id}`}
                  className={'relative h-full w-2/5 mr-2 cursor-pointer'}>
                <Image src={props.thumbnail} width={256} height={144} alt={'video thumbnail'}
                       className={'rounded-xl h-full'}/>
                <div id={'compakt-video-length'}
                     className={'absolute text-xs right-1 bottom-1 bg-zinc-950 px-1 bg-opacity-80 rounded-md'}>
                    {formatDuration(props.duration)}
                </div>
            </Link>

            <div id={'compact-video-details'}
                 className={'w-3/5 h-full flex flex-col justify-start items-start pt-1'}>
                <Link href={`/watch/${props._id}`} id={'compact-video-title'}
                      className={'text-sm mb-2 w-full max-h-10 overflow-hidden break-words cursor-pointer'}>
                    {props.title}
                </Link>
                <Link href={`/${props.channelId}`} id={'channel-name'}
                      className={'text-xs h-5 details-color overflow-hidden break-words'}>{props.channel}
                </Link>
                <Link href={`/watch/${props._id}`} id={'compact-video-by-line-container'}
                      className={'text-xs h-5 details-color'}>
                    <span id={'video-views'}>{formatViews(props.views)}</span>
                    <span className={'font-bold px-1'}>{'\u00B7'}</span>
                    <span id={'video-time-added'}>{formatTimeElapsed(props.date)}</span>
                </Link>
            </div>
        </div>
    )
}

export default CompaktVideo