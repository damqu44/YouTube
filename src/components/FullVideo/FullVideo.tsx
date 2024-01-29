'use client'
import React, {FC} from "react";
import PrimarySection from "@/components/FullVideo/PrimarySection/PrimarySection";
import SecondarySection from "@/components/FullVideo/SecondarySection/SecondarySection";
import {VideoItem} from "@/lib/types";
import DynamicGuide from "@/components/Guide/DynamicGuide";

interface FullVideoProps {
    videos: VideoItem[]
    videoId: string
    selectedVideo: VideoItem
}


const FullVideo: FC<FullVideoProps> = ({videos, videoId, selectedVideo}) => {

    return (
        <>
            <div id={'content'} className={'flex w-full h-full justify-center items-start pt-5'}>
                <DynamicGuide/>
                <PrimarySection video={selectedVideo}/>
                <SecondarySection videos={videos}/>
            </div>
        </>
    )
}


export default FullVideo