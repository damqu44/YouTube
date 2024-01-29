'use client'
import Link from "next/link";
import {Icons} from "@/components/icons";
import React, {useEffect} from "react";
import {ChannelItem} from "@/lib/types";
import {useChannelLayout} from "@/contexts/ChannelContext";
import {usePathname} from "next/navigation";

interface ChannelTabsProps {
    channelData: ChannelItem;
}

const ChannelTabs: React.FC<ChannelTabsProps> = ({channelData}) => {
    const path = usePathname()
    const {activeContent, setActiveContent} = useChannelLayout()

    useEffect(() => {
        if (path.endsWith('shorts')) {
            setActiveContent('shorts')
        } else if (path.endsWith('videos')) {
            setActiveContent('videos')
        } else {
            setActiveContent('main')
        }
    }, [path]);

    if (channelData._id === '') {
        return
    }

    return (
        <div
            className={'w-full flex justify-center items-starts pt-4 border border-b-gray-600 border-x-0 border-t-0'}>
            <div
                className={'w-full max-w-[1285px] flex justify-start items-start'}>
                <Link href={`/${channelData._id}`}
                      className={activeContent === 'main' ? 'active tab' : 'tab'}>Główna</Link>
                <Link href={`/${channelData._id}/videos`}
                      className={activeContent === 'videos' ? 'active tab' : 'tab'}>Wideo</Link>
                <Link href={`/${channelData._id}/shorts`}
                      className={activeContent === 'shorts' ? 'active tab' : 'tab'}>Shorts</Link>
                <div id={'channel-search'}
                     className={'dark-gray-color p-2 active:bg-gray-600 active:bg-opacity-30 rounded-full'}>
                    <Icons.magnifier
                        className={'w-6 h-6 brightness-0 invert opacity-60 cursor-pointer'}/>
                </div>
            </div>
        </div>
    )
}

export default ChannelTabs