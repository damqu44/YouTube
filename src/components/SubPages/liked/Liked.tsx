'use client'
import React, {useEffect, useState} from "react";
import Error from "@/components/ui/error/error";
import {isAuthenticated} from "@/utils/Auth";
import {onSnapshot} from "firebase/firestore";
import {doc} from "@firebase/firestore";
import {db} from "@/lib/firebase/firebase";
import {UserAuth} from "@/contexts/AuthContext";
import Loading from "@/components/ui/loading/loading";
import {Icons} from "@/components/icons";
import Link from "next/link";
import LoginButton from "@/components/auth/login-button";
import Video from "@/components/Content/VideoList/Video/Video";
import useVideos from "@/hooks/firebase/useVideos";
import {VideoItem, VideoInteractions} from "@/lib/types";


const Liked = () => {
    const {user, isUserLoading} = UserAuth();
    const userEmail = user?.email;
    const [likedVideos, setLikedVideos] = useState<VideoItem[]>([])
    const {videos, isVideosLoading} = useVideos()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<any>(null)

    useEffect(() => {
        setIsLoading(true)
        if (videos.length > 0 && userEmail) {
            try {
                onSnapshot(doc(db, 'users', `${userEmail}`), (doc) => {
                    const foundInteractionsVideos = doc.data()?.videosInteractions
                    const likedVideos = videos.filter(video => foundInteractionsVideos?.find((likedVideo: VideoInteractions) => likedVideo.id === video.id))
                    setLikedVideos(likedVideos)
                })
            } catch (err: any) {
                setError(err)
            }
        }
        setIsLoading(false)
    }, [userEmail, videos])

    if (isLoading || isVideosLoading || isUserLoading) {
        return <Loading/>
    }
    if (error) {
        return <Error/>
    }

    return (
        <>
            {!userEmail ? (
                <div className={'w-full flex flex-col items-center pt-36'}>
                    <Icons.like_filled className={'brightness-0 invert h-32 w-32'}/>
                    <div className={'flex flex-col justify-center items-center py-6 px-14'}>
                        <div className={'pb-7 text-2xl'}>Miej wgląd w polubione filmy</div>
                        <div className={'flex text-sm text-sky-600'}>
                            <div className={'mr-1'}>Polubione filmy są niedostępne po wylogowaniu się.</div>
                            <Link href={'https://support.google.com/youtube/search?q=polubione+filmy'}
                                  target={'_blank'}
                                  className={'text-sm '}>Więcej
                                informacji</Link>
                        </div>
                    </div>
                    <div><LoginButton/></div>
                </div>
            ) : (
                <div className={'flex w-full flex-col justify-start items-center px-7'}>
                    <div className={'w-full flex flex-wrap justify-start items-start max-w-[2150px]'}>
                        {likedVideos.map((video, index) => (
                            <div key={index} id={'video'} className={'mt-3 mb-5 mr-3'}>
                                <Video
                                    key={video.id}
                                    _id={video.id}
                                    title={video.title}
                                    channel={video.channelInfo.name}
                                    channelId={video.channelInfo._id}
                                    thumbnail={video.thumbnail}
                                    views={video.views}
                                    date={video.date}
                                    duration={video.duration}
                                    avatar_link={video.channelInfo.avatar_link}
                                    category={video.category}
                                    url_id={video.url_id}
                                    description={video.description}
                                    videoType='main'
                                    flexDirection='column'
                                    height='100%'
                                    width='100%'
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}

export default Liked