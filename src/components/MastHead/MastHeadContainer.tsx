'use client'
import MastHeadStart from "@/components/MastHead/MastHeadStart";
import MastHeadCenter from "@/components/MastHead/MastHeadCenter";
import MastHeadEnd from "@/components/MastHead/MastHeadEnd";
import {useEffect, useState} from "react";

export default function MastHeadContainer() {
    const [isSearchVisible, setIsSearchVisible] = useState<boolean>()

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 640) {
                setIsSearchVisible(false);
            } else {
                setIsSearchVisible(true);
            }
        }

        handleResize();  // Initial call
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [])

    return (
        <div id={'masthead-container'} className={'w-full h-14 flex justify-between text-slate-100 sticky top-0'}>
            <MastHeadStart/>
            {isSearchVisible ? <MastHeadCenter/> : null}
            <MastHeadEnd/>
        </div>
    )
}