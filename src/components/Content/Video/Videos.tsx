'use client'
import useVideos from "@/hooks/firebase/useVideos";
import Video from "@/components/Content/Video/Video";
import useSortByCategoryVideos from "@/hooks/sorts/useSortByCategoryVideos";
import {useCategory} from "@/contexts/VideosCategoryContext";
import useSortBySearchVideos from "@/hooks/sorts/useSortBySearchVideos";

const Videos = () => {
    const {videos, isLoading, error} = useVideos()
    const {selectedCategory} = useCategory()

    const {sortedVideos } = useSortByCategoryVideos(videos, selectedCategory)

    return (
        <>
            {sortedVideos.map((video) => (
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
                />
            ))}
        </>
    )
}

export default Videos
