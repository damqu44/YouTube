'use client'
import {useEffect, useState} from 'react';
import shuffleArray from "@/lib/data/shuffleArray";
import {VideoItem} from "@/lib/types";

const useSortByCategoryVideos = (videos: VideoItem[] = [], selectedCategory: string | null, sortBy: string | null) => {
    const [sortedVideos, setSortedVideos] = useState<VideoItem[]>([]);

    useEffect(() => {
        let videosToSort = videos;

        if (selectedCategory === '' && sortBy === 'category') {
        } else if (selectedCategory && sortBy === 'category') {
            videosToSort = videosToSort.filter(video => video.category.includes(selectedCategory));
        } else {
            return
        }

        const shuffledVideos = shuffleArray(videosToSort);
        setSortedVideos(shuffledVideos);
    }, [videos, selectedCategory]);
    return {sortedVideos};
};

export default useSortByCategoryVideos;
