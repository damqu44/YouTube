'use client'
import {collection, getDocs, getFirestore, query} from "firebase/firestore";
import {app} from "@/lib/firebase/firebase";
import {VideoItem} from "@/lib/types";

export const fetchVideos = async () => {
    try {
        const db = getFirestore(app);
        const videosQuery = query(collection(db, 'videos'));

        const videosSnapshot = await getDocs(videosQuery);
        const videosArr: VideoItem[] = videosSnapshot.docs.map(doc => ({ ...(doc.data() as VideoItem) }));

        return { videosData: videosArr };
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(error.message);
        } else {
            throw new Error('An unknown error occurred.');
        }
    }
}
