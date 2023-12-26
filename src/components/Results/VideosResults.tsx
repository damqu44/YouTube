'use client'
import {useCategory} from "@/contexts/VideosCategoryContext";
import useSortByCategoryVideos from "@/hooks/sorts/useSortByCategoryVideos";
import useVideos from "@/hooks/firebase/useVideos";
import useSortBySearchVideos from "@/hooks/sorts/useSortBySearchVideos";
import React, {useEffect, useState} from "react";
import VideoResult from "@/components/Results/VideoResult";

interface VideoResultsProps {
    resultsId: string;
}
const VideosResults: React.FC<VideoResultsProps> = ({resultsId}) => {
    const {selectedCategory} = useCategory()
    const {videos} = useVideos()
    const {searchQuery, searchedSortedVideos, handleSearch} = useSortBySearchVideos();
    const {sortedVideos } = useSortByCategoryVideos(searchedSortedVideos, selectedCategory)

    const handleSubmit = () => {
        handleSearch(resultsId, videos)
    }

    useEffect(() => {
        handleSubmit()
    }, [resultsId, videos])

    return (
        <>
            {sortedVideos.map((video) => (
                <VideoResult
                    key={video.id}
                    _id={video.id}
                    title={video.title}
                    channel={video.channelInfo.name}
                    channelId={video.channelInfo._id}
                    thumbnail={video.thumbnail}
                    views={video.views}
                    date={video.date}
                    duration={video.duration}
                    avatar_link={video.channelInfo.avatar_link}
                    category={video.category}
                    description={video.description}
                />
            ))}
        </>
    )
}

export default VideosResults
