import './Results.css'
import Image from "next/image";
import React, {useEffect, useRef, useState} from "react";
import Link from "next/link";
import formatTimeElapsed from "@/hooks/formats/formatTimeElapsed";
import formatDuration from "@/hooks/formats/formatDuration";
import {useNumbersFormatting} from "@/hooks/formats/useNumbersFormatting";
import ReactPlayer from "react-player";
import {Icons} from "@/components/icons";

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
    url_id: string;
};


const VideoResult: React.FC<VideoProps> = (props) => {
    const descriptionLines = props.description.split('\\n');
    const {formatViews} = useNumbersFormatting();

    const ReactPlayerContent = () => (
        <ReactPlayer
            playing={true}
            controls={false}
            url={`https://www.youtube.com/embed/${props.url_id}`}
            width="100%"
            height="100%"
            volume={0}
            muted={true}
        ></ReactPlayer>
    );

    const ReactPlayerContainer: React.FC<{
        triggerInset?: string;
        renderReactPlayer: () => React.ReactNode;
        children: React.ReactNode;
    }> = ({renderReactPlayer, children}) => {
        const [showReactPlayer, setShowReactPlayer] = useState(false)
        const containerRef = useRef<HTMLDivElement | null>(null)

        return (
            <div ref={containerRef} onMouseLeave={() => setShowReactPlayer(false)}
                 className={'relative flex flex-col w-full cursor-pointer mt-2'}>
                <div id={'video-results'} onMouseEnter={() => setShowReactPlayer(true)}
                     className={'flex flex-row w-full m-2'} style={{height: '220px'}}>
                    {children}
                </div>
                {showReactPlayer && (
                    <div className={'absolute top-2 left-2 overflow-hidden'} style={{width: '360px', height: '220px'}}>
                        {renderReactPlayer()}
                    </div>
                )}
            </div>
        );
    };

    return (
        <ReactPlayerContainer renderReactPlayer={() => <ReactPlayerContent/>}>
            <Link id={'thumbnail'} href={`/watch/${props._id}`} style={{width: '360px', height: '220px'}}
                  className={'flex flex-shrink-0 relative  cursor-pointer'}>
                <Image src={props.thumbnail} fill={true} className={'rounded-xl'}
                    // style={{width: '360px', height: '100%'}}
                       alt={'an image presenting the theme of the video'}></Image>
                <div id={'video-length'}
                     className={'absolute text-sm right-1 bottom-1 bg-zinc-950 px-1 bg-opacity-80 rounded-md'}>
                    {formatDuration(props.duration)}
                </div>
            </Link>
            <div id={'details-results'}
                 className={'p-3 w-full flex flex-col justify-start items-start text-ellipsis'}>
                <Link id={'video-title-link'} href={`/watch/${props._id}`}
                      className={'text-lg font-medium cursor-pointer truncate'}>{props.title}</Link>
                <Link href={`/watch/${props._id}`} id={'by-line-container'} className={'text-xs flex'}>
                    <div id={'video-views'}
                         className={'text-secondary'}>{formatViews(props.views)}
                    </div>
                    <div className={'font-bold px-1 text-secondary'}>{'\u00B7'}</div>
                    <div id={'video-time-added'}
                         className={' text-secondary'}>{formatTimeElapsed(props.date)}</div>
                </Link>
                <Link href={`/${props.channelId}`} className={'flex justify-center items-center w-full py-3'}>
                    {props.avatar_link ? (
                        <Image src={props.avatar_link} alt={'channel image'} width={24} height={24}
                               className={'rounded-full cursor-pointer mr-2'}></Image>
                    ) : (
                        <Icons.profile className={'rounded-full h-40 w-40'}/>
                    )}
                    <div id={'channel-name'}
                         className={'text-secondary w-full text-xs truncate hover:text-white hover:text-opacity-90'}>{props.channel}</div>
                </Link>
                <Link href={`/watch/${props._id}`} id={'video-description'}
                      className={'truncate w-full text-xs text-secondary'}>
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
        </ReactPlayerContainer>
    )
};
export default VideoResult