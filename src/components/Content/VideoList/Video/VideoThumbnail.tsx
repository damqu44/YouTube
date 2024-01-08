import Image from "next/image";
import formatDuration from "@/hooks/formats/formatDuration";
import Link from "next/link";
import React from "react";
interface VideoProps {
    thumbnail: string;
    duration: string;
    url_id: string;
    _id: string;
}

const VideoThumbnail: React.FC<VideoProps> = (props) => {

    return (
        <Link id={'thumbnail'} href={`/watch/${props._id}`}
              className={'relative text-xs cursor-pointer w-full h-44'}>
                    <Image src={props.thumbnail}
                           fill={true}
                           className={'rounded-xl'}
                           alt={'an image presenting the theme of the video'}></Image>
                    <div id={'video-length'}
                         className={'absolute text-sm right-5 bottom-2 bg-zinc-950 px-1 bg-opacity-80 rounded-md'}>
                        {formatDuration(props.duration)}
                    </div>
        </Link>
    )
}

export default VideoThumbnail