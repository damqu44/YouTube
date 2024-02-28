'use client'
import React from "react";
import './shorts.css'
import {VideoItem} from "@/lib/types";
import Link from "next/link";
import Image from "next/image";
import SubscribeButton from "@/components/ui/subscribe-button";
import ReactPlayer from "react-player/youtube";
import {Icons} from "@/components/icons";

type VideoProps = {
    videoId: string;
    sortedVideos: VideoItem[];
}

const Short: React.FC<VideoProps> = (props) => {
    const shortVideo = props.sortedVideos.find(video => video.id === props.videoId)

    if (!shortVideo) {
        return <div>Video not found</div>;
    }
    console.log(shortVideo)
    // IFRAME TRZEBA ZAKRYC DIVEM BY DZIALAL WHELL -> NASTEPNIE DODAC MOZLIWOSC ZATRZYMANIA VIDEO KLIKAJAC NA TEN DIV
    // TRZEBA TEZ ZROBIC BAZE SHORTS Z NOWYMI DANYMI
    return (
        <>
            <div key={shortVideo.id.toString()} id={'short'} className={'flex w-full justify-center items-start py-5'}>
                <div id={'short-player'} className={'w-1/3 h-full flex relative rounded-xl'}>
                    <ReactPlayer
                        playing={true}
                        loop={true}
                        controls={false}
                        url={`https://www.youtube.com/embed/${shortVideo.url_id}`}
                        width={'100%'}
                        height={'100%'}
                    >
                    </ReactPlayer>
                    <div id={'short-overlay'}
                         className={'w-full absolute flex flex-col bottom-0 bg-black bg-opacity-80'}>
                        <div className={'flex flex-row justify-start items-center py-2'}>
                            {shortVideo.channelInfo.avatar_link !== null && (
                                <Link href={`/${shortVideo.channelInfo.id}`} className={'px-3'}>
                                    <Image src={shortVideo.channelInfo.avatar_link} alt={'channel image'} width={36}
                                           height={36}
                                           className={'rounded-full cursor-pointer'}></Image>
                                </Link>
                            )}
                            <Link id={'channel-name'} className={'pr-2'}
                                  href={`/${shortVideo.channelInfo.id}`}>{shortVideo.channelInfo.id}</Link>
                            <SubscribeButton channelId={shortVideo.channelInfo.id}/>
                        </div>
                        <div className={'px-2 pb-2'}>Tutaj jest opis filmu...</div>
                    </div>
                    <div id={'short-actions'} className={'absolute flex flex-col justify-start items-start bottom-0'}>
                        <div className={'short-action-button-container'}>
                            <div className={'short-action-button'}>
                                <Icons.like_filled/></div>
                            <div>42 tys.</div>
                        </div>
                        <div className={'short-action-button-container'}>
                            <div className={'short-action-button'}>
                                <Icons.dislike_filled/>
                            </div>
                            <div>Nie ...</div>
                        </div>
                        <div className={'short-action-button-container'}>
                            <div className={'short-action-button'}>
                                <Icons.comments/>
                            </div>
                            <div>238</div>
                        </div>
                        <div className={'short-action-button-container'}>
                            <div className={'short-action-button'}>
                                <Icons.share_filled/></div>
                            <div>Udostępnij</div>
                        </div>
                        <div className={'short-action-button-container'}>
                            <div className={'short-action-button'}>
                                <Icons.three_dots/></div>
                        </div>
                        <div className={'short-action-button text-xs'}>channel</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Short