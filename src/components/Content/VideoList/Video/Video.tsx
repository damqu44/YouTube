import React, {useRef, useState} from "react";
import VideoThumbnail from "@/components/Content/VideoList/Video/VideoThumbnail";
import VideoDetails from "@/components/Content/VideoList/Video/VideoDetails";
import Link from "next/link";
import ReactPlayer from "react-player/youtube";

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
    const ReactPlayerContent = () => (
            <ReactPlayer
                playing={true}
                controls={false}
                url={`https://www.youtube.com/embed/${props.url_id}`}
                width="100%"
                height="176px"
                volume={0}
                muted={true}
            >
            </ReactPlayer>
    );


    const ReactPlayerContainer: React.FC<{
        triggerInset?: string;
        renderReactPlayer: () => React.ReactNode;
        children: React.ReactNode;
    }> = ({renderReactPlayer, children}) => {
        const [showReactPlayer, setShowReactPlayer] = useState(false)
        const containerRef = useRef<HTMLDivElement | null>(null)

        return (
            <div ref={containerRef} onMouseLeave={() => setShowReactPlayer(false)}
                 className={'relative flex flex-col w-full h-full overflow-hidden cursor-pointer'}>
                <div onMouseEnter={() => setShowReactPlayer(true)}
                      className={'flex flex-col w-full h-full'}>
                    {children}
                </div>

                {showReactPlayer && (
                    <div
                        style={{
                            position: "absolute",
                            top: '0',
                            left: '0',
                            width: '100%',
                            maxHeight: '176px',
                            overflow: 'hidden'
                        }}>
                        {renderReactPlayer()}
                    </div>)}
            </div>
        );
    };

    return (
        <ReactPlayerContainer renderReactPlayer={ReactPlayerContent}>
            <VideoThumbnail thumbnail={props.thumbnail} duration={props.duration} _id={props.duration}
                            url_id={props.url_id}/>
            <VideoDetails avatar_link={props.avatar_link} channelId={props.channelId} _id={props._id}
                          title={props.title} channel={props.channel} views={props.views} date={props.date}/>
        </ReactPlayerContainer>

    )
};
export default Video