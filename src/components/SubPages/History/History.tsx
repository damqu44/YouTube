'use client'
import React from "react";
import {Icons} from "@/components/icons";
import LoginButton from '@/components/auth/login-button'
import Link from "next/link";
import {useAuthUser} from "@/hooks/firebase/useAuthUser";

const History = () => {
    const {user} = useAuthUser()
    return (
        <>
            {!user?.userData.email ? (
                <div className={'w-full flex flex-col items-center pt-36'}>
                    <Icons.history className={'brightness-0 invert h-32 w-32'}/>
                    <div className={'flex flex-col justify-center items-center py-6 px-14'}>
                        <div className={'pb-7 text-2xl'}>Miej wgląd w to, co zostało już obejrzane</div>
                        <div className={'flex text-sm text-sky-600'}>
                            <div className={'mr-1'}>Historia oglądania jest niedostępna po wylogowaniu się.</div>
                            <Link href={'https://support.google.com/youtube/answer/95725?hl=pl'} className={'text-sm '}>Więcej
                                informacji</Link>
                        </div>
                    </div>
                    <div><LoginButton/></div>
                </div>
            ) : (
                <div className={'w-full flex flex-col items-center pt-36'}>Incoming..</div>
            )}
        </>
    )
}

export default History