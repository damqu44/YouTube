import './Results.css'
import Image from "next/image";
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
    avatar_link: string;
    category: string[];
    description: string;
};


const VideoResult: React.FC<VideoProps> = (props) => {
    const descriptionLines = props.description.split('\\n');


    const {formatViews} = useNumbersFormatting();
    // {props.title.length > 20 ? `${props.title.slice(0, 20)}...` : props.title}
    return (
        <>
            <div key={props._id.toString()} id={'video-results'} className={'w-full max-h-56 flex flex-row mb-5'}>
                <Link id={'thumbnail'} href={`/watch/${props._id}`}
                      className={'relative p-2 cursor-pointer'}>
                    <Image src={props.thumbnail} width={360} height={202} className={'rounded-xl w-96 h-52'}
                           alt={'an image presenting the theme of the video'}></Image>
                    <div id={'video-length'}
                         className={'absolute text-sm right-3 bottom-3 bg-zinc-950 px-1 bg-opacity-80 rounded-md'}>
                        {formatDuration(props.duration)}
                    </div>
                </Link>
                <div id={'details-results'} className={'p-3 w-full flex flex-col justify-start items-start'}>
                    <Link id={'video-title-link'} href={`/watch/${props._id}`}
                          className={'text-lg font-medium cursor-pointer'}>{props.title}</Link>
                    <Link href={`/watch/${props._id}`} id={'by-line-container'} className={'text-xs flex'}>
                        <div id={'video-views'}
                             className={'dark-gray-color'}>{formatViews(props.views)}
                        </div>
                        <div className={'dark-gray-color font-bold px-1'}>{'\u00B7'}</div>
                        <div id={'video-time-added'}
                             className={'dark-gray-color'}>{formatTimeElapsed(props.date)}</div>
                    </Link>
                    <Link href={`/${props.channelId}`} className={'flex justify-center items-center w-full py-3'}>
                        <Image src={props.avatar_link} alt={'channel image'} width={24} height={24}
                               className={'rounded-full cursor-pointer mr-2'}></Image>
                        <div id={'channel-name'} className={'video-color-channel dark-gray-color w-full text-xs truncate hover:text-white hover:text-opacity-90'}>{props.channel}</div>
                    </Link>
                    <Link href={`/watch/${props._id}`} id={'video-description'}
                          className={'truncate w-full text-xs dark-gray-color'}>
                        {descriptionLines.map((line, index) => (
                            <React.Fragment key={index}>
                                {line && line}
                                {index !== descriptionLines.length - 1 && ' '}
                            </React.Fragment>
                        ))}
                    </Link>
                </div>
                {/*<div className={'w-8'}>*/}
                {/*    <Image src={menuicon} alt={'video settings'}*/}
                {/*           className={'pb-6 brightness-0 invert cursor-not-allowed'}></Image>*/}
                {/*</div>*/}

            </div>


        </>)
};
export default VideoResult