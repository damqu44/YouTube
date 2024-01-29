import React from 'react'
import './player.css'
import FullVideo from "@/components/FullVideo/FullVideo";
import getVideosWithChannels from "@/lib/fetchers/videosWithChannels";
import {notFound} from "next/navigation";

interface pageProps {
    params: {
        id: string
    }
}


export default async function FullVideoPage({params}: pageProps) {
    const videoId = decodeURIComponent(params.id)
    const videos = await getVideosWithChannels()
    const selectedVideo = videos?.find(video => video.id === videoId);

    if (!selectedVideo || !videos) {
        notFound()
    }


    return (
        <>
            <FullVideo videos={videos} videoId={videoId} selectedVideo={selectedVideo}/>
        </>

    )
}

