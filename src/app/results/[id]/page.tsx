import React from 'react'
import Guide from "@/components/Guide/Guide";
import getVideosWithChannels from "@/lib/fetchers/videosWithChannels";
import Results from "@/components/Results/Results";

interface pageProps {
    params: {
        id: string
    }
}

export default async function ResultsPage({params}: pageProps) {
    const resultsId = decodeURIComponent(params.id)

    const videos = await getVideosWithChannels()
    const query = resultsId.toLowerCase()

    if (!query.trim() || !videos) {
        return;
    }

    const sortedByRelevanceData = videos?.map((video) => {
        const titleMatches = video.title.toLowerCase().includes(query);
        const channelMatches = video.channelInfo.name.toLowerCase().includes(query);
        const descriptionMatches = video.description.toLowerCase().includes(query);

        const relevanceScore = (titleMatches ? 3 : 0) + (channelMatches ? 2 : 0) + (descriptionMatches ? 1 : 0);

        return {...video, relevanceScore};
    })
        .filter((video) => video.relevanceScore > 0)
        .sort((a, b) => b.relevanceScore - a.relevanceScore);

    return (
        <>
            <div id={'content'} className={'flex w-full h-full just'}>
                <Guide/>
                <Results resultsData={sortedByRelevanceData}/>
            </div>
        </>

    )
}


