'use client'
import React from "react";
import {Icons} from "@/components/icons";
import LoginButton from '@/components/auth/login-button'
import Loading from "@/components/ui/loading/loading";
import SubscriptionsVideosList from "@/components/SubPages/Subscriptions/SubscriptionsVideosList";
import {UserAuth} from "@/contexts/AuthContext";
import Container from "@/components/ui/Container";


interface Subscriptions {
    id: string;
}

const Subscriptions = () => {
    const {user, isUserLoading} = UserAuth();

    if (isUserLoading) {
        return <Loading/>
    }
    return (
        <>
            {!user?.email ? (
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
                <div className={'w-full flex justify-center items-start'}>
                    <Container>
                        <div id={'contents-row'} className={'w-full flex flex-wrap justify-start items-start'}>
                            <SubscriptionsVideosList/>
                        </div>
                    </Container>
                </div>
            )}
        </>
    )
}

export default Subscriptions