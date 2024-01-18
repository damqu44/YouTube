export interface VideoItem {
    id: string;
    title: string;
    channel_id: string;
    channel: string;
    likes: string;
    views: string;
    date: string;
    thumbnail: string;
    url_id: string;
    duration: string;
    description: string;
    category: string[];
    channelInfo: ChannelItem;
}

export interface VideoItemWithoutChannelInfo {
    id: string;
    title: string;
    channel_id: string;
    channel: string;
    likes: string;
    views: string;
    date: string;
    thumbnail: string;
    url_id: string;
    duration: string;
    description: string;
    category: string[];
}
export interface ChannelItem {
    _id: string;
    name: string;
    avatar_link: string;
    description: string;
    subscriptions: string;
    videos_amount: string;
    videos: VideoItemWithoutChannelInfo[]
}

