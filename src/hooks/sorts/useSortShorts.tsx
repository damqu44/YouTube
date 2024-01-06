'use client'
import {useEffect, useState} from 'react';
import shuffleArray from "@/lib/data/shuffleArray";
import updateIds from "@/lib/data/updateIds";
import convertDurationToSeconds from "@/lib/data/convertTimeToSeconds";
import {VideoItem} from "@/hooks/firebase/useVideos";

const useSortVideos = (videos: VideoItem[] = [], sortBy: string | null) => {
    const [sortedVideos, setSortedVideos] = useState<VideoItem[]>([]);

    useEffect(() => {
        let videosToSort = videos;

        if (sortBy === 'duration') {
            videosToSort = videosToSort.filter(video => convertDurationToSeconds(video.duration) < 46)
        } else {
            return
        }

        const shuffledVideos = shuffleArray(videosToSort);
        const updatedIdsVideos = updateIds(shuffledVideos);
        setSortedVideos(updatedIdsVideos);

    }, [videos, sortBy]);
    return {sortedVideos};
};

export default useSortVideos;
