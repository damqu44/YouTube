import React, {useState} from "react";
import VideoThumbnail from "@/components/Content/VideoList/Video/VideoThumbnail";
import VideoDetails from "@/components/Content/VideoList/Video/VideoDetails";

type VideoProps = {
    _id: string;
    title: string;
    channel: string;
    channelId: string;
    thumbnail: string;
    views: string;
    date: string;
    duration: string;
    avatar_link: string | null;
    category: string[];
    url_id: string;
};

const Video: React.FC<VideoProps> = (props) => {
    const [isHovered, setIsHovered] = useState(false);


    return (
        <div key={props._id.toString()} id={'video'} className={'flex flex-col mt-3 mb-5'}
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}>
            <VideoThumbnail thumbnail={props.thumbnail} duration={props.duration} _id={props.duration} url_id={props.url_id} isHovered={isHovered}/>
            <VideoDetails avatar_link={props.avatar_link} channelId={props.channel} _id={props._id}
                          title={props.title} channel={props.channel} views={props.views} date={props.date}/>
        </div>)
};
export default Video