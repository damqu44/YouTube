'use client'
import React from "react";
import youicon from '@/../public/icons/you.svg'
import Image from "next/image";
import LoginButton from '@/components/UI/LoginButton'
import history from "@/components/SubPages/History/History";

const You = () => {

    return (
        <>
            <div className={'w-full flex flex-col items-center pt-36'}>
                <Image src={youicon} alt={'subscriptions icon'} className={'brightness-0 invert h-32 w-32'}/>
                <div className={'flex flex-col justify-center items-center py-6 px-14'}>
                    <div className={'pb-7 text-2xl'}>Oglądaj ulubione filmy</div>
                    <div className={'text-sm'}>Zaloguj się, aby mieć dostęp do zapisanych i lubianych filmów</div>
                </div>
                <div><LoginButton/></div>
            </div>
        </>
    )
}

export default You