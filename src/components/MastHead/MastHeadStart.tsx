'use client'
import Link from "next/link";
import {useGuideContext} from "@/contexts/GuideContext";
import {Icons} from "@/components/icons";

export default function MastHeadStart() {
    const {toggleGuideMini} = useGuideContext()

    return (
            <div id={'start'} className={'flex justify-start items-center py-5'}>
                <button id={'guide-button'} onClick={toggleGuideMini}
                        className={'mx-4 p-2 flex items-center leading-5 hover:bg-primary focus:bg-lightgray rounded-full cursor-pointer'}>
                    <Icons.three_lines className={'h-6 w-6 brightness-0 invert'}/>
                </button>
                <Link href={'/'} id={'logo'} className={'flex items-center'}>
                    <Icons.youtube_logo_text_white className={'h-6 w-24'}/>
                </Link>
            </div>
    )
}