import React from "react";
import '../../Content.css'
import VideoThumbnail from "@/components/Content/VideoList/Video/VideoThumbnail";
import VideoDetails from "@/components/Content/VideoList/Video/VideoDetails";
import ReactPlayerContainer from "@/components/reactPlayer/ReactPlayerContainer";
import {Property} from "csstype";
import {VideoItem} from "@/lib/types";

type VideoProps = {
    video: VideoItem;
    flexDirection: Property.FlexDirection | undefined;
    height: Property.Height | undefined;
    width: Property.Width | undefined;
    videoType: string;
};

const Video: React.FC<VideoProps> = (props) => {
    const {video} = props
    return (
        <ReactPlayerContainer props={{
            _id: video.id,
            url_id: video.url_id,
            flexDirection: props.flexDirection,
            height: props.height,
            width: props.width,
            videoType: props.videoType,
        }}>
            <VideoThumbnail thumbnail={video.thumbnail} duration={video.duration} id={video.duration}
                            url_id={video.url_id} videoType={props.videoType}/>
            <VideoDetails avatar_link={video.channelInfo.avatar_link} channelId={video.channel_id} id={video.id}
                          description={video.description}
                          title={video.title} channel={video.channel} views={video.views} date={video.date}
                          videoType={props.videoType}/>
        </ReactPlayerContainer>
    )
};
export default Video