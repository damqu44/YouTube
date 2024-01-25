import '../../Content.css'
import React from "react";

interface SkeletonProps {
    videoType: string;
}

const Skeleton: React.FC<SkeletonProps> = (props) => {
    return (
        <div className={'w-full h-full animate-pulse'}>
            <div className={'relative shadow-2xl w-full pt-[56.25%]  rounded-xl'}>
                <div className={'absolute top-0 left-0 w-full h-full bg-skeletongray  rounded-xl'}>
                </div>
            </div>
            <div className={'mt-3 flex flex-row w-full justify-start items-center'}>
                <div className={'p-0 m-0 w-[10%]'}>
                    <div className={'bg-skeletongray rounded-full '}
                         style={{width: '36px', height: '36px'}}></div>
                </div>
                <div className={'flex flex-col justify-start items-start ml-4 w-[90%]'}>
                    <div className={'bg-skeletongray w-[90%] h-5 mb-2 rounded-sm'}></div>
                    <div className={'bg-skeletongray w-[60%] h-5 rounded-sm'}></div>
                </div>
            </div>
        </div>
    )
}

export default Skeleton

{/*className={props.videoType === 'main' ? 'relative w-full pt-[56.25%]' : props.videoType === 'compakt' ? 'relative w-[168px] h-[94px]' : props.videoType === 'result' ? 'relative w-[360px] h-[220px] flex flex-shrink-0' : ''}>*/
}
