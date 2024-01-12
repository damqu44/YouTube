'use client'
import { useEffect, useState } from 'react';
import {collection, getFirestore, onSnapshot, query} from "firebase/firestore";
import {app} from "@/lib/firebase/firebase";
import {VideoItem} from "@/lib/types";

const useVideos = () => {
    const [videos, setVideos] = useState<VideoItem[]>([]);
    const [isVideosLoading, setIsVideosLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null | Error>(null);
    const db = getFirestore(app)

    useEffect(() => {
        const fetchData = async () => {
            setIsVideosLoading(true);

            try {
                const videosQuery = query(collection(db, 'videos'));
                const unsubscribeVideos = onSnapshot(videosQuery, (videosSnapshot) => {
                    let videosArr: VideoItem[] = [];
                    videosSnapshot.forEach((doc) => {
                        videosArr.push({...(doc.data() as VideoItem), id: doc.id});
                    });
                    setVideos(videosArr);
                });

                return () => {
                    unsubscribeVideos();
                };
            } catch (error) {
                setError("Error fetching videos: " + (error instanceof Error ? error.message : String(error)));
            } finally {
                setIsVideosLoading(false);
            }
        };

        fetchData();
    }, []);

    return {videos, isVideosLoading, error}
};

export default useVideos;