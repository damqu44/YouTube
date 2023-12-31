'use client'
import React from "react";
import {Icons} from "@/components/icons";
import LoginButton from '@/components/auth/login-button'

const Subscriptions = () => {

    return (
        <>
            <div className={'w-full flex flex-col items-center pt-36'}>
                <Icons.subs className={'brightness-0 invert h-32 w-32'}/>
                <div className={'flex flex-col justify-center items-center py-6 px-14'}>
                    <div className={'pb-7 text-2xl'}>Nie przegap nowych filmów</div>
                    <div className={'text-sm'}>Zaloguj się, aby zobaczyć najnowsze materiały z Twoich ulubionych kanałów
                        YouTube
                    </div>
                </div>
                <div><LoginButton/></div>
            </div>
        </>
    )
}

export default Subscriptions