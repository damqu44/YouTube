export type APIResponse<T = object> = { success: true; data: T } | { success: false; error: string };

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
    comments: CommentItem[];
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
    comments: CommentItem[];
}
export interface ChannelItem {
    id: string;
    name: string;
    avatar_link: string | null;
    description: string;
    subscriptions: string;
    videos_amount: string;
    videos: VideoItemWithoutChannelInfo[]
}

export interface VideoInteractions {
    id: string;
    like: boolean;
    disLike: boolean;
}

export interface CommentItem {
    author: string;
    id: string;
    comment_id?: string;
    reply_id?: string;
    isEdited: boolean;
    value: string;
    timeAdded: string;
    likes: string[];
    disLikes: string[];
    type: string;
    replies?: CommentItem[];
}

export interface UserItem {
    userData: {
        creationTime: Date;
        displayName: string;
        email: string;
        photoURL: string;
    },
    subscriptions: [];
    shorts: {
        liked: [];
        disLiked: [];
        saved: [];
    },
    videos: {
        liked: [];
        disLiked: [];
        saved: [];
    }
}
