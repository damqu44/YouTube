import Image from "next/image";
import formatDuration from "@/hooks/formats/formatDuration";
import Link from "next/link";
import React, {useState} from "react";
import ReactPlayer from "react-player";
interface VideoProps {
    thumbnail: string;
    duration: string;
    url_id: string;
    _id: string;
    isHovered: boolean;
}

const VideoThumbnail: React.FC<VideoProps> = (props) => {

    return (
        <Link id={'thumbnail'} href={`/watch/${props._id}`}
              className={'relative text-xs pr-4 w-full cursor-pointer'}
              >
            {!props.isHovered ? (
                <>
                    <Image src={props.thumbnail} width={304} height={176}
                           className={'rounded-xl h-44'}
                           alt={'an image presenting the theme of the video'}></Image>
                    <div id={'video-length'}
                         className={'absolute text-sm right-5 bottom-2 bg-zinc-950 px-1 bg-opacity-80 rounded-md'}>
                        {formatDuration(props.duration)}
                    </div>
                </>
            ) : (
                <ReactPlayer
                    playing={props.isHovered}
                    controls={false}
                    url={`https://www.youtube.com/embed/${props.url_id}`}
                    width={304}
                    height={176}
                ></ReactPlayer>
            )}


        </Link>
    )
}

export default VideoThumbnail