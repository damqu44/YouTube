import React from "react";
import AboveTheFold from "@/components/FullVideo/PrimarySection/AboveTheFold/AboveTheFold";
import './PrimarySection.css'
import CommentsContainer from "@/components/FullVideo/PrimarySection/Comments/CommentsContainer";
import {CommentsProvider} from "@/contexts/CommentsContext";
import {notFound} from "next/navigation";
import {VideoItem} from "@/lib/types";

interface PrimarySectionProps {
    video: VideoItem
}

const PrimarySection: React.FC<PrimarySectionProps> = ({video}) => {
    if (!video) {
        notFound()
    }

    return (
        <>
            <div id={'primary'} className={'ml-32 mr-6 w-full max-w-[1300px] min-h-screen'}>
                <div id={'player'} className={'h-auto'}>
                    <div id={'aspect-content'} className={'h-auto'}>
                        <iframe
                            id={'full-video'}
                            src={`https://www.youtube.com/embed/${video.url_id}`}
                            title={video.title}
                            className={'rounded-xl w-full'}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
                <div id={'below'} className={'flex flex-col w-full'}>
                    <AboveTheFold video={video}/>
                    <CommentsProvider>
                        <CommentsContainer video={video}/>
                    </CommentsProvider>
                </div>
            </div>
        </>
    )
}

export default PrimarySection