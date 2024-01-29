import React from "react";
import TopRow from "@/components/FullVideo/PrimarySection/AboveTheFold/TopRow";
import Description from "@/components/FullVideo/PrimarySection/AboveTheFold/Description";
import {VideoItem} from "@/lib/types";

type VideoProps = {
    video: VideoItem
};
const AboveTheFold: React.FC<VideoProps> = ({video}) => {
    return (
        <div id={'above-the-fold'} className={'flex flex-col'}>
            <div id={'title'} className={'text-xl font-bold h-9 pt-3 overflow-hidden'}>
                {video.title}
            </div>
            <TopRow video={video}/>
            <Description video={video}/>
        </div>
    )
}

export default AboveTheFold