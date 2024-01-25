import React from "react";
import '../../Content.css'
import VideoThumbnail from "@/components/Content/VideoList/Video/VideoThumbnail";
import VideoDetails from "@/components/Content/VideoList/Video/VideoDetails";
import ReactPlayerContainer from "@/components/reactPlayer/ReactPlayerContainer";
import {Property} from "csstype";
import Skeleton from "@/components/Content/VideoList/Video/Skeleton";

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
    description: string;
    flexDirection: Property.FlexDirection | undefined;
    height: Property.Height | undefined;
    width: Property.Width | undefined;
    videoType: string;
};

const Video: React.FC<VideoProps> = (props) => {
    return (
            <ReactPlayerContainer props={{
                _id: props._id,
                url_id: props.url_id,
                flexDirection: props.flexDirection,
                height: props.height,
                width: props.width,
                videoType: props.videoType,
            }}>
                <VideoThumbnail thumbnail={props.thumbnail} duration={props.duration} _id={props.duration}
                                url_id={props.url_id} videoType={props.videoType}/>
                <VideoDetails avatar_link={props.avatar_link} channelId={props.channelId} _id={props._id}
                              description={props.description}
                              title={props.title} channel={props.channel} views={props.views} date={props.date}
                              videoType={props.videoType}/>
            </ReactPlayerContainer>
    )
};
export default Video