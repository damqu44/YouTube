import {VideoItem} from "@/lib/types";
import {collection, getDocs, query} from "firebase/firestore";
import {db} from "@/lib/firebase/firebase";

export async function getVideos () {
    const q = query(collection(db, 'videos'))

    try {
        const querySnapshot = await getDocs(q)

        if (querySnapshot.size > 0) {
            const videosData = querySnapshot.docs.map(doc => doc.data() as VideoItem)
            return videosData
        } else {
            console.log('nie znaleziono filmów')
        }
    } catch (err) {
        console.error(err)
    }
}

