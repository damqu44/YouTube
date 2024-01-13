'use client'
import GuideNav from "@/components/Guide/GuideNav";
import GuideExplore from "@/components/Guide/GuideExplore";
import GuideFeatures from "@/components/Guide/GuideFeatures";
import GuideMenu from "@/components/Guide/GuideMenu";
import GuideFooter from "@/components/Guide/GuideFooter";
import GuideMini from "@/components/Guide/GuideMini";
import {useGuideContext} from "@/contexts/GuideContext";
import GuideSubscriptions from "@/components/Guide/GuideSubscriptions";
import {ShortsProvider} from "@/contexts/shortsContext";
import React, {useEffect} from "react";
import {UserAuth} from "@/contexts/AuthContext";

export default function Guide() {
    const {isGuideMiniOpen, setIsGuideMiniOpen} = useGuideContext()
    const {isGuideVisible, setIsGuideVisible} = useGuideContext()
    const {user} = UserAuth()

    const handleResize = React.useCallback(() => {
        if (window.innerWidth <= 250) {
            setIsGuideVisible(false)
        } else if (window.innerWidth <= 1320) {
            setIsGuideMiniOpen(true)
        } else {
            setIsGuideMiniOpen(false)
            setIsGuideVisible(true)
        }
    }, [setIsGuideMiniOpen, setIsGuideVisible])

    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [handleResize]);

    return (
        <>
            {isGuideVisible ? (
                <div id={'guide'}>
                    <ShortsProvider>
                        {!isGuideMiniOpen ? (
                            <div id={'guide-sections'} className={'flex flex-col w-64 p-4 sticky top-14 pb-14'}>
                                <GuideNav/>
                                {user?.email ? <GuideSubscriptions/> : null}
                                <GuideExplore/>
                                <GuideFeatures/>
                                <GuideMenu/>
                                <GuideFooter/>
                            </div>
                        ) : (
                            <div id={'guide-sections'} className={'flex sticky top-14'}>
                                <GuideMini/>
                            </div>
                        )}
                    </ShortsProvider>
                </div>
            ) : (
                <></>
            )}
        </>
    )
}