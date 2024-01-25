'use client'
import {Icons} from "@/components/icons";
import Image from "next/image";
import './Channel.css'
import './spinner.css'
import {ChannelItem} from "@/lib/types";
import React, {FC, useEffect, useState} from "react";
import SubscribeButton from "@/components/ui/subscribe-button";
import Video from "@/components/Content/VideoList/Video/Video";
import Loading from "@/components/ui/loading/loading";
import useChannels from "@/hooks/firebase/useChannels";
import {useNumbersFormatting} from "@/hooks/formats/useNumbersFormatting";


interface ChannelProps {
    channelId: string;
}

const Channel: FC<ChannelProps> = ({channelId}) => {
    const {formatSubscribers, formatMovies} = useNumbersFormatting();
    const {channels} = useChannels()
    const [selectedChannel, setSelectedChannel] = useState<ChannelItem | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const foundChannel = channels.find((channel) => channel._id === channelId);
        if (foundChannel) {
            setSelectedChannel(foundChannel);
        }

        setIsLoading(false);
    }, [channels, channelId]);

    const channelDetails = {
        _id: selectedChannel?._id ?? '',
        name: selectedChannel?.name ?? '',
        description: selectedChannel?.description ?? '',
        subscriptions: selectedChannel?.subscriptions ?? '',
        avatar_link: selectedChannel?.avatar_link ?? '',
        videos_amount: selectedChannel?.videos_amount ?? '',
        videos: selectedChannel?.videos ?? []
    }

    if (isLoading) {
        return <Loading/>
    }

    return (
        <div id={'channel-container'} className={'w-full flex flex-col justify-start items-center'}>
            <div id={'channel-header-endline'}
                 className={'w-full flex flex-col justify-start items-center border border-b-gray-600 border-x-0 border-t-0'}>
                <div id={'channel-header'}>
                    <div id={'channel-header-banner'}>
                        <Image src={`https://picsum.photos/seed/${Math.random()}/1300/200`} priority
                               width={1300} height={200} className={'w-full rounded-xl'}
                               alt={'channel banner'}/>
                    </div>
                    <div id={'chanel-header-container'}
                         className={'h-40 w-full flex justify-start start mt-6'}>
                        <div id={'channel-avatar-img'}>
                            {channelDetails.avatar_link ? (
                                <Image src={channelDetails.avatar_link} priority
                                       alt={'Channel Avatar Image'} width={160}
                                       height={160} className={'rounded-full'}/>
                            ) : (
                                <Icons.profile className={'rounded-full h-40 w-40'}/>
                            )}
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
                                        <Icons.right_arrow_light className={'brightness-0 invert h-5 w-5'}/>
                                    </div>
                                </div>
                            </div>
                            <div id={'channel-buttons'} className={'pt-3'}>
                                <SubscribeButton channelId={channelDetails._id}/>
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
                                <Icons.magnifier
                                    className={'w-6 h-6 brightness-0 invert opacity-60 cursor-pointer'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id={'channel-contents'}
                 className={'w-full flex flex-row flex-wrap justify-start items-start'}>
                {channelDetails.videos.map((video, index) => (
                    <div key={index} id={'channel-video'} className={'flex flex-row mt-3 mb-5 mr-4'}>
                        <Video _id={video.id} title={video.title} channel={video.channel}
                               channelId={channelDetails._id}
                               thumbnail={video.thumbnail} views={video.views} date={video.date}
                               duration={video.duration} avatar_link={null}
                               category={video.category} url_id={video.url_id}
                               description={video.description}
                               videoType='main'
                               flexDirection='column'
                               height='100%'
                               width='100%'/>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default Channel