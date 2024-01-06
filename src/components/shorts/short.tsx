'use client'
import React from "react";
import useVideos from "@/hooks/firebase/useVideos";
import './shorts.css'
import {ChannelItem} from "@/hooks/firebase/useChannels";
import {VideoItem} from "@/hooks/firebase/useVideos";
import Link from "next/link";
import Image from "next/image";
import SubscribeButton from "@/components/ui/subscribe-button";

type VideoProps = {
    videoId: string;
    sortedVideos: VideoItem[];
}

const Short: React.FC<VideoProps> = (props) => {
    const shortVideo = props.sortedVideos.find(video => video.id === props.videoId)

    if (!shortVideo) {
        return <div>Video not found</div>;
    }
    // IFRAME TRZEBA ZAKRYC DIVEM BY DZIALAL WHELL -> NASTEPNIE DODAC MOZLIWOSC ZATRZYMANIA VIDEO KLIKAJAC NA TEN DIV
    // TRZEBA TEZ ZROBIC BAZE SHORTS Z NOWYMI DANYMI
    return (
        <>
            <div key={shortVideo.id.toString()} id={'short'} className={'flex w-full justify-center items-start py-5'}>
                <div id={'short-player'} className={'w-1/3 h-full flex relative'}>
                    <iframe
                        src={`https://www.youtube.com/embed/${shortVideo.url_id}?autoplay=1`}
                        title={shortVideo.title}
                        className={'w-full h-full rounded-xl'}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                    <div id={'short-overlay'} className={'w-full absolute flex flex-col bottom-0 bg-black bg-opacity-80'}>
                        <div className={'flex flex-row justify-start items-center py-2'}>
                            {shortVideo.channelInfo.avatar_link !== null && (
                                <Link href={`/${shortVideo.channelInfo._id}`} className={'px-3'}>
                                    <Image src={shortVideo.channelInfo.avatar_link} alt={'channel image'} width={36} height={36}
                                           className={'rounded-full cursor-pointer'}></Image>
                                </Link>
                            )}
                            <Link id={'channel-name'} className={'pr-2'}
                                  href={`/${shortVideo.channelInfo._id}`}>{shortVideo.channelInfo._id}</Link>
                            <SubscribeButton />
                        </div>
                        <div className={'px-2 pb-2'}>Tutaj jest opis filmu...</div>
                    </div>
                    <div id={'short-actions'} className={'absolute flex flex-col bottom-0'}>
                        <div>like button</div>
                        <div>dislike button</div>
                        <div>comments button</div>
                        <div>share button</div>
                        <div>settings button</div>
                        <div>channel img</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Short