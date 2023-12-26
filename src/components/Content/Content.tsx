'use client'
import './Content.css'
import Videos from "@/components/Content/Video/Videos";
import React from "react";
import Guide from "@/components/Guide/Guide";
import Header from "@/components/Content/Header/Header";
import {CategoryProvider} from "@/contexts/VideosCategoryContext";

const Content: React.FC = () => {

    return (
        <>
            <div id={'content'} className={'flex w-full'}>
                <Guide/>
                <div id={'primary'} className={'flex flex-col justify-start items-center px-12 w-full'}>
                    <CategoryProvider>
                        <Header/>
                        <div id={'contents'} className={'h-full w-full flex justify-center items-start'}>
                            <div id={'contents-row'} className={'w-full flex flex-wrap justify-start items-start'}>
                                <Videos/>
                            </div>
                        </div>
                    </CategoryProvider>
                </div>
            </div>
        </>
    )
}

export default Content