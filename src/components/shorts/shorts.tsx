'use client'
import React, {useEffect, useRef, useState} from "react";
import useVideos from "@/hooks/firebase/useVideos";
import useSortShorts from "@/hooks/sorts/useSortShorts";
import {usePathname, useRouter} from "next/navigation";
import Short from "@/components/shorts/short";
import Loading from "@/components/ui/loading/loading";
import Error from "@/components/ui/error/error";
import NotFound from "@/components/ui/error/notFound";

type VideoProps = {
    videoId: string;
}

const Shorts: React.FC<VideoProps> = React.memo((props) => {
    const {videos, isVideosLoading, error} = useVideos()
    const {sortedVideos} = useSortShorts(videos, 'duration');
    const currentRoute = usePathname();
    const router = useRouter()
    const [currentShortId, setCurrentShortId] = useState<string>(props.videoId)
    const shortsDivRef = useRef<HTMLDivElement>(null);

    console.log(sortedVideos)
    useEffect(() => {
        if (!isVideosLoading && !error && sortedVideos.length > 0 && currentRoute === '/shorts/id') {
            const shortVideo = sortedVideos[0];
            if (shortVideo) {
                router.push(`/shorts/${shortVideo.id}`);
                setCurrentShortId(shortVideo.id)
            }
        }
    }, [isVideosLoading, error, sortedVideos, router, currentRoute]);

    useEffect(() => {
        const handleWheel = (event: WheelEvent) => {
            if (event.deltaY > 0) {
                const currentIndex = sortedVideos.findIndex(video => video.id === currentShortId);
                const newIndex =
                    currentIndex < sortedVideos.length - 1 ? currentIndex + 1 : currentIndex;
                setCurrentShortId(sortedVideos[newIndex]?.id);
            } else if (event.deltaY < 0) {
                const currentIndex = sortedVideos.findIndex(video => video.id === currentShortId);
                const newIndex = currentIndex > 0 ? currentIndex - 1 : currentIndex;
                setCurrentShortId(sortedVideos[newIndex]?.id);

            }
        };

        const shortsDiv = shortsDivRef.current;
        if (shortsDiv) {
            shortsDiv.addEventListener("wheel", handleWheel);
        }

        return () => {
            if (shortsDiv) {
                shortsDiv.removeEventListener("wheel", handleWheel);
            }
        };
    }, [currentShortId, sortedVideos]);

    if (isVideosLoading || sortedVideos === null) {
        return <Loading/>
    }
    if (error) {
        return <Error/>
    }
    if (sortedVideos?.length === 0) {
        return <NotFound/>
    }

    return (
        <>
            <div id={'shorts'} ref={shortsDivRef}
                 className={'flex w-full justify-center items-start'}>
                <Short key={currentShortId} videoId={currentShortId} sortedVideos={sortedVideos}/>
            </div>
        </>
    )
})

Shorts.displayName = 'Shorts';
export default Shorts
