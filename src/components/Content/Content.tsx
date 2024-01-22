'use client'
import './Content.css'
import VideoList from "@/components/Content/VideoList/VideoList";
import React, {useEffect, useState} from "react";
import Guide from "@/components/Guide/Guide";
import Header from "@/components/Content/Header/Header";
import {CategoryProvider} from "@/contexts/VideosCategoryContext";
import {useGuideContext} from "@/contexts/GuideContext";

const Content: React.FC = () => {
    const {isGuideVisible, isGuideMiniOpen} = useGuideContext()
    const [contentsWidth, setContentsWidth] = useState('100%')

    useEffect(() => {
        if (isGuideVisible && !isGuideMiniOpen) {
            setContentsWidth('calc(100vw - 300px)')
        } else if (isGuideVisible && isGuideMiniOpen) {
            setContentsWidth('calc(100vw - 120px)')
        } else if (!isGuideVisible) {
            setContentsWidth('90vw')
        }
    }, [isGuideMiniOpen, isGuideVisible])

    return (
        <>
            <div id={'content'} className={'flex w-full'}>
                <Guide/>
                <CategoryProvider>
                    <div className={'w-full flex justify-center items-start'}>
                        <div id={'contents'}
                             style={{width: contentsWidth}}
                             className={`h-full flex flex-col justify-start items-start max-w-[2150px]`}>
                            <Header/>
                            <div id={'contents-row'} className={'w-full flex flex-wrap justify-start items-start'}>
                                <VideoList/>
                            </div>
                        </div>
                    </div>
                </CategoryProvider>
            </div>
        </>
    )
}

export default Content