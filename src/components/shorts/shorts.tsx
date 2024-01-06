'use client'
import React, {useEffect, useRef, useState} from "react";
import useVideos from "@/hooks/firebase/useVideos";
import useSortShorts from "@/hooks/sorts/useSortShorts";
import {usePathname, useRouter} from "next/navigation";
import Short from "@/components/shorts/short";

type VideoProps = {
    videoId: string;
}

const Shorts: React.FC<VideoProps> = React.memo((props) => {
    const {videos, isLoading, error} = useVideos()
    const {sortedVideos} = useSortShorts(videos, 'duration');
    const currentRoute = usePathname();
    const router = useRouter()
    const [currentShortId, setCurrentShortId] = useState<string>(props.videoId)
    const shortsDivRef = useRef<HTMLDivElement>(null);

    console.log(sortedVideos)
    useEffect(() => {
        if (!isLoading && !error && sortedVideos.length > 0 && currentRoute === '/shorts/id') {
            const shortVideo = sortedVideos[0];
            if (shortVideo) {
                router.push(`/shorts/${shortVideo.id}`);
                setCurrentShortId(shortVideo.id)
            }
        }
    }, [isLoading, error, sortedVideos, router]);

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

    if (isLoading) {
        return <div className={'w-full h-screen flex justify-center items-center'}>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
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

export default Shorts
