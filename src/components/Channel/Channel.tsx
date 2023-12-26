'use client'
import React, {FC, useEffect, useState} from "react";
import rightarrow from '@/../public/icons/right-arrow-light.svg'
import searchicon from '@/../public/icons/search.svg'
import profileicon from '@/../public/icons/profile.svg'
import './Channel.css'
import Image from "next/image";
import SubscribeButton from "@/components/UI/SubscribeButton";
import useChannels, {ChannelItem} from "@/hooks/firebase/useChannels";
import {useNumbersFormatting} from "@/hooks/formats/useNumbersFormatting";

interface ChannelProps {
    channelId: string;
}

const Channel: FC<ChannelProps> = ({channelId}) => {
    const {formatSubscribers, formatMovies} = useNumbersFormatting();
    const {channels} = useChannels()
    const [selectedChannel, setSelectedChannel] = useState<ChannelItem | null>(null);
    const [loading, setLoading] = useState(true);


        useEffect(() => {
            const foundChannel = channels.find((channel) => channel._id === channelId);
            if (foundChannel) {
                setSelectedChannel(foundChannel);
            }

            setLoading(false);
        }, [channels, channelId]);


    const channelDetails = {
        _id: selectedChannel?._id ?? '',
        name: selectedChannel?.name ?? '',
        description: selectedChannel?.description ?? '',
        subscriptions: selectedChannel?.subscriptions ?? '',
        avatar_link: selectedChannel?.avatar_link ?? '',
        videos_amount: selectedChannel?.videos_amount ?? '',
        videoInfo: selectedChannel?.videosInfo ?? ''
    }

    return (
        loading ? (
            <div>Loading...</div>
        ) : (
            <div id={'channel-container'} className={'w-full flex flex-col justify-start items-center'}>
                <div id={'channel-header-endline'}
                     className={'w-full flex flex-col justify-start items-center border border-b-gray-600 border-x-0 border-t-0'}>
                    <div id={'channel-header'}>
                        <div id={'channel-header-banner'}>BANNER</div>
                        <div id={'chanel-header-container'}
                             className={'h-40 w-full flex justify-start start mt-3'}>
                            <div id={'channel-avatar-img'}>
                                <Image src={channelDetails.avatar_link || profileicon} priority
                                       alt={'Channel Avatar Image'} width={160}
                                       height={160} className={'rounded-full'}/>
                            </div>
                            <div id={'channel-header-inner-container'}>
                                <div id={'channel-meta'} className={'w-full'}>
                                    <div id={'channel-name'}
                                         className={'w-full text-4xl font-bold'}>{channelDetails.name}
                                    </div>
                                    <div id={'channel-meta-items'} className={'text-sm flex pt-2'}>
                                        <div id={'channel-id'}
                                             className={'dark-gray-color'}>{channelDetails._id}</div>
                                        <div id={'channel-line'}
                                             className={'dark-gray-color font-bold px-1'}>{'\u00B7'}</div>
                                        <div id={'channel-subscriptions'}
                                             className={'dark-gray-color'}>{formatSubscribers(channelDetails.subscriptions)}
                                        </div>
                                        <div id={'channel-line'}
                                             className={'dark-gray-color font-bold px-1'}>{'\u00B7'}</div>
                                        <div id={'channel-videos-amount'}
                                             className={'dark-gray-color'}>{formatMovies(channelDetails.videos_amount)}</div>
                                    </div>
                                    <div id={'channel-tagline'} className={'flex pt-2'}>
                                        <div id={'tagline-content'}
                                             className={'dark-gray-color flex justify-start items-center mr-2'}>Welcome
                                            to
                                            Ru Deep Radio.
                                        </div>
                                        <div id={'tagline-moreicon'}
                                             className={'dark-gray-color flex justify-start items-center'}>
                                            <Image src={rightarrow} alt={'Right arrow - more icon'}
                                                   className={'brightness-0 invert'}/>
                                        </div>
                                    </div>
                                </div>
                                <div id={'channel-buttons'} className={'pt-3'}>
                                    <div id={'channel-subscribe-button'}>
                                        <SubscribeButton/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id={'channel-tabs-container'} className={'w-full pt-4'}>
                            <div id={'channel-tabs'} className={'w-full flex justify-start items-start'}>
                                <div className={'tab active'}>Główna</div>
                                <div className={'tab'}>Wideo</div>
                                <div className={'tab'}>Społeczność</div>
                                <div id={'channel-search'}
                                     className={'dark-gray-color p-2 active:bg-gray-600 active:bg-opacity-30 rounded-full'}>
                                    <Image src={searchicon} alt={'Search Icon'}
                                           className={'w-6 h-6 brightness-0 invert opacity-60 cursor-pointer'}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id={'channel-contents'}
                     className={'w-full flex flex-col justify-start items-start'}>
                    <div className={'w-full flex justify-center items-start pt-32'}>
                        <div>GŁÓWNA : WIDEO : SPOŁECZNOŚĆ</div>
                    </div>
                </div>
            </div>
        )
    )
}

export default Channel