'use client'
import React from "react"
import '../../FullVideo.css'
import ScrollArea from "@/components/ScrollArea";


const ChipCloud = () => {
    return (
            <ScrollArea styles={{
                containerStyle: 'flex flex-row w-[440px] h-full text-sm font-medium justify-between items-center py-4',
                contentStyle: 'flex flex-row w-[100%] overflow-hidden',
            }}>
                <div
                    className={'chip active'}>
                    <span>Wszystkie</span>
                </div>
                <div
                    className={'chip'}>
                    <span>Podobne</span>
                </div>
                <div
                    className={'chip'}>
                    <span>Dla ciebie</span>
                </div>
                <div
                    className={'chip'}>
                    <span>Ostatnio przesłane</span>
                </div>
                <div
                    className={'chip'}>
                    <span>Obejrzane</span>
                </div>
            </ScrollArea>
    )
}

export default ChipCloud