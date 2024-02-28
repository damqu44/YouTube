import './Guide.css'
import {Icons} from '../icons';
import useSubscribedChannels from "@/hooks/firebase/useSubscribedChannels";
import Link from "next/link";
import Image from "next/image";
import React from "react";

interface Subscription {
    id: string;
}

export default function GuideSubscriptions() {
    const {subscribedChannels} = useSubscribedChannels()
    return (
        <>
            {subscribedChannels.length > 0 ? (
                <div id={'guide-subscriptions'}>
                    <Link href={'/feed/subscriptions'} className={'guide-item'}>
                        <span className={'text-base font-bold'}>Subskrypcje</span>
                    </Link>
                    {subscribedChannels.map((sub, index) => (
                        <Link href={`/${sub?.id}`} key={index} className={'guide-item'}>
                            {sub.avatar_link ? (
                                <Image src={sub.avatar_link} alt={'channel image'} width={24} height={24}
                                       className={'mr-5'}></Image>
                            ) : (
                                <Icons.your_profile className={'guide-icon'}/>
                            )}
                            <span className={'truncate'}>{sub?.name}</span>
                        </Link>
                    ))}
                    <div className={'line'}></div>
                </div>
            ) : null}
        </>
    )
}