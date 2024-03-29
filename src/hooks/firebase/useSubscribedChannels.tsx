'use client'
import {useEffect, useState} from 'react';
import {collection, onSnapshot, query} from "firebase/firestore";
import {db} from "@/lib/firebase/firebase";
import {ChannelItem} from "@/lib/types";
import {doc} from "@firebase/firestore";
import {useAuthUser} from "@/hooks/firebase/useAuthUser";

type ChannelItemId = ChannelItem & { id: string }
const useSubscribedChannels = () => {
    const {user} = useAuthUser()
    const userEmail = user?.userData.email
    const [subscribedChannels, setSubscribedChannels] = useState<ChannelItem[]>([]);
    const [isChannelsLoading, setIsChannelsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null | Error>(null);
    const [subscriptions, setSubscriptions] = useState<{ id: string }[]>([])

    useEffect(() => {
        onSnapshot(doc(db, 'users', `${userEmail}`), (doc) => {
            setSubscriptions(doc.data()?.subscriptions)
        })
    }, [userEmail])

    useEffect(() => {
        if (!userEmail) {
            setIsChannelsLoading(false)
            return
        } else {
            const fetchData = async () => {
                setIsChannelsLoading(true);

                try {
                    const channelsQuery = query(collection(db, 'channels'));
                    const unsubscribeChannels = onSnapshot(channelsQuery, (channelsSnapshot) => {
                        let channelsArr: ChannelItemId[] = [];
                        channelsSnapshot.forEach((doc) => {
                            const channelData = doc.data() as ChannelItemId;
                            channelsArr.push({...channelData});
                            const foundSubscribedChannels = channelsArr?.filter((channel: ChannelItemId) => {
                                const matchingSubs = subscriptions?.filter((sub) => sub.id === channel.id);
                                return matchingSubs?.length > 0;
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
        }
    }, [subscriptions, userEmail]);

    return {subscribedChannels, isChannelsLoading, error};
}


export default useSubscribedChannels