'use client'
import formatToWordDate from "@/hooks/formats/formatToWordDate";
import Image from "next/image";
import wideoicon from "../../../../../public/icons/wideo.svg";
import infoicon from "../../../../../public/icons/info.svg";
import React from "react";
import {useNumbersFormatting} from "@/hooks/formats/useNumbersFormatting";
import Link from "next/link";


type VideoProps = {
    _id: string;
    views: string;
    date: string;
    channel: string;
    subscriptions: string;
    description: string;
    avatar_link: string;
    channelId: string;
}
const Description: React.FC<VideoProps> = (props) => {
    const {formatSubscribers} = useNumbersFormatting();

    const descriptionLines = props.description.split('\\n');

    return (
        <div id={'description'}
             className={'light-gray-color mt-3 flex flex-col justify-start items-start p-3 rounded-xl'}>
            <div id={'info-container'}
                 className={'w-full flex'}>
                <div id={'video-views'}
                     className={'flex flex-row justify-start items-center text-sm font-bold mr-2'}>
                    <div>{props.views}</div>
                    <div>{'\u00A0wyświetleń'}</div>
                </div>
                <div id={'video-date'}
                     className={'text-sm font-semibold mr-2 flex flex-row justify-start items-center'}>
                    {formatToWordDate(props.date)}
                </div>
                <div id={'hashtags'} className={'flex'}>
                    <div className={'text-center mr-2 text-sky-600'}>#gothic1</div>
                    <div className={'text-center mr-2 text-sky-600'}>#gothic2</div>
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
                             className={'font-medium text-sm mt-2 dark-gray-color'}>
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
                            <Link id={'channel-avatar'} href={`/${props.channelId}`}>
                                <Image
                                    src={props.avatar_link}
                                    width={72} height={72} alt={'channel image'}
                                    className={'rounded-full cursor-pointer'}></Image>
                            </Link>
                            <div id={'infocards-by-line-container'}
                                 className={'w-full h-full text-xs text-white flex flex-col justify-center items-start pl-4'}>
                                <Link id={'video-channel'} href={`/${props.channelId}`} className={'text-lg'}>
                                    {props.channel}
                                </Link>
                                <Link id={'video-subscriptions'} href={`/${props.channelId}`}
                                      className={'text-sm flex flex-row'}>
                                    <div>{formatSubscribers(props.subscriptions)}</div>
                                </Link>
                            </div>
                        </div>
                        <div id={'infocards-action-buttons'}
                             className={'w-full flex flex-row justify-start items-start mt-3 mb-8'}>
                            <Link id={'infocard-video-button'} href={`/${props.channelId}/wideo`}
                                  className={'infocards-buttons flex flex-row justify-start items-start border border-gray-600 rounded-xl px-36 py-1 mr-3 cursor-pointer'}>
                                <Image src={wideoicon} alt={'video icon'}
                                       className={'brightness-0 invert mr-2'}/>
                                <span className={'text-sm font-medium'}>Wideo</span>
                            </Link>
                            <Link id={'infocard-info-button'} href={`/${props.channelId}`}
                                  className={'infocards-buttons flex flex-row justify-start items-start border border-gray-600 rounded-xl px-36 py-1 cursor-pointer'}>
                                <Image src={infoicon} alt={'information icon'}
                                       className={'brightness-0 invert mr-2'}/>
                                <span className={'text-sm font-medium'}>Informacje</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div id={'collapse'} className={'cursor-pointer'}>Pokaż mniej</div>
            </div>
        </div>
    )
}

export default Description