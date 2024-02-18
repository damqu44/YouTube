'use client'
import {collection, getDocs, getFirestore,  query} from "firebase/firestore";
import {app} from "@/lib/firebase/firebase";
import {ChannelItem} from "@/lib/types";

export const fetchChannels = async (): Promise<{ channelsData: ChannelItem[] }> => {
    try {
        const db = getFirestore(app);
        const channelsQuery = query(collection(db, 'channels'));

        const channelsSnapshot = await getDocs(channelsQuery);
        const channelsArr: ChannelItem[] = channelsSnapshot.docs.map(doc => ({ ...(doc.data() as ChannelItem) }));

        return { channelsData: channelsArr };

    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(error.message);
        } else {
            throw new Error('An unknown error occurred.');
        }
    }
}
