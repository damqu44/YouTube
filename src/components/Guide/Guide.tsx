'use client'
import GuideNav from "@/components/Guide/GuideNav";
import GuideExplore from "@/components/Guide/GuideExplore";
import GuideFeatures from "@/components/Guide/GuideFeatures";
import GuideMenu from "@/components/Guide/GuideMenu";
import GuideFooter from "@/components/Guide/GuideFooter";
import GuideMini from "@/components/Guide/GuideMini";
import {useGuideContext} from "@/contexts/GuideContext";
import GuideSubscriptions from "@/components/Guide/GuideSubscriptions";
import {useUser} from "@clerk/nextjs";
import {ShortsProvider} from "@/contexts/shortsContext";

export default function Guide() {
    const {isGuideMiniOpen} = useGuideContext()
    const {isSignedIn} = useUser()

    return (

        <div id={'guide'}>
            <ShortsProvider>
                {!isGuideMiniOpen ? (
                    <div id={'guide-sections'} className={'flex flex-col w-64 p-4 sticky top-14 pb-14'}>
                        <GuideNav/>
                        {isSignedIn ? <GuideSubscriptions/> : null}
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

    )
}