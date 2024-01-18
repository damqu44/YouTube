import CompaktVideos from "@/components/FullVideo/SecondarySection/CompaktVideoSection/CompaktVideos";
import React from "react";
import {VideoItem} from "@/lib/types";
import ChipCloud from "@/components/FullVideo/SecondarySection/ChipCloudSection/ChipCloud";

type VideoProps = {
    videos: VideoItem[]
}
const SecondarySection: React.FC<VideoProps> = (props) => {
    return (
        <div id={'secondary'}
             className={'mr-24 w-1/4 min-h-screen flex flex-col justify-start items-center'}>
            <ChipCloud />
            <CompaktVideos videos={props.videos}/>
        </div>
    )
}

export default SecondarySection