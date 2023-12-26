'use client'
import { useState } from 'react';
import {VideoItem} from "@/hooks/firebase/useVideos";

const useSortBySearchVideos = () => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [searchedSortedVideos, setSortedVideos] = useState<VideoItem[]>([]);

    const handleSearch = (query: string, videos: VideoItem[]) => {
        setSearchQuery(query);

        if (!query.trim()) {
            setSortedVideos(videos);
            return;
        }

        const queryLower = query.toLowerCase();

        const sortedByRelevance = videos
            .map((video) => {
                const titleMatches = video.title.toLowerCase().includes(queryLower);
                const channelMatches = video.channelInfo.name.toLowerCase().includes(queryLower);
                const descriptionMatches = video.description.toLowerCase().includes(queryLower);

                const relevanceScore = (titleMatches ? 3 : 0) + (channelMatches ? 2 : 0) + (descriptionMatches ? 1 : 0);

                return { ...video, relevanceScore };
            })
            .filter((video) => video.relevanceScore > 0)
            .sort((a, b) => b.relevanceScore - a.relevanceScore);


        setSortedVideos(sortedByRelevance);
    };

    return { searchQuery, searchedSortedVideos, handleSearch };
};

export default useSortBySearchVideos;
