'use client'
import React from "react";
import historyicon from '@/../public/icons/history.svg'
import Image from "next/image";
import LoginButton from '@/components/UI/LoginButton'
import Link from "next/link";

const History = () => {

    return (
        <>
            <div className={'w-full flex flex-col items-center pt-36'}>
                <Image src={historyicon} alt={'subscriptions icon'} className={'brightness-0 invert h-32 w-32'}/>
                <div className={'flex flex-col justify-center items-center py-6 px-14'}>
                    <div className={'pb-7 text-2xl'}>Miej wgląd w to, co zostało już obejrzane</div>
                    <div className={'flex text-sm text-sky-600'}>
                        <div className={'mr-1'}>Historia oglądania jest niedostępna po wylogowaniu się.</div>
                        <Link href={'https://support.google.com/youtube/answer/95725?hl=pl'} className={'text-sm '}>Więcej informacji</Link>
                    </div>
                </div>
                <div><LoginButton/></div>
            </div>
        </>
    )
}

export default History