import Image from "next/image";
import formatDuration from "@/hooks/formats/formatDuration";
import Link from "next/link";
import React from "react";

interface VideoProps {
    thumbnail: string;
    duration: string;
    url_id: string;
    _id: string;
    videoType: string;
}

const VideoThumbnail: React.FC<VideoProps> = (props) => {

    return (
        <Link id={'thumbnail'} href={`/watch/${props._id}`}
              className={props.videoType === 'main' ? 'relative w-full pt-[56.25%]' : props.videoType === 'compakt' ? 'relative w-[168px] h-[94px]' : props.videoType === 'result' ? 'relative w-[360px] h-[220px] flex flex-shrink-0' : ''}>
            <div className={'absolute top-0 left-0 w-full h-full'}>
                <Image src={props.thumbnail}
                       fill={true}
                       className={'rounded-xl object-cover'}
                       sizes="(max-width: 500px) 100vw, (max-width: 60px) 50vw, 600px"
                       alt={'an image presenting the theme of the video'}></Image>
                <div id={'video-length'}
                     className={'absolute text-sm right-1 bottom-1 bg-zinc-950 px-1 bg-opacity-80 rounded-md'}>
                    {formatDuration(props.duration)}
                </div>
            </div>
        </Link>
    )
}

export default VideoThumbnail