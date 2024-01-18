'use client'
import React, {FC, useEffect, useState} from "react";
import useVideos from "@/hooks/firebase/useVideos";
import PrimarySection from "@/components/FullVideo/PrimarySection/PrimarySection";
import SecondarySection from "@/components/FullVideo/SecondarySection/SecondarySection";
import {VideoItem} from "@/lib/types";

interface FullVideoProps {
    videoId: string
}

const FullVideo: FC<FullVideoProps> = ({videoId}) => {
    const {videos, isVideosLoading, error} = useVideos()

    const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

    useEffect(() => {
        const foundVideo = videos.find(video => video.id === videoId);

        if (foundVideo) {
            setSelectedVideo(foundVideo);
        }
    }, [videos, videoId]);

    const videoDetails = {
        title: selectedVideo?.title ?? '',
        channel: selectedVideo?.channelInfo?.name ?? '',
        subscriptions: selectedVideo?.channelInfo?.subscriptions ?? '',
        avatar_link: selectedVideo?.channelInfo?.avatar_link ?? '',
        channelId: selectedVideo?.channelInfo?._id ?? '',
        likes: selectedVideo?.likes ?? '',
        views: selectedVideo?.views ?? '',
        date: selectedVideo?.date ?? '',
        thumbnail: selectedVideo?.thumbnail ?? '',
        url_id: selectedVideo?.url_id ?? '',
        description: selectedVideo?.description ?? ''
    };

    return (
        <>
            <div id={'content'} className={'flex w-full h-full justify-center items-start pt-5'}>
                <PrimarySection _id={videoId} title={videoDetails.title} channel={videoDetails.channel}
                                subscriptions={videoDetails.subscriptions} likes={videoDetails.likes}
                                views={videoDetails.views} date={videoDetails.date}
                                thumbnail={videoDetails.thumbnail} url_id={videoDetails.url_id}
                                description={videoDetails.description} avatar_link={videoDetails.avatar_link}
                                channelId={videoDetails.channelId}/>

                <SecondarySection videos={videos}/>
            </div>
        </>
    )
}


export default FullVideo