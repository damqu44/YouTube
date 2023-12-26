'use client'
import { useEffect, useState } from 'react';

interface VideoItem {
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

const useSortByCategoryVideos = (videos: VideoItem[] = [], selectedCategory: string | null) => {
    const [sortedVideos, setSortedVideos] = useState<VideoItem[]>([]);

    useEffect(() => {
        let videosToSort = videos;

        if (selectedCategory) {
            videosToSort = videosToSort.filter(video => video.category.includes(selectedCategory));
        }

        const shuffledVideos = shuffleArray(videosToSort);

        setSortedVideos(shuffledVideos);
    }, [videos, selectedCategory]);

    const shuffleArray = (array: VideoItem[]) => {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    };

    return { sortedVideos };
};

export default useSortByCategoryVideos;