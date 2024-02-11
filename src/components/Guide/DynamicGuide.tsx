'use client'
import GuideNav from "@/components/Guide/GuideNav";
import GuideSubscriptions from "@/components/Guide/GuideSubscriptions";
import GuideExplore from "@/components/Guide/GuideExplore";
import GuideFeatures from "@/components/Guide/GuideFeatures";
import GuideMenu from "@/components/Guide/GuideMenu";
import GuideFooter from "@/components/Guide/GuideFooter";
import {useGuideContext} from "@/contexts/GuideContext";
import React, {useEffect, useRef} from "react";
import {Icons} from "@/components/icons";
import Link from "next/link";
import {useAuthUser} from "@/hooks/firebase/useAuthUser";

const DynamicGuide: React.FC = () => {
    const {user} = useAuthUser()
    const guideRef = useRef<HTMLDivElement | null>(null);
    const {toggleDynamicGuide, isDynamicGuideOpen, setIsDynamicGuideOpen} = useGuideContext()


    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (guideRef.current && !guideRef.current.contains(event.target as Node)) {
                setIsDynamicGuideOpen(false)
            }
        }

        const handleEscapeKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsDynamicGuideOpen(false);
            }
        };

        if (isDynamicGuideOpen) {
            document.addEventListener('click', handleOutsideClick);
            document.addEventListener('keydown', handleEscapeKey);
        }

        return () => {
            document.removeEventListener('click', handleOutsideClick);
            document.removeEventListener('keydown', handleEscapeKey);
        };
    }, [isDynamicGuideOpen])

    return (
        <>
            {isDynamicGuideOpen ? (
                <div className={'fixed w-full h-screen bg-black/70 top-0 left-0 z-[55]'}>
                    <div
                        ref={guideRef}
                        className={'flex w-[250px] min-w-[250px] justify-start items-center py-3 bg-primaryStrong z-[35]'}>
                        <button
                            onClick={toggleDynamicGuide}
                            className={'mx-3 p-2 flex items-center leading-5 hover:bg-primary focus:bg-lightgray rounded-full cursor-pointer'}>
                            <Icons.three_lines className={'h-6 w-6 brightness-0 invert'}/>
                        </button>
                        <Link
                            href={'/'} id={'logo'} className={'flex items-center'}>
                            <Icons.youtube_logo_text_white className={'h-6 w-24'}/>
                        </Link>
                    </div>
                    <div id={'guide-scrollbar'}
                         className={'flex w-[250px] min-w-[250px] h-full p-4 mr-4 sticky top-14 mb-2 bg-primaryStrong z-[35]'}>
                        <div id={'guide-sections'}
                             className={'flex flex-col w-[216px]'}>
                            <GuideNav/>
                            {user?.email ? <GuideSubscriptions/> : null}
                            <GuideExplore/>
                            <GuideFeatures/>
                            <GuideMenu/>
                            <GuideFooter/>
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    )
}

export default DynamicGuide