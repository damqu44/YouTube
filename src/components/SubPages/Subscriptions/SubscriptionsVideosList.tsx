'use client'
import useVideos from "@/hooks/firebase/useVideos";
import Video from "@/components/Content/VideoList/Video/Video";
import Loading from "@/components/ui/loading/loading";
import Error from "@/components/ui/error/error";
import React, {useEffect, useState} from "react";
import {VideoItem} from "@/lib/types";
import {onSnapshot} from "firebase/firestore";
import {doc} from "@firebase/firestore";
import {db} from "@/lib/firebase/firebase";
import Subscriptions from "@/components/SubPages/Subscriptions/Subscriptions";
import {useAuthUser} from "@/hooks/firebase/useAuthUser";

const VideoList = () => {
    const {user} = useAuthUser()
    const [subscribedChannelsVideos, setSubscribedChannelsVideos] = useState<VideoItem[]>([])
    const {videos, isVideosLoading} = useVideos()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<any>(null)

    useEffect(() => {
        setIsLoading(true)
        if (videos.length > 0 && user?.email) {
            try {
                onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
                    const foundSubscribedChannels = doc.data()?.subscriptions
                    const subscribedChannelsVideos = videos.filter(video => foundSubscribedChannels?.find((subscribedChannel: Subscriptions) => subscribedChannel.id === video.channel_id))
                    setSubscribedChannelsVideos(subscribedChannelsVideos)
                })
            } catch (err: any) {
                setError(err)
            }
        }
        setIsLoading(false)
    }, [user?.email, videos])

    if (isLoading || isVideosLoading) {
        return <Loading/>
    }
    if (error) {
        return <Error/>
    }


    return (
        <>
            {subscribedChannelsVideos.map((video, index) => (
                <div key={index} id={'video'} className={'mt-3 mb-5 mr-3'}>
                    <Video
                        key={video.id}
                        video={{
                            ...video,
                        }}
                        videoType='main'
                        flexDirection='column'
                        height='100%'
                        width='100%'
                    />
                </div>
            ))}
        </>
    )
}

export default VideoList
