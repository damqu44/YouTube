'use client'
import Video from "@/components/Content/VideoList/Video/Video";
import {useCategory} from "@/contexts/VideosCategoryContext";
import useSortByCategoryVideos from "@/hooks/sorts/useSortByCategoryVideos";
import NotFound from "@/components/ui/error/notFound";
import React, {useEffect, useState} from "react";
import {SkeletonMain} from "@/components/Content/VideoList/Video/Skeleton";
import {VideoItem} from "@/lib/types";

interface VideoListProps {
    videos: VideoItem[]
}

const VideoList: React.FC<VideoListProps> = ({videos}) => {
    const {selectedCategory} = useCategory()
    const {sortedVideos} = useSortByCategoryVideos(videos, selectedCategory, 'category')
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsLoading(false);
        }, 500);

        return () => clearTimeout(timeoutId);
    }, []);


    if (sortedVideos?.length === 0 && !isLoading) {
        return <NotFound/>
    }

    return (
        <>
            {!isLoading ? (
                <>
                    {sortedVideos?.map((video, index) => (
                        <div key={index} id={'video'} className={'mt-3 mb-5 mr-3'}>
                            <Video
                                video={{
                                    ...video,
                                }}
                                key={video.id}
                                videoType='main'
                                flexDirection='column'
                                height='100%'
                                width='100%'
                            />
                        </div>
                    ))}
                </>
            ) : (
                Array.from({length: videos.length}, (_, index) => (
                        <div key={index} id={'video'} className={'mt-3 mb-5 mr-3'}>
                            <SkeletonMain/>
                        </div>
                    )
                )
            )}
        </>
    )
}

export default VideoList
