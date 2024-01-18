'use client'
import CompaktVideo from "@/components/FullVideo/SecondarySection/CompaktVideoSection/CompaktVideo";
import React from "react";
import {VideoItem} from "@/lib/types";

type CompaktVideosProps = {
    videos: VideoItem[]
}
const CompaktVideos: React.FC<CompaktVideosProps> = ({videos}) => {


    return (
        <div id={'contents'} className={'w-full min-h-screen flex flex-col justify-start items-start'}>
            {videos.map((video) => (
                <CompaktVideo
                    key={video.id}
                    _id={video.id}
                    title={video.title}
                    channel={video.channelInfo!.name}
                    channelId={video.channelInfo!._id}
                    thumbnail={video.thumbnail}
                    views={video.views}
                    date={video.date}
                    duration={video.duration}
                />
            ))}
        </div>
    )
}

export default CompaktVideos