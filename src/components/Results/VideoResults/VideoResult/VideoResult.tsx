import '../../Results.css'
import React from "react";
import VideoResultThumbnail from "@/components/Results/VideoResults/VideoResult/VideoResultThumbnail";
import VideoResultDetails from "@/components/Results/VideoResults/VideoResult/VideoResultDetails";
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
    avatar_link: string;
    category: string[];
    description: string;
    url_id: string;
};


const VideoResult: React.FC<VideoProps> = (props) => {

    return (
        <ReactPlayerContainer props={{
            _id: props._id,
            url_id: props.url_id,
            flexDirection: 'row',
            height: '220px',
            width: '360px'
        }}>
            <VideoResultThumbnail props={props}/>
            <VideoResultDetails props={props}/>
        </ReactPlayerContainer>
    )
};
export default VideoResult