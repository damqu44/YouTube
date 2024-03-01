'use client'
import React, {FC} from "react";
import PrimarySection from "@/components/FullVideo/PrimarySection/PrimarySection";
import SecondarySection from "@/components/FullVideo/SecondarySection/SecondarySection";
import {VideoItem} from "@/lib/types";
import DynamicGuide from "@/components/Guide/DynamicGuide";
import {useAuthUser} from "@/hooks/firebase/useAuthUser";

interface FullVideoProps {
    videos: VideoItem[]
    video: VideoItem
}


const FullVideo: FC<FullVideoProps> = ({videos, video}) => {

    return (
        <>
            <div id={'content'} className={'flex w-full h-full justify-center items-start pt-5'}>
                <DynamicGuide/>
                <PrimarySection video={video}/>
                <SecondarySection videos={videos}/>
            </div>
        </>
    )
}


export default FullVideo