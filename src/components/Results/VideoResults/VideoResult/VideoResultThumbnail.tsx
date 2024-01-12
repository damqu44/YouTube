import Image from "next/image";
import formatDuration from "@/hooks/formats/formatDuration";
import Link from "next/link";
import React from "react";

const VideoResultThumbnail: React.FC<{ props: { _id: string, thumbnail: string, duration: string } }> = ({props}) => {
    return (<Link id={'thumbnail'} href={`/watch/${props._id}`} style={{width: '360px', height: '220px'}}
                  className={'flex flex-shrink-0 relative  cursor-pointer'}>
        <Image src={props.thumbnail} fill={true} className={'rounded-xl'}
               alt={'an image presenting the theme of the video'}></Image>
        <div id={'video-length'}
             className={'absolute text-sm right-1 bottom-1 bg-zinc-950 px-1 bg-opacity-80 rounded-md'}>
            {formatDuration(props.duration)}
        </div>
    </Link>)
}

export default VideoResultThumbnail