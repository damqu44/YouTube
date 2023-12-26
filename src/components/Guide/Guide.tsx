'use client'
import GuideNav from "@/components/Guide/GuideNav";
import GuideExplore from "@/components/Guide/GuideExplore";
import GuideFeatures from "@/components/Guide/GuideFeatures";
import GuideMenu from "@/components/Guide/GuideMenu";
import GuideFooter from "@/components/Guide/GuideFooter";
import GuideMini from "@/components/Guide/GuideMini";

export default function Guide() {

    return (
        <div id={'guide'}>
                <div id={'guide-sections'} className={'flex flex-col w-64 p-4 sticky top-14 pb-14'}>
                    <GuideNav />
                    <GuideExplore />
                    <GuideFeatures />
                    <GuideMenu />
                    <GuideFooter />
                    {/*<GuideMini />*/}
                </div>
        </div>
    )
}