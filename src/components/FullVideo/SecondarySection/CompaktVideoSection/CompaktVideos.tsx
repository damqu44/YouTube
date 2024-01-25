'use client'
import React from "react";
import {VideoItem} from "@/lib/types";
import Video from "@/components/Content/VideoList/Video/Video";

type CompaktVideosProps = {
    videos: VideoItem[]
}
const CompaktVideos: React.FC<CompaktVideosProps> = ({videos}) => {

    return (
        <div className={'w-full min-h-screen flex flex-col justify-start items-start'}>
            {videos.map((video, index) => (
                <div className={'h-24 w-full flex flex-row justify-center items-start mb-2'}>
                    <Video
                        key={index}
                        _id={video.id}
                        title={video.title}
                        channel={video.channelInfo!.name}
                        channelId={video.channelInfo!._id}
                        thumbnail={video.thumbnail}
                        views={video.views}
                        date={video.date}
                        duration={video.duration}
                        category={video.category}
                        avatar_link={null}
                        url_id={video.url_id}
                        description={video.description}
                        videoType='compakt'
                        flexDirection='row'
                        height='96px'
                        width='168px'
                    />
                </div>
            ))}
        </div>
    )
}

export default CompaktVideos