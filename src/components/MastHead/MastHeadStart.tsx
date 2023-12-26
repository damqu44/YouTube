import Image from "next/image";
import menulines  from '@/../public/icons/menu-lines.svg'
import yticon from '@/../public/icons/yttext.svg'
import Link from "next/link";

export default function MastHeadStart() {
    return (
        <div id={'start'} className={'flex py-5'}>
            <div id={'guide-button'} className={'px-6 flex items-center leading-5'}>
                <Image src={menulines} alt={'menu-lines'} className={'h-6 w-6 brightness-0 invert'}/>
            </div>
            <Link href={'/'}  id={'logo'} className={'flex items-center'}>
                <Image src={yticon} alt={'yt-icon'} className={'h-6 w-24'}/>
            </Link>
        </div>
    )
}