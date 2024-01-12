import Link from "next/link";
import formatTimeElapsed from "@/hooks/formats/formatTimeElapsed";
import Image from "next/image";
import {Icons} from "@/components/icons";
import React from "react";
import {useNumbersFormatting} from "@/hooks/formats/useNumbersFormatting";

interface VideoResultDetailsProps {
    props: {
        _id: string;
        title: string;
        views: string;
        channelId: string;
        date: string;
        avatar_link: string;
        channel: string;
        description: string;
    }
}

const VideoResultDetails: React.FC<VideoResultDetailsProps> = ({props}) => {
    const descriptionLines = props.description.split('\\n');
    const {formatViews} = useNumbersFormatting();

    return (
        <div id={'details-results'}
             className={'p-3 w-full flex flex-col justify-start items-start text-ellipsis'}>
            <Link href={`/watch/${props._id}`}
                  className={'text-lg font-medium cursor-pointer truncate'}>{props.title}</Link>
            <Link href={`/watch/${props._id}`} className={'text-xs flex'}>
                <div className={'text-secondary'}>{formatViews(props.views)}</div>
                <div className={'font-bold px-1 text-secondary'}>{'\u00B7'}</div>
                <div className={' text-secondary'}>{formatTimeElapsed(props.date)}</div>
            </Link>
            <Link href={`/${props.channelId}`} className={'flex justify-center items-center w-full py-3'}>
                {props.avatar_link ? (
                    <Image src={props.avatar_link} alt={'channel image'} width={24} height={24}
                           className={'rounded-full cursor-pointer mr-2'}></Image>
                ) : (
                    <Icons.profile className={'rounded-full h-40 w-40'}/>
                )}
                <div className={'text-secondary w-full text-xs truncate hover:text-white hover:text-opacity-90'}>{props.channel}</div>
            </Link>
            <Link href={`/watch/${props._id}`} id={'video-description'}
                  className={'truncate w-full text-xs text-secondary'}>
                {descriptionLines.map((line, index) => (
                    <React.Fragment key={index}>
                        {line && line}
                        {index !== descriptionLines.length - 1 && ' '}
                    </React.Fragment>
                ))}
            </Link>
        </div>
    )
}

export default VideoResultDetails