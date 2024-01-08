'use client'
import { useCallback, useEffect, useState } from 'react';
import { fetchVideosAndChannels } from './apiUtils';

export interface VideoItem {
    id: string;
    title: string;
    channel: string;
    likes: string;
    views: string;
    date: string;
    thumbnail: string;
    url_id: string;
    duration: string;
    description: string;
    category: string[];
    channelInfo: ChannelItem;
}

interface ChannelItem {
    _id: string;
    name: string;
    avatar_link: string;
    description: string;
    subscriptions: string;
    videos_amount: string;
}

const useVideos = () => {
    const [videos, setVideos] = useState<VideoItem[]>([]);
    const [isVideosLoading, setIsVideosLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null | Error>(null);

    const fetchVideoData = useCallback(async () => {
        setIsVideosLoading(true);
        setError(null);

        try {
            const { videosData, channelsData } = await fetchVideosAndChannels();

            const loadedVideos = Object.keys(videosData).map((key) => {
                const videoWithChannel: VideoItem = {
                    id: key,
                    ...videosData[key],
                    channelInfo: channelsData.find((channel: ChannelItem) => channel._id === videosData[key].channel_id),
                };

                return videoWithChannel;
            });

            setVideos(loadedVideos);
        } catch (error) {
            setError((error as Error).message);
        }

        setIsVideosLoading(false);
    }, []);

    useEffect(() => {
        fetchVideoData();
    }, [fetchVideoData]);

    return { videos, isVideosLoading, error };
};

export default useVideos;