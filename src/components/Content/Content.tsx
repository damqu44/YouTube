'use client'
import './Content.css'
import VideoList from "@/components/Content/VideoList/VideoList";
import React from "react";
import Guide from "@/components/Guide/Guide";
import Header from "@/components/Content/Header/Header";
import {CategoryProvider} from "@/contexts/VideosCategoryContext";
const Content: React.FC = () => {

    return (
        <>
            <div id={'content'} className={'flex w-full'}>
                <Guide/>
                <div id={'primary'} className={'flex flex-col justify-start items-center px-7 w-full'}>
                    <CategoryProvider>
                        <Header/>
                        <div id={'contents'} className={'h-full w-full flex justify-center items-start'}>
                            <div id={'contents-row'} className={'w-full flex flex-wrap justify-start items-start'}>
                                <VideoList/>
                            </div>
                        </div>
                    </CategoryProvider>
                </div>
            </div>
        </>
    )
}

export default Content