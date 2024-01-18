'use client'
import {useEffect, useState} from 'react';
import {ChannelItem, VideoItem} from "@/lib/types";
import {fetchVideos} from "@/hooks/firebase/fetchVideos";
import {fetchChannels} from "@/hooks/firebase/fetchChannels";
import Video from "@/components/Content/VideoList/Video/Video";

const useChannels = () => {
    const [channels, setChannels] = useState<ChannelItem[]>([]);
    const [isChannelsLoading, setIsChannelsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null | Error>(null);
    useEffect(() => {
        const fetchChannelData = async () => {
            setIsChannelsLoading(true);
            setError(null);

            try {
                const {channelsData} = await fetchChannels()
                const {videosData} = await fetchVideos()

                const channelsWithVideos = channelsData.map((channel: ChannelItem) => {
                    const videos = [];

                    for (const key in videosData) {
                        if (videosData.hasOwnProperty(key) && videosData[key].channel_id === channel._id) {
                            videos.push({
                                ...videosData[key],
                            });
                        }
                    }
                    return {
                        ...channel,
                        videos,
                    };
                });
                console.log(channelsWithVideos)
                setChannels(channelsWithVideos);
            } catch (error) {
                setError((error as Error).message);
            }

            setIsChannelsLoading(false);
        }

        fetchChannelData();
    }, [])

    return {channels, isChannelsLoading, error};
}


export default useChannels;

// możliwość 1
// const loadedChannels = Object.keys(channelsData).map((key) => {
//     const channelsWithVideos: ChannelItem = {
//         id: key,
//         ...videosData[key],
//         videosInfo: videosData.find((video: VideoItem) => video.channel === videosData[key].channel_id),
//     };
//     return channelsWithVideos;
// });

// możliwość 2
// const channelsWithVideos = channelsData.map((channel: ChannelItem) => {
//     const videos = Object.keys(videosData)
//         .filter((key) => videosData[key].channel_id === channel._id)
//         .map((key) => ({
//             id: key,
//             ...videosData[key],
//         }));
//
//     return {
//         ...channel,
//         videos,
//     };
// });
