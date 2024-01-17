'use client'
import {useEffect, useState} from 'react';
import shuffleArray from "@/lib/data/shuffleArray";
import {VideoItem} from "@/lib/types";

const useSortByCategoryVideos = (videos: VideoItem[] = [], selectedCategory: string | null, sortBy: string | null) => {
    const [sortedVideos, setSortedVideos] = useState<VideoItem[] | null> (null);
    const [isVideosSorting, setIsVideosSorting] = useState(true)

    useEffect(() => {
        if (videos.length === 0) {
            setSortedVideos([])
        }

        let videosToSort = videos;

        if (selectedCategory === '' && sortBy === 'category') {
        } else if (selectedCategory && sortBy === 'category') {
            videosToSort = videosToSort.filter(video => video.category.includes(selectedCategory));
        } else {
            return
        }

        const shuffledVideos = shuffleArray(videosToSort);
        setSortedVideos(shuffledVideos);
        setIsVideosSorting(false)
    }, [videos, selectedCategory]);
    return {sortedVideos, sortBy, isVideosSorting};
};

export default useSortByCategoryVideos;
