'use client'
import {useEffect, useState} from 'react';
import { VideoItem} from "@/lib/types";
import useVideos from "@/hooks/firebase/useVideos";
import {onSnapshot} from "firebase/firestore";
import {doc} from "@firebase/firestore";
import {db} from "@/lib/firebase/firebase";
import {UserAuth} from "@/contexts/AuthContext";
import {isAuthenticated} from "@/utils/Auth";


type VideoItemId = VideoItem & { id: string }
const useLikedVideos = () => {
    const isAuth = isAuthenticated()
    const [likedVideos, setLikedVideos] = useState<VideoItem[]>([]);
    const [isLikedVideosLoading, setIsLikedVideosLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null | Error>(null);
    const [likes, setLikes] = useState<{ id: string }[]>([])
    const {videos} = useVideos()
    const {user} = UserAuth()

    if (!isAuth) {
        return {likedVideos: [], isLikedVideosLoading: false, error: null}
    }

    useEffect(() => {
        onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
            setLikes(doc.data()?.likedVideos)
        })
    }, [user?.email])


    useEffect(() => {
        setIsLikedVideosLoading(true)
        const foundLikedVideos = videos.filter((video: VideoItemId) => {
            const matchingVideos = likes.filter((like) => like.id === video.id);

            return matchingVideos.length > 0;
        })

        setLikedVideos(foundLikedVideos)
        setIsLikedVideosLoading(false)
    }, [videos, likes]);

    return {likedVideos, isLikedVideosLoading, error};
}


export default useLikedVideos


