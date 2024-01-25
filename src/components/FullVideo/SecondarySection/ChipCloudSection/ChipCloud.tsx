'use client'
import React, {useEffect, useRef, useState} from "react"
import '../../FullVideo.css'
import {Icons} from "@/components/icons"
import {UserAuth} from "@/contexts/AuthContext";


const ChipCloud = () => {
    const {user, isUserLoading} = UserAuth()
    const chipsContainerRef = useRef<HTMLDivElement>(null);
    const [isChipsContainerAtStart, setIsChipsContainerAtStart] = useState<boolean>(true)
    const [isChipsContainerAtEnd, setIsChipsContainerAtEnd] = useState<boolean>(false)
    const scrollLeft = () => {
        if (chipsContainerRef.current) {
            chipsContainerRef.current.scrollLeft -= 100;
        }
    }

    const scrollRight = () => {
        if (chipsContainerRef.current) {
            chipsContainerRef.current.scrollLeft += 100;
        }
    }

    const handleScroll = () => {
        if (chipsContainerRef.current) {
            const isAtStart = chipsContainerRef.current.scrollLeft === 0;
            const isAtEnd = chipsContainerRef.current.scrollLeft + chipsContainerRef.current.clientWidth === chipsContainerRef.current.scrollWidth;

            isAtStart ? setIsChipsContainerAtStart(true) : setIsChipsContainerAtStart(false)
            isAtEnd ? setIsChipsContainerAtEnd(true) : setIsChipsContainerAtEnd(false)
        }
    }

    useEffect(() => {
        if (chipsContainerRef.current) {
            chipsContainerRef.current.addEventListener("scroll", handleScroll);
        }
        return () => {
            if (chipsContainerRef.current) {
                chipsContainerRef.current.removeEventListener("scroll", handleScroll);
            }
        }
    }, [chipsContainerRef.current])

    if (isUserLoading) {
        return
    }

    return (
        <div
            className={user?.email ? 'flex flex-row w-[440px] h-full text-sm font-medium justify-between items-center py-4' : 'hidden'}>
            <div onClick={scrollLeft}
                 className={isChipsContainerAtStart ? 'hidden' : 'flex mr-2 justify-center items-center w-[40px] h-[40px] rounded-full cursor-pointer hover:bg-primary'}>
                <Icons.right_arrow_light
                    className={'w-5 h-5 brightness-0 invert rotate-180'}/>
            </div>
            <div ref={chipsContainerRef}
                 className={`${!isChipsContainerAtStart && !isChipsContainerAtEnd ? 'w-[340px]' : 'w-[390px]'} flex flex-row overflow-hidden`}>
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
            </div>
            <div onClick={scrollRight}
                 className={isChipsContainerAtEnd ? 'hidden' : 'ml-2 flex justify-center items-center w-[40px] h-[40px] rounded-full cursor-pointer hover:bg-primary'}>
                <Icons.right_arrow_light
                    className={'w-5 h-5 brightness-0 invert'}/>
            </div>
        </div>
    )
}

export default ChipCloud