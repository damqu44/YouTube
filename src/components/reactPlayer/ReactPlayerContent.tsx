import React, {useRef, useState} from "react";
import '../Results/Results.css'
import ReactPlayer from "react-player/youtube";
import ReactPlayerBackDrop from "@/components/reactPlayer/ReactPlayerBackDrop";
import {Property} from "csstype";

interface ReactPlayerContentProps {
    props: {
        _id: string;
        url_id: string;
        height: Property.Height | undefined;
    }
}

const ReactPlayerContent: React.FC<ReactPlayerContentProps> = ({props}) => {
        const [isReactPlayerMuted, setIsReactPlayerMuted] = useState(0)
        const [played, setPlayed] = useState(0);
        const playerRef = useRef<ReactPlayer | null>(null);
        const toggleMuted = () => {
            setIsReactPlayerMuted((prev) => (prev === 0 ? 1 : 0));
            const currentTime = playerRef.current?.getCurrentTime();
            setPlayed(currentTime || 0);
        }
        return (
            <>
                <ReactPlayer
                    ref={playerRef}
                    playing={true}
                    controls={false}
                    url={`https://www.youtube.com/embed/${props.url_id}`}
                    width="100%"
                    height= {props.height}
                    volume={isReactPlayerMuted}
                    onProgress={(state) => setPlayed(state.played)}
                >
                </ReactPlayer>
                <ReactPlayerBackDrop toggleMuted={toggleMuted} isReactPlayerMuted={isReactPlayerMuted} props={{
                    _id: props._id,
                    url_id: props.url_id,
                    height: props.height
                }}/>
            </>
        )
    }
;

export default ReactPlayerContent
