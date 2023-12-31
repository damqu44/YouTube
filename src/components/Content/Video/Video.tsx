import Image from "next/image";
import menuicon from "../../../../public/icons/menu.svg";
import React from "react";
import Link from "next/link";
import formatTimeElapsed from "@/hooks/formats/formatTimeElapsed";
import formatDuration from "@/hooks/formats/formatDuration";
import {useNumbersFormatting} from "@/hooks/formats/useNumbersFormatting";

type VideoProps = {
    _id: string;
    title: string;
    channel: string;
    channelId: string;
    thumbnail: string;
    views: string;
    date: string;
    duration: string;
    avatar_link: string | null;
    category: string[];
};


const Video: React.FC<VideoProps> = (props) => {
    const {formatViews} = useNumbersFormatting();
    // {props.title.length > 20 ? `${props.title.slice(0, 20)}...` : props.title}
    return (
        <>
            <div key={props._id.toString()} id={'video'} className={'flex flex-col mt-3 mb-5'}>
                <Link id={'thumbnail'} href={`/watch/${props._id}`}
                      className={'relative text-xs pr-4 w-full cursor-pointer'}>
                    <Image src={props.thumbnail} width={256} height={144}
                           className={'rounded-xl w-full h-44'}
                           alt={'an image presenting the theme of the video'}></Image>
                    <div id={'video-length'}
                         className={'absolute text-sm right-5 bottom-2 bg-zinc-950 px-1 bg-opacity-80 rounded-md'}>
                        {formatDuration(props.duration)}
                    </div>
                </Link>
                <div id={'details'} className={'p-3 flex flex-row justify-between'}>
                    <div className={'w-full flex flex-row justify-start items-start'}>
                        {props.avatar_link !== null && (
                            <Link href={`/${props.channelId}`} className={'w-12'}>
                                <Image src={props.avatar_link} alt={'channel image'} width={36} height={36}
                                       className={'rounded-full cursor-pointer'}></Image>
                            </Link>
                        )}
                        <div id={'metadata'} className={'w-56 flex flex-col justify-start items-start text-sm'}>
                            <Link id={'video-title-link'} href={`/watch/${props._id}`}
                                  className={'text-base font-medium cursor-pointer'}>{props.title}</Link>
                            <Link id={'channel-name'} className={'video-color-channel'}
                                  href={`/${props.channelId}`}>{props.channel}</Link>
                            <Link href={`/watch/${props._id}`} id={'by-line-container'} className={'text-xs flex'}>
                                <div id={'video-views'}
                                     className={'video-color-views'}>{formatViews(props.views)}
                                </div>
                                <div className={'font-bold px-1'}>{'\u00B7'}</div>
                                <div id={'video-time-added'}
                                     className={'video-color-views'}>{formatTimeElapsed(props.date)}</div>
                            </Link>
                        </div>
                    </div>
                    <div className={'w-8'}>
                        <Image src={menuicon} alt={'video settings'}
                               className={'pb-6 brightness-0 invert cursor-not-allowed'}></Image>
                    </div>
                </div>
            </div>


        </>)
};
export default Video