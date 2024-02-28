'use client'
import {useEffect, useState} from 'react';
import {fetchChannels} from "@/hooks/firebase/fetchChannels";
import {fetchVideos} from "@/hooks/firebase/fetchVideos";
import { ChannelItem, VideoItem } from "@/lib/types";

const useVideos = () => {
    const [videos, setVideos] = useState<VideoItem[]>([]);
    const [isVideosLoading, setIsVideosLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null | Error>(null);

    useEffect(() => {
        const fetchVideoData = async () => {
            setIsVideosLoading(true);
            setError(null);

            try {
                const {channelsData} = await fetchChannels()
                const {videosData} = await fetchVideos()

                const videosWithChannels = videosData.map((video: VideoItem) => {
                    const associatedChannel = channelsData.find((channel: ChannelItem) => channel.id === video.channel_id);

                    return {
                        ...video,
                        channelInfo: associatedChannel!,
                    };
                });
                setVideos(videosWithChannels);
            } catch (error) {
                setError((error as Error).message);
            }
            setIsVideosLoading(false);
        }
        fetchVideoData()
    }, [])

    return {videos, isVideosLoading, error};
}

export default useVideos;