import React from "react";
import '../../Content.css'
import VideoThumbnail from "@/components/Content/VideoList/Video/VideoThumbnail";
import VideoDetails from "@/components/Content/VideoList/Video/VideoDetails";
import ReactPlayerContainer from "@/components/reactPlayer/ReactPlayerContainer";

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

    return (
        <ReactPlayerContainer props={{
            _id: props._id,
            url_id: props.url_id,
            flexDirection: 'column',
            height: '176px',
            width: '100%'
        }}>
            <VideoThumbnail thumbnail={props.thumbnail} duration={props.duration} _id={props.duration}
                            url_id={props.url_id}/>
            <VideoDetails avatar_link={props.avatar_link} channelId={props.channelId} _id={props._id}
                          title={props.title} channel={props.channel} views={props.views} date={props.date}/>
        </ReactPlayerContainer>

    )
};
export default Video