import {ChannelItem} from "@/lib/types";
import {collection, getDocs, query} from "firebase/firestore";
import {db} from "@/lib/firebase/firebase";

export async function getChannels () {
    const q = query(collection(db, 'channels'))

    try {
        const querySnapshot = await getDocs(q)

        if (querySnapshot.size > 0) {
            const channelsData = querySnapshot.docs.map(doc => doc.data() as ChannelItem)
            return channelsData
        } else {
            console.log('nie znaleziono kanalow')
        }
    } catch (err) {
        console.error(err)
    }
}