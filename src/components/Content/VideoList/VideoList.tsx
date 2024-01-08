'use client'
import useVideos from "@/hooks/firebase/useVideos";
import Video from "@/components/Content/VideoList/Video/Video";
import {useCategory} from "@/contexts/VideosCategoryContext";
import useSortByCategoryVideos from "@/hooks/sorts/useSortByCategoryVideos";
import Loading from "@/components/ui/loading/loading";
import Error from "@/components/ui/error/error";
import NotFound from "@/components/ui/error/notFound";
import React from "react";

const VideoList = () => {
    const {videos, isVideosLoading,error} = useVideos()
    const {selectedCategory} = useCategory()
    const {sortedVideos} = useSortByCategoryVideos(videos, selectedCategory, 'category')

    if (isVideosLoading || sortedVideos === null) {
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
            {sortedVideos.map((video, index) => (
                <div key={index} id={'video'} className={'flex flex-col mt-3 mb-5 mr-3'}>
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
                    />
                </div>
            ))}
        </>
    )
}

export default VideoList