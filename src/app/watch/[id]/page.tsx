import React from 'react'
import './player.css'
import FullVideo from "@/components/FullVideo/FullVideo";
import getVideosWithChannels from "@/lib/fetchers/videosWithChannels";
import {notFound} from "next/navigation";
import {doc, getDoc} from "@firebase/firestore";
import {db} from "@/lib/firebase/firebase";
import {ChannelItem, VideoItem, VideoItemWithoutChannelInfo} from "@/lib/types";
import getComments from "@/lib/firebase/utils/getComments";

interface pageProps {
    params: {
        id: string
    }
}


export default async function FullVideoPage({params}: pageProps) {
    const videoId = decodeURIComponent(params.id)
    const comments = await getComments(videoId)

    const videoDoc = await getDoc(doc(db, 'videos', videoId))
    const videoData = videoDoc.data() as VideoItemWithoutChannelInfo
    const videos = await getVideosWithChannels() //DO AKTUALIZACJI!

    const channelDoc = await getDoc(doc(db, 'channels', videoData.channel_id))
    const channelData = channelDoc.data() as ChannelItem

    const updatedVideo: VideoItem = {
        ...videoData,
        channelInfo: channelData,
        comments: comments
    }


    if (!videoData || !videos) {
        notFound()
    }

    return (
        <FullVideo videos={videos} video={updatedVideo}/>
    )
}

