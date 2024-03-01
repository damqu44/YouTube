'use client'
import '../../FullVideo.css'
import formatToWordDate from "@/hooks/formats/formatToWordDate";
import Image from "next/image";
import {Icons} from "@/components/icons";
import React, {useState} from "react";
import {useNumbersFormatting} from "@/hooks/formats/useNumbersFormatting";
import Link from "next/link";
import {VideoItem} from "@/lib/types";


type VideoProps = {
    video: VideoItem
}
const Description: React.FC<VideoProps> = ({video}) => {
    const {formatSubscribers} = useNumbersFormatting();
    const [isExpanded, setIsExpanded] = useState(false);
    const descriptionLines = video.description.split('\\n');

    const toggleDescription = () => {
        setIsExpanded((prev) => !prev);
    };

    return (
        <div id={'description'}
             className={`relative bg-primary mt-3 flex flex-col justify-start items-start p-3 rounded-xl ${isExpanded ? '' : 'expanded'}`}>
            <div id={'info-container'}
                 className={'w-full flex'}>
                <div id={'video-views'}
                     className={'flex flex-row justify-start items-center text-sm font-bold mr-2'}>
                    <div>{video.views}</div>
                    <div>{'\u00A0wyświetleń'}</div>
                </div>
                <div id={'video-date'}
                     className={'text-sm font-semibold mr-2 flex flex-row justify-start items-center'}>
                    {formatToWordDate(video.date)}
                </div>
                <div id={'hashtags'} className={'flex'}>
                </div>
            </div>
            <div id={'description-inline-expander'}
                 className={'w-full flex flex-col justify-start items-start text-sm'}>
                <div itemID={'text-inline-expander'}>
                    {descriptionLines.map((line, index) => (
                        <React.Fragment key={index}>
                            {line && line}
                            {index !== descriptionLines.length - 1 && <br/>}
                        </React.Fragment>
                    ))}
                </div>
                <div id={'extra-content'}
                     className={'w-full flex flex-col justify-start items-start'}>
                    <div id={'transcript-section'}>
                        <div id={'transcript-header'}
                             className={'font-medium text-xl mt-10'}>
                            <h3>Transkrypcja</h3>
                        </div>
                        <div id={'transcript-subheader'}
                             className={'font-medium text-sm mt-2 text-secondary'}>
                            Śledź dialogi za pomocą transkrypcji.
                        </div>
                        <div id={'transcript-button'}
                             className={'font-medium text-sm mt-2 text-sky-600'}>
                            Wyświetl transkrypcję
                        </div>
                    </div>
                    <div id={'infocards-section'}
                         className={'w-full flex flex-col justify-start items-start mt-6'}>
                        <div id={'infocards-header'}
                             className={'w-full h-20 flex flex-row justify-start items-start'}>
                            <Link id={'channel-avatar'} href={`/${video.channelInfo.avatar_link}`}>
                                {video.channelInfo.avatar_link ? (
                                    <Image
                                        src={video.channelInfo.avatar_link}
                                        width={72} height={72} alt={'channel image'}
                                        className={'rounded-full cursor-pointer'}></Image>
                                ) : (
                                    <Icons.profile className={'w-10 h-10 rounded-full cursor-pointer'}/>
                                )}
                            </Link>
                            <div id={'infocards-by-line-container'}
                                 className={'w-full h-full text-xs text-white flex flex-col justify-center items-start pl-4'}>
                                <Link id={'video-channel'} href={`/${video.channelInfo.id}`} className={'text-lg'}>
                                    {video.channel}
                                </Link>
                                <Link id={'video-subscriptions'} href={`/${video.channelInfo.id}`}
                                      className={'text-sm flex flex-row'}>
                                    <div>{formatSubscribers(video.channelInfo.subscriptions)}</div>
                                </Link>
                            </div>
                        </div>
                        <div id={'infocards-action-buttons'}
                             className={'w-full flex flex-row justify-start items-start mt-3 mb-8'}>
                            <Link id={'infocard-video-button'} href={`/${video.channelInfo.id}/videos`}
                                  className={'infocards-buttons flex flex-row justify-start items-start border border-gray-600 rounded-xl px-36 py-1 mr-3 cursor-pointer'}>
                                <Icons.your_vid
                                    className={'brightness-0 invert mr-2'}/>
                                <span className={'text-sm font-medium'}>Wideo</span>
                            </Link>
                            <Link id={'infocard-info-button'} href={`/${video.channelInfo.id}`}
                                  className={'infocards-buttons flex flex-row justify-start items-start border border-gray-600 rounded-xl px-36 py-1 cursor-pointer'}>
                                <Icons.your_profile
                                    className={'brightness-0 invert mr-2'}/>
                                <span className={'text-sm font-medium'}>Informacje</span>
                            </Link>
                        </div>
                    </div>
                </div>
                {isExpanded ? (
                    <div id={'collapse'} className={'absolute font-bold bottom-2 z-5 cursor-pointer'}
                         onClick={toggleDescription}>Pokaż mniej</div>
                ) : (
                    <div id={'collapse'} className={'collapse-expand'}
                         onClick={toggleDescription}>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Description