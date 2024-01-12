import {useState} from "react";

export interface VideoItem {
    id: string;
    title: string;
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

export interface ChannelItem {
    _id: string;
    name: string;
    avatar_link: string;
    description: string;
    subscriptions: string;
    videos_amount: string;
}