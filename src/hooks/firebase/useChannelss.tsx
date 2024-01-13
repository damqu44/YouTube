'use client'
import {useEffect, useState} from 'react';
import {collection, getFirestore, onSnapshot, query} from "firebase/firestore";
import {app} from "@/lib/firebase/firebase";
import {ChannelItem} from "@/lib/types";

const useChannels = () => {
    const [channels, setChannels] = useState<ChannelItem[]>([]);
    const [isChannelsLoading, setIsChannelsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null | Error>(null);
    const db = getFirestore(app)

    useEffect(() => {
        const fetchData = async () => {
            setIsChannelsLoading(true);

            try {
                const channelsQuery = query(collection(db, 'channels'));
                const unsubscribeChannels = onSnapshot(channelsQuery, (channelsSnapshot) => {
                    let channelsArr: ChannelItem[] = [];
                    channelsSnapshot.forEach((doc) => {
                        channelsArr.push({...(doc.data() as ChannelItem), _id: doc.id});
                    });
                    setChannels(channelsArr);
                });

                return () => {
                    unsubscribeChannels();
                };
            } catch (error) {
                setError("Error fetching channels: " + (error instanceof Error ? error.message : String(error)));
            } finally {
                setIsChannelsLoading(false);
            }
        };

        fetchData();
    }, [db]);

    return {channels, isChannelsLoading, error};
}


export default useChannels;