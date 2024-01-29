import '../../Content.css'
import React from "react";


export const SkeletonMain: React.FC = () => {
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
export const SkeletonCompakt: React.FC = () => {
    return (
        <div className={'w-full h-full animate-pulse flex'}>
            <div className={'relative w-[168px] h-[94px] min-w-[168px] min-h-[94px]'}>
                <div className={'absolute top-0 left-0 w-full h-full bg-skeletongray  rounded-xl'}>
                </div>
            </div>
            <div className={'mt-3 flex flex-row w-full justify-start items-start'}>
                <div className={'flex flex-col justify-start items-start ml-4 w-[90%]'}>
                    <div className={'bg-skeletongray w-[90%] h-5 mb-2 rounded-sm'}></div>
                    <div className={'bg-skeletongray w-[60%] h-5 rounded-sm'}></div>
                </div>
            </div>
        </div>
    )
}
export const SkeletonResults: React.FC = () => {
    return (
        <div className={'w-full h-full animate-pulse flex'}>
            <div className={'relative w-[360px] h-[220px] flex flex-shrink-0 min-w-[360px] min-h-[220px]'}>
                <div className={'absolute top-0 left-0 w-full h-full bg-skeletongray  rounded-xl'}>
                </div>
            </div>
            <div className={'mt-3 flex flex-row  w-full justify-start items-start'}>
                <div className={'flex flex-col justify-start items-start ml-4 w-[90%]'}>
                    <div className={'bg-skeletongray w-[70%] h-7 mb-3 rounded-sm'}></div>
                    <div className={'bg-skeletongray w-[40%] h-7 mb-3 rounded-sm'}></div>
                    <div className={'bg-skeletongray w-[40%] h-7 mb-3 rounded-sm'}></div>
                </div>
            </div>
        </div>
    )
}

