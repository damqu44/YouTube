'use client'
import React, {useRef, useState} from "react";
import '../Results/Results.css'
import ReactPlayerContent from "@/components/reactPlayer/ReactPlayerContent";
import {Property} from "csstype";

const ReactPlayerContainer: React.FC<{
    children: React.ReactNode;
    props: {
        _id: string;
        url_id: string;
        flexDirection: Property.FlexDirection | undefined;
        height: Property.Height | undefined;
        width: Property.Width | undefined;
        videoType: string;
    }
}> = ({children, props}) => {
    const [showReactPlayer, setShowReactPlayer] = useState(false)
    const containerRef = useRef<HTMLDivElement | null>(null)

    return (
        <div ref={containerRef} onMouseLeave={() => setShowReactPlayer(false)}
             className={`relative flex flex-col w-full overflow-hidden cursor-pointer`}>
            <div onMouseEnter={() => setShowReactPlayer(true)}
                 className={'flex w-full'} style={{flexDirection: props.flexDirection}}>
                {children}
            </div>
            {showReactPlayer && (
                <div className={'absolute top-0 left-0 h-0'} style={{width: props.width}}>
                    <div
                        style={{
                            position: "relative",
                            overflow: 'hidden',
                            width: '100%',
                            paddingTop: props.videoType === 'result' ? '' : '56.25%',
                            height: props.videoType === 'result' ? '220px' : ''
                        }}>
                        <ReactPlayerContent props={{
                            _id: props._id,
                            url_id: props.url_id,
                            height: props.height,
                            videoType: props.videoType,
                        }}/>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ReactPlayerContainer
