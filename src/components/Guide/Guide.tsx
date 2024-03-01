'use client'
import './Guide.css'
import GuideNav from "@/components/Guide/GuideNav";
import GuideExplore from "@/components/Guide/GuideExplore";
import GuideFeatures from "@/components/Guide/GuideFeatures";
import GuideMenu from "@/components/Guide/GuideMenu";
import GuideFooter from "@/components/Guide/GuideFooter";
import GuideMini from "@/components/Guide/GuideMini";
import {useGuideContext} from "@/contexts/GuideContext";
import GuideSubscriptions from "@/components/Guide/GuideSubscriptions";
import {ShortsProvider} from "@/contexts/shortsContext";
import {useEffect} from "react";
import {useAuthUser} from "@/hooks/firebase/useAuthUser";

export default function Guide() {
    const {isGuideMiniOpen, setIsGuideMiniOpen, isGuideVisible, setIsGuideVisible} = useGuideContext()
    const {user, isLoading} = useAuthUser()

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 780) {
                setIsGuideVisible(false);
            } else if (window.innerWidth <= 1320) {
                setIsGuideMiniOpen(true);
                setIsGuideVisible(true);
            } else {
                setIsGuideMiniOpen(false);
                setIsGuideVisible(true);
            }
        }

        handleResize();  // Initial call
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [setIsGuideVisible, setIsGuideMiniOpen]);


    if (isLoading) {
        return <div className={'w-[250px] min-w-[250px] p-4 mr-4 h-screen sticky top-14'}></div>
    }

    return (
        <>
            {isGuideVisible ? (
                <ShortsProvider>
                    {!isGuideMiniOpen ? (
                        <div id={'guide-scrollbar'}
                             className={'flex w-[250px] min-w-[250px] h-full p-4 mr-4 sticky top-14 mb-2 bg-primaryStrong z-[35]'}>
                            <div id={'guide-sections'}
                                 className={'flex flex-col w-[216px]'}>
                                <GuideNav/>
                                {user?.userData.email ? <GuideSubscriptions/> : null}
                                <GuideExplore/>
                                <GuideFeatures/>
                                <GuideMenu/>
                                <GuideFooter/>
                            </div>
                        </div>
                    ) : (
                        <div id={'guide-sections'} className={'flex sticky top-14 bg-primaryStrong'}>
                            <GuideMini/>
                        </div>
                    )}
                </ShortsProvider>
            ) : null}
        </>
    )
}