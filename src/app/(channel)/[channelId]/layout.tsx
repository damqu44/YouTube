import React from "react";
import Guide from "@/components/Guide/Guide";
import Container from "@/components/ui/Container";
import ChannelHeader from "@/components/Channel/ChannelHeader";
import ChannelTabs from "@/components/Channel/ChannelTabs";
import {ChannelLayoutProvider} from "@/contexts/ChannelContext";
import {db} from "@/lib/firebase/firebase";
import {collection, getDocs, query, where} from "firebase/firestore";
import {ChannelItem} from "@/lib/types";
import {redirect} from "next/navigation";
import {notFound} from 'next/navigation';

interface ChannelLayoutProps {
    params: {
        channelId: string
    }
    children: React.ReactNode
}

export default async function ChannelLayout({params, children}: ChannelLayoutProps) {
    const channelId = decodeURIComponent(params.channelId)

    const getChannelById = async (channelId: string) => {


        const q = query(collection(db, 'channels'), where('_id', '==', channelId))

        try {
            const querySnapshot = await getDocs(q)

            if (querySnapshot.size > 0) {
                const channelData = querySnapshot.docs[0].data() as ChannelItem
                return channelData
            } else {
                console.log('nie znaleziono kanalu')
            }
        } catch (err) {
            console.error(err)
        }
    }
    const channelData = await getChannelById(channelId)

    if(!channelData) {
        notFound()
    }

    return (
        <div id={'content'} className={'flex w-full'}>
            <Guide/>
            <Container>
                <div id={'channel-container'} className={'w-full flex flex-col justify-start items-center'}>
                    <ChannelHeader channelData={channelData}/>
                    <ChannelLayoutProvider channelData={channelData}>
                        <ChannelTabs channelData={channelData}/>
                        {children}
                    </ChannelLayoutProvider>
                </div>
            </Container>
        </div>
    )
}


