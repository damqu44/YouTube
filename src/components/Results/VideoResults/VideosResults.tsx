'use client'
import {useCategory} from "@/contexts/VideosCategoryContext";
import useSortByCategoryVideos from "@/hooks/sorts/useSortByCategoryVideos";
import useVideos, {VideoItem} from "@/hooks/firebase/useVideos";
import React, {useEffect, useState} from "react";
import VideoResult from "@/components/Results/VideoResults/VideoResult/VideoResult";
import Loading from "@/components/ui/loading/loading";
import Error from "@/components/ui/error/error";
import NotFound from "@/components/ui/error/notFound";
import {useResults} from "@/contexts/resultsContext";

interface VideoResultsProps {
    resultsId: string;
}

const VideosResults: React.FC<VideoResultsProps> = React.memo(({resultsId}) => {
        const {selectedCategory} = useCategory()
        const {videos, error, isVideosLoading} = useVideos()
        const {searchedSortedVideos, setSearchedSortedVideos, searchQuery, setSearchQuery} = useResults();
        const {sortedVideos, isVideosSorting} = useSortByCategoryVideos(searchedSortedVideos, selectedCategory, 'category')
        const handleSearch = (query: string, videos: VideoItem[]) => {
            setSearchQuery(query);

            if (!query.trim()) {
                setSearchedSortedVideos(videos);
                return;
            }

            const queryLower = query.toLowerCase();

            const sortedByRelevance = videos
                .map((video) => {
                    const titleMatches = video.title.toLowerCase().includes(queryLower);
                    const channelMatches = video.channelInfo.name.toLowerCase().includes(queryLower);
                    const descriptionMatches = video.description.toLowerCase().includes(queryLower);

                    const relevanceScore = (titleMatches ? 3 : 0) + (channelMatches ? 2 : 0) + (descriptionMatches ? 1 : 0);

                    return {...video, relevanceScore};
                })
                .filter((video) => video.relevanceScore > 0)
                .sort((a, b) => b.relevanceScore - a.relevanceScore);

            setSearchedSortedVideos(sortedByRelevance);
        };

        useEffect(() => {
            handleSearch(resultsId, videos)
        }, [resultsId, videos]);


        if (isVideosLoading || isVideosSorting) {
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
)

VideosResults.displayName = 'VideoResults'
export default VideosResults
