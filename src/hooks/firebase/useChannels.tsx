'use client'
import {useEffect, useState} from 'react';
import {fetchVideosAndChannels} from './apiUtils';

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
}

export interface ChannelItem {
    _id: string;
    name: string;
    avatar_link: string;
    description: string;
    subscriptions: string;
    videos_amount: string;
    videosInfo: VideoItem;
}

const useChannels = () => {
    const [channels, setChannels] = useState<ChannelItem[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchChannelData = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const {videosData, channelsData} = await fetchVideosAndChannels();

                const channelsWithVideos = channelsData.map((channel: ChannelItem) => {
                    const videos = Object.keys(videosData)
                        .filter((key) => videosData[key].channel_id === channel._id)
                        .map((key) => ({
                            id: key,
                            ...videosData[key],
                        }));

                    return {
                        ...channel,
                        videos,
                    };
                });

                setChannels(channelsWithVideos);
            } catch (error) {
                setError((error as Error).message);
            }

            setIsLoading(false);
        };

        fetchChannelData();
    }, []);

    return {channels, isLoading, error};
};

export default useChannels;