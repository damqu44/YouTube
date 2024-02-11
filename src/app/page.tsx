import React from "react";
import Header from "@/components/Content/Header/Header";
import VideoList from "@/components/Content/VideoList/VideoList";
import GuideContainer from "@/components/ui/GuideContainer";
import NotFound from "@/components/ui/error/notFound";
import getVideosWithChannels from "@/lib/fetchers/videosWithChannels";

export default async function HomePage() {
    const videosWithChannels = await getVideosWithChannels()

    return (
        <GuideContainer>
            <Header/>
            <div id={'contents-row'} className={'w-full flex flex-wrap justify-start items-start'}>
                {!videosWithChannels ? <NotFound/> : <VideoList videos={videosWithChannels}/>}
            </div>
        </GuideContainer>
    )
}
