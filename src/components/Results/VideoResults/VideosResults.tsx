'use client'
import {useCategory} from "@/contexts/VideosCategoryContext";
import useSortByCategoryVideos from "@/hooks/sorts/useSortByCategoryVideos";
import useVideos from "@/hooks/firebase/useVideos";
import useSortBySearchVideos from "@/hooks/sorts/useSortBySearchVideos";
import React, {useCallback, useEffect, useState} from "react";
import VideoResult from "@/components/Results/VideoResults/VideoResult/VideoResult";
import Loading from "@/components/ui/loading/loading";
import Error from "@/components/ui/error/error";
import NotFound from "@/components/ui/error/notFound";

interface VideoResultsProps {
    resultsId: string;
}

const VideosResults: React.FC<VideoResultsProps> = ({resultsId}) => {
    const {selectedCategory} = useCategory()
    const {videos, error} = useVideos()
    const {searchedSortedVideos, handleSearch} = useSortBySearchVideos();
    const {sortedVideos} = useSortByCategoryVideos(searchedSortedVideos, selectedCategory, 'category')
    const [isLoading, setIsLoading] = useState(true);

    const handleSubmit = React.useCallback(() => {
        handleSearch(resultsId, videos)
        setIsLoading(false)
    }, [resultsId, videos, handleSearch])

    useEffect(() => {
        handleSubmit()
    }, [resultsId, videos, handleSubmit])

    if (isLoading || sortedVideos === null) {
        return <Loading/>
    }
    if (error) {
        return <Error/>
    }
    if (sortedVideos?.length === 0) {
        return <NotFound/>
    }

    return (
        <>
            {sortedVideos?.map((video, index) => (
                <div key={index} id={'video-result'} className={'mb-5 flex w-full'}>
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
                        url_id={video.url_id}
                    />
                </div>
            ))}
        </>
    )
}

export default VideosResults
