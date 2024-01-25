'use client'
import React from "react";
import {Icons} from "@/components/icons";
import LoginButton from '@/components/auth/login-button'
import {isAuthenticated} from "@/utils/Auth";

const You = () => {
    const isAuth = isAuthenticated()

    return (
        <>
            {!isAuth ? (
                <div className={'w-full flex flex-col items-center pt-36'}>
                    <Icons.your_lib className={'brightness-0 invert h-32 w-32'}/>
                    <div className={'flex flex-col justify-center items-center py-6 px-14'}>
                        <div className={'pb-7 text-2xl'}>Oglądaj ulubione filmy</div>
                        <div className={'text-sm'}>Zaloguj się, aby mieć dostęp do zapisanych i lubianych filmów</div>
                    </div>
                    <div><LoginButton/></div>
                </div>
            ) : (
                <div className={'w-full flex flex-col items-center pt-36'}>Przerwa techniczna...</div>
            )}
        </>
    )
}

export default You