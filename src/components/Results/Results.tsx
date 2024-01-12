'use client'
import './Results.css'
import VideosResults from "@/components/Results/VideoResults/VideosResults";
import Header from '@/components/Content/Header/Header'
import {CategoryProvider} from "@/contexts/VideosCategoryContext";
import React from "react";

interface VideoResultsProps {
    resultsId: string;
}

const Results: React.FC<VideoResultsProps> = ({resultsId}) => {
    return (
        <div id={'primary'}
             className={'w-full min-h-screen flex flex-col justify-center items-center px-12'}>
            <CategoryProvider>
                <div id={'contents-results'} className={'h-full w-full flex flex-col justify-start items-start'}>
                    <Header/>
                    <VideosResults resultsId={resultsId}/>
                </div>
            </CategoryProvider>
        </div>
    )
}

export default Results