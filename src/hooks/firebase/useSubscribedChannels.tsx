'use client'
import {useEffect, useState} from 'react';
import {collection, onSnapshot, query} from "firebase/firestore";
import {db} from "@/lib/firebase/firebase";
import {ChannelItem} from "@/lib/types";
import {UserAuth} from "@/contexts/AuthContext";
import {doc} from "@firebase/firestore";
import {isAuthenticated} from "@/utils/Auth";

type ChannelItemId = ChannelItem & { id: string }
const useSubscribedChannels = () => {
    const isAuth = isAuthenticated()
    const [subscribedChannels, setSubscribedChannels] = useState<ChannelItem[]>([]);
    const [isChannelsLoading, setIsChannelsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null | Error>(null);
    const [subscriptions, setSubscriptions] = useState<{ id: string }[]>([])
    const {user} = UserAuth()

    if (!isAuth) {
        return {subscribedChannels: [], isChannelsLoading: false, error: null}
    }

    useEffect(() => {
        onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
            setSubscriptions(doc.data()?.subscriptions)
        })
    }, [user?.email])

    useEffect(() => {
        const fetchData = async () => {
            setIsChannelsLoading(true);

            try {
                const channelsQuery = query(collection(db, 'channels'));
                const unsubscribeChannels = onSnapshot(channelsQuery, (channelsSnapshot) => {
                    let channelsArr: ChannelItemId[] = [];
                    channelsSnapshot.forEach((doc) => {
                        const channelData = doc.data() as ChannelItemId;
                        channelsArr.push({...channelData});
                        const foundSubscribedChannels = channelsArr.filter((channel: ChannelItemId) => {
                            const matchingSubs = subscriptions.filter((sub) => sub.id === channel._id);
                            return matchingSubs.length > 0;
                        });
                        setSubscribedChannels(foundSubscribedChannels);
                    });
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
    }, [subscriptions]);

    return {subscribedChannels, isChannelsLoading, error};
}


export default useSubscribedChannels