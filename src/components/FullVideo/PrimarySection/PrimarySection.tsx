import React from "react";
import AboveTheFold from "@/components/FullVideo/PrimarySection/AboveTheFold/AboveTheFold";
import Comments from "@/components/FullVideo/PrimarySection/Comments/Comments";
import './PrimarySection.css'
import {VideoItem} from "@/lib/types";

type VideoProps = {
    video: VideoItem
};

const PrimarySection: React.FC<VideoProps> = ({video}) => {
    return (
        <>
            <div id={'primary'} className={'ml-32 mr-6 w-full max-w-[1300px] min-h-screen'}>
                <div id={'player'} className={'h-auto'}>
                    <div id={'aspect-content'} className={'h-auto'}>
                        <iframe
                            id={'full-video'}
                            src={`https://www.youtube.com/embed/${video.url_id}`}
                            title={video.title}
                            className={'rounded-xl w-full'}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
                <div id={'below'} className={'flex flex-col w-full'}>
                    <AboveTheFold video={video}/>
                    <Comments/>
                </div>
            </div>
        </>
    )
}

export default PrimarySection