'use client'
import {useCategory} from "@/contexts/VideosCategoryContext";
import useSortByCategoryVideos from "@/hooks/sorts/useSortByCategoryVideos";
import {VideoItem} from "@/lib/types";
import React, {useEffect, useState} from "react";
import NotFound from "@/components/ui/error/notFound";
import Video from "@/components/Content/VideoList/Video/Video";
import {SkeletonResults} from "@/components/Content/VideoList/Video/Skeleton";

interface VideoResultsProps {
    resultsData: VideoItem[]
}

const VideosResults: React.FC<VideoResultsProps> = React.memo(({resultsData}) => {
        const {selectedCategory} = useCategory()
        const {sortedVideos, isVideosSorting} = useSortByCategoryVideos(resultsData, selectedCategory, 'category')
        const [isLoading, setIsLoading] = useState(true)

        useEffect(() => {
            const timeoutId = setTimeout(() => {
                setIsLoading(false);
            }, 300);

            return () => clearTimeout(timeoutId);
        }, []);

        if (sortedVideos?.length === 0 && !isLoading) {
            return <NotFound/>
        }

        return (
            <>
                {!isLoading ? (sortedVideos?.map((video, index) => (
                        <div key={index} id={'video-result'} className={'mb-5 flex w-full'}>
                            <Video
                                key={video.id}
                                video={{
                                    ...video,
                                }}
                                videoType='result'
                                flexDirection='row'
                                height='220px'
                                width='360px'
                            />
                        </div>
                    ))
                ) : (
                    Array.from({length: resultsData.length}, (_, index) => (
                            <div key={index} className={'mb-5 flex w-full'}>
                                <SkeletonResults/>
                            </div>
                        )
                    )
                )}

            </>
        )
    }
)

VideosResults.displayName = 'VideoResults'
export default VideosResults
