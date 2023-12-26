'use client'
import homeicon from '@/../public/icons/home.svg'
import shortsicon from '@/../public/icons/shorts.svg'
import subsicon from '@/../public/icons/subscriptions.svg'
import youicon from '@/../public/icons/you.svg'
import historyicon from '@/../public/icons/history.svg'
import Image from "next/image"
import LoginButton from '../UI/LoginButton'
import './GuideCommon.css'
import Link from "next/link";
import {usePathname} from "next/navigation";


export  default function GuideNav() {
    const currentRoute = usePathname();

    return (
        <div id={'nav flex-col'}>
            <Link id={'home'} className={currentRoute === '/' ? 'guide-item active' : 'guide-item'} href={'/'}>
                <Image src={homeicon} alt={'home icon'} className={'guide-icon'}/>
                <span>Główna</span>
            </Link>
            <Link id={'shorts'} className={currentRoute === '/shorts' ? 'guide-item active' : 'guide-item'} href={'/shorts'}>
                <Image src={shortsicon} alt={'shorts icon'} className={'guide-icon'}/>
                <span>Shorts</span>
            </Link>
            <Link id={'subscriptions'} className={currentRoute === '/feed/subscriptions' ? 'guide-item active' : 'guide-item'} href={'/feed/subscriptions'}>
                <Image src={subsicon} alt={'subscriptions icon'} className={'guide-icon'}/>
                <span>Subskrypcje</span>
            </Link>
            <div className={'line'}></div>
            <Link id={'you'} className={currentRoute === '/feed/you' ? 'guide-item active' : 'guide-item'}  href={'/feed/you'}>
                <Image src={youicon} alt={'You icon'} className={'guide-icon'}/>
                <span>Ty</span>
            </Link>
            <Link id={'history'} className={currentRoute === '/feed/history' ? 'guide-item active' : 'guide-item'}  href={'/feed/history'}>
                <Image src={historyicon} alt={'history icon'} className={'guide-icon'}/>
                <span>Historia</span>
            </Link>
            <div className={'line'}></div>
            <div id={'guide-signin-promo'} className={'w-full flex flex-col justify-center items-center text-sm py-2 px-4'}>
                <div className={'mb-2'}>Zaloguj się, by polubić film, zostawić komentarz lub zasubskrybować kanał.</div>
                <div className={'w-full flex justify-start items-center'}><LoginButton /></div>

            </div>
            <div className={'line'}></div>
        </div>
    )
}