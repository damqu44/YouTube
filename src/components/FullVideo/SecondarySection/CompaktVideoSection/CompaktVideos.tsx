'use client'
import React, {useEffect, useState} from "react";
import {VideoItem} from "@/lib/types";
import Video from "@/components/Content/VideoList/Video/Video";
import {SkeletonCompakt} from "@/components/Content/VideoList/Video/Skeleton";
import {useCategory} from "@/contexts/VideosCategoryContext";
import useSortByCategoryVideos from "@/hooks/sorts/useSortByCategoryVideos";

type CompaktVideosProps = {
    videos: VideoItem[]
}
const CompaktVideos: React.FC<CompaktVideosProps> = ({videos}) => {
    const [isLoading, setIsLoading] = useState(true)
    const {selectedCategory} = useCategory()
    const {sortedVideos} = useSortByCategoryVideos(videos, selectedCategory, 'category')


    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsLoading(false);
        }, 500);

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <div className={'w-full min-h-screen flex flex-col justify-start items-start'}>
            {!isLoading ? (sortedVideos?.map((video, index) => (
                <div
                    key={index}
                    className={'h-24 w-full flex flex-row justify-center items-start mb-2'}>
                    <Video
                        key={video.id}
                        video={{
                            ...video,
                            channelInfo: {
                                ...video.channelInfo,
                                avatar_link: null
                            }
                        }}
                        videoType='compakt'
                        flexDirection='row'
                        height='96px'
                        width='168px'
                    />
                </div>
            ))) : (
                Array.from({length: videos.length}, (_, index) => (
                        <div key={index} className={'h-24 w-full flex flex-row justify-center items-start mb-2'}>
                            <SkeletonCompakt/>
                        </div>
                    )
                ))
            }
        </div>

    )
}

export default CompaktVideos