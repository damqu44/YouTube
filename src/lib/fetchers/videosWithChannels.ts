import {getVideos} from "@/lib/fetchers/videos";
import {getChannels} from "@/lib/fetchers/channels";
import {ChannelItem, VideoItem} from "@/lib/types";

export default async function getVideosWithChannels() {
    const videosData = await getVideos()
    const channelsData = await getChannels()

    const videosWithChannels = videosData?.map((video: VideoItem) => {
        const associatedChannel = channelsData?.find((channel: ChannelItem) => channel._id === video.channel_id);

        return {
            ...video,
            channelInfo: associatedChannel!,
        }
    })
    return videosWithChannels
}