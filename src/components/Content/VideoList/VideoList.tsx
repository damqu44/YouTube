'use client'
import useVideos from "@/hooks/firebase/useVideos";
import Video from "@/components/Content/VideoList/Video/Video";
import {useCategory} from "@/contexts/VideosCategoryContext";
import useSortByCategoryVideos from "@/hooks/sorts/useSortByCategoryVideos";
import Error from "@/components/ui/error/error";
import NotFound from "@/components/ui/error/notFound";
import React, {useEffect, useState} from "react";
import Skeleton from "@/components/Content/VideoList/Video/Skeleton";

const VideoList = () => {
    const {videos, isVideosLoading, error} = useVideos()
    const {selectedCategory} = useCategory()
    const {sortedVideos} = useSortByCategoryVideos(videos, selectedCategory, 'category')
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timeoutId);
    }, []);

    if (error) {
        return <Error/>
    }
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
                                url_id={video.url_id}
                                description={video.description}
                                videoType='main'
                                flexDirection='column'
                                height='100%'
                                width='100%'
                            />
                        </div>
                    ))}
                </>
            ) : (
                Array.from({length: 32}, (_, index) => (
                        <div key={index} id={'video'} className={'mt-3 mb-5 mr-3'}>
                            <Skeleton key={index} videoType={'main'}/>
                        </div>
                    )
                )
            )}

        </>
    )
}

export default VideoList
