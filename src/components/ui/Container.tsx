'use client'
import {useGuideContext} from "@/contexts/GuideContext";
import React, {useEffect, useState} from "react";

interface ContainerProps {
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({children}) => {
    const {isGuideVisible, isGuideMiniOpen} = useGuideContext()
    const [contentsWidth, setContentsWidth] = useState('100%')

    useEffect(() => {
        if (isGuideVisible && !isGuideMiniOpen) {
            setContentsWidth('calc(100vw - 300px)')
        } else if (isGuideVisible && isGuideMiniOpen) {
            setContentsWidth('calc(100vw - 120px)')
        } else if (!isGuideVisible) {
            setContentsWidth('90vw')
        }
    }, [isGuideMiniOpen, isGuideVisible])

    return (
        <div className={'w-full flex justify-center items-start'}>
            <div id={'contents'}
                 style={{width: contentsWidth}}
                 className={`h-full w-full flex flex-col justify-start items-start max-w-[2150px]`}>
                {children}
            </div>
        </div>
    )
}
export default Container