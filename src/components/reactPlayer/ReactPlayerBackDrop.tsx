import React from "react";
import '../Results/Results.css'
import Link from "next/link";
import {Icons} from "@/components/icons";
import {Property} from "csstype";

const ReactPlayerBackDrop: React.FC<{
    isReactPlayerMuted: boolean | number;
    toggleMuted: () => void;
    props: {
        _id: string;
        url_id: string;
        height: Property.Height | undefined;
        videoType: string;
    }
}> = ({isReactPlayerMuted, toggleMuted, props}) => (
    <>
        <Link href={`/watch/${props._id}`} id={'react-player-backdrop'}
              className={'absolute top-0 left-0 w-full h-full'} style={{zIndex: '6', height: props.height}}>
        </Link>
        <div
            className={props.videoType === 'compakt' ? 'absolute top-0 right-0 w-6 h-6 m-1 rounded-sm' : 'flex justify-center items-center absolute top-0 right-0 w-8 h-8 m-2.5 px-5 rounded-sm'}
            style={{zIndex: '7', backgroundColor: 'rgb(15, 15, 15)'}} onClick={toggleMuted}>
            <div className={'flex justify-center items-center'}>
                {isReactPlayerMuted ? (
                    <Icons.not_muted className={props.videoType === 'compakt' ? 'w-6 h-6 ml-1' : 'w-8 h-8 ml-1'} style={{zIndex: '7'}}/>
                ) : (
                    <Icons.muted className={props.videoType === 'compakt' ? 'w-6 h-6 brightness-100 invert ml-1' : 'w-8 h-8 brightness-100 invert ml-1'} style={{zIndex: '7'}}/>
                )}
            </div>
        </div>
    </>
)

export default ReactPlayerBackDrop