'use client'
import useVideos from "@/hooks/firebase/useVideos";
import Video from "@/components/Content/VideoList/Video/Video";
import {useCategory} from "@/contexts/VideosCategoryContext";
import useSortByCategoryVideos from "@/hooks/sorts/useSortByCategoryVideos";

const VideoList = () => {
    const {videos, isLoading, error} = useVideos()
    const {selectedCategory} = useCategory()
    const {sortedVideos } = useSortByCategoryVideos(videos, selectedCategory, 'category')

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
                    url_id={video.url_id}
                />
            ))}
        </>
    )
}

export default VideoList
