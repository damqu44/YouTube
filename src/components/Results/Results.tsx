'use client'
import './Results.css'
import VideosResults from "@/components/Results/VideoResults/VideosResults";
import Header from '@/components/Content/Header/Header'
import React from "react";
import {VideoItem} from "@/lib/types";

interface VideoResultsProps {
    resultsData: VideoItem[]
}

const Results: React.FC<VideoResultsProps> = ({resultsData}) => {

    return (
        <div id={'primary'}
             className={'w-full min-h-screen flex flex-col justify-center items-center px-12'}>
            <div id={'contents-results'} className={'h-full w-full flex flex-col justify-start items-start'}>
                <Header/>
                <VideosResults resultsData={resultsData}/>
            </div>
        </div>
    )
}

export default Results