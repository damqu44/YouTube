'use client'
import React from "react";
import {Icons} from "@/components/icons";
import LoginButton from '@/components/auth/login-button'
import Loading from "@/components/ui/loading/loading";
import {isAuthenticated} from "@/utils/Auth";
import SubscriptionsVideosList from "@/components/SubPages/Subscriptions/SubscriptionsVideosList";

const Subscriptions = () => {
    const isAuth = isAuthenticated()

    return (
        <>
            {!isAuth ? (
                <div className={'w-full flex flex-col items-center pt-36'}>
                    <Icons.subs className={'brightness-0 invert h-32 w-32'}/>
                    <div className={'flex flex-col justify-center items-center py-6 px-14'}>
                        <div className={'pb-7 text-2xl'}>Nie przegap nowych filmów</div>
                        <div className={'text-sm'}>Zaloguj się, aby zobaczyć najnowsze materiały z Twoich ulubionych
                            kanałów
                            YouTube
                        </div>
                    </div>
                    <div><LoginButton/></div>
                </div>
            ) : (
                <div id={'primary'} className={'flex flex-col justify-start items-center px-7 w-full'}>
                        <div id={'contents'} className={'h-full w-full flex justify-center items-start'}>
                            <div id={'contents-row'} className={'w-full flex flex-wrap justify-start items-start'}>
                                <SubscriptionsVideosList/>
                            </div>
                        </div>
                </div>            )}
        </>
    )
}

export default Subscriptions