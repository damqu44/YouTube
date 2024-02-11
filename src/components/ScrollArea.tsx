import React, {useEffect, useRef, useState} from "react";
import {Icons} from "@/components/icons";

interface ScrollAreaProps {
    children: React.ReactNode;
    styles: {
        containerStyle: string;
        contentStyle: string;
    }
    arrows: {
        isAtStart: boolean
        isAtEnd: boolean;
    }
}

const ScrollArea: React.FC<ScrollAreaProps> = ({children, styles,arrows}) => {
    const chipsContainerRef = useRef<HTMLDivElement>(null);
    const [isChipsContainerAtStart, setIsChipsContainerAtStart] = useState<boolean>(arrows.isAtStart)
    const [isChipsContainerAtEnd, setIsChipsContainerAtEnd] = useState<boolean>(arrows.isAtEnd)
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
            const isAtEnd = chipsContainerRef.current.scrollLeft + chipsContainerRef.current.clientWidth + 2 >= chipsContainerRef.current.scrollWidth;

            isAtStart ? setIsChipsContainerAtStart(true) : setIsChipsContainerAtStart(false)
            isAtEnd ? setIsChipsContainerAtEnd(true) : setIsChipsContainerAtEnd(false)
        }
    }
    const handleResize = () => {
        setTimeout(() => {
            handleScroll();
        }, 100);
    }

    useEffect(() => {
        if (chipsContainerRef.current) {
            chipsContainerRef.current.addEventListener("scroll", handleScroll)
            window.addEventListener("resize", handleResize)
        }
        return () => {
            if (chipsContainerRef.current) {
                chipsContainerRef.current.removeEventListener("scroll", handleScroll)
                window.removeEventListener("resize", handleResize)
            }
        }
    }, [chipsContainerRef.current])


    return (

        <div
            className={styles.containerStyle}>
            <div onClick={scrollLeft}
                 className={isChipsContainerAtStart ? 'hidden' : 'flex mr-1 justify-center items-center rounded-full cursor-pointer hover:bg-primary'}>
                <Icons.right_arrow_light
                    className={'w-5 h-5 m-2 brightness-0 invert rotate-180'}/>
            </div>
            <div
                ref={chipsContainerRef}
                className={styles.contentStyle}>
                {children}
            </div>
            <div onClick={scrollRight}
                 className={isChipsContainerAtEnd ? 'hidden' : 'ml-1 flex justify-center items-center rounded-full cursor-pointer hover:bg-primary'}>
                <Icons.right_arrow_light
                    className={'w-5 h-5 m-2 brightness-0 invert'}/>
            </div>
        </div>
    )
}

export default ScrollArea