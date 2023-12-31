'use client'
import Image from "next/image";
import menulines from '@/../public/icons/menu-lines.svg'
import yticon from '@/../public/icons/yttext.svg'
import Link from "next/link";
import {useGuideContext} from "@/contexts/GuideContext";

export default function MastHeadStart() {
    const {toggleGuideMini} = useGuideContext()

    return (
            <div id={'start'} className={'flex justify-start items-center py-5'}>
                <button id={'guide-button'} onClick={toggleGuideMini}
                        className={'mx-4 p-2 flex items-center leading-5 hover:bg-primary focus:bg-lightgray rounded-full cursor-pointer'}>
                    <Image src={menulines} alt={'menu-lines'} className={'h-6 w-6 brightness-0 invert'}/>
                </button>
                <Link href={'/'} id={'logo'} className={'flex items-center'}>
                    <Image src={yticon} alt={'yt-icon'} className={'h-6 w-24'}/>
                </Link>
            </div>
    )
}