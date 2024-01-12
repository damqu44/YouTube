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
                <div
                    style={{
                        position: "absolute",
                        top: '0',
                        left: '0',
                        width: props.width,
                        maxHeight: props.height,
                        overflow: 'hidden'
                    }}>
                    <ReactPlayerContent props={{
                        _id: props._id,
                        url_id: props.url_id,
                        height: props.height
                    }}/>
                </div>)}
        </div>
    );
};

export default ReactPlayerContainer