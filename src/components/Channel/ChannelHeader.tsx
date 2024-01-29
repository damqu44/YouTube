'use client'
import './Channel.css'
import './spinner.css'
import React from "react"
import {Icons} from "@/components/icons"
import Image from "next/image"
import SubscribeButton from "@/components/ui/subscribe-button"
import {useNumbersFormatting} from "@/hooks/formats/useNumbersFormatting"
import {ChannelItem} from "@/lib/types"

interface ChannelHeaderProps {
    channelData: ChannelItem;
}

const ChannelHeader: React.FC<ChannelHeaderProps> = React.memo(({channelData}) => {
    const {formatSubscribers, formatMovies} = useNumbersFormatting()
    
    return (
        <div
            className={'w-full max-w-[1285px] flex flex-col justify-start items-center'}>
            <div
                className={'w-full'}>
                <div id={'channel-header-banner'}>
                    <Image src={`https://picsum.photos/seed/${Math.random()}/1300/200`} priority
                           width={1300} height={200} className={'w-full rounded-xl'}
                           alt={'channel banner'}/>
                </div>
                <div id={'chanel-header-container'}
                     className={'h-40 w-full flex justify-start start mt-6'}>
                    <div className={'mr-4 w-[160px] h-[160px] min-w-[160px] min-h-[160px]'}>
                        {channelData.avatar_link ? (
                            <Image src={channelData.avatar_link} priority
                                   alt={'ChannelHeader Avatar Image'} width={160}
                                   height={160} className={'rounded-full'}/>
                        ) : (
                            <Icons.profile className={'rounded-full h-40 w-40'}/>
                        )}
                    </div>
                    <div id={'channel-meta'} className={'w-full'}>
                        <div id={'channel-name'}
                             className={'w-full text-4xl font-bold'}>{channelData.name}
                        </div>
                        <div id={'channel-meta-items'} className={'text-sm flex pt-2'}>
                            <div id={'channel-id'}
                                 className={'dark-gray-color'}>{channelData._id}</div>
                            <div id={'channel-line'}
                                 className={'dark-gray-color font-bold px-1'}>{'\u00B7'}</div>
                            <div id={'channel-subscriptions'}
                                 className={'dark-gray-color'}>{formatSubscribers(channelData.subscriptions)}
                            </div>
                            <div id={'channel-line'}
                                 className={'dark-gray-color font-bold px-1'}>{'\u00B7'}</div>
                            <div id={'channel-videos-amount'}
                                 className={'dark-gray-color'}>{formatMovies(channelData.videos_amount)}</div>
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
                        <div id={'channel-buttons'} className={'pt-3'}>
                            <SubscribeButton channelId={channelData._id}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})

ChannelHeader.displayName = 'ChannelHeader'
export default ChannelHeader