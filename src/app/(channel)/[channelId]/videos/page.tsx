import React from "react";
import {collection, getDocs, query, where} from "firebase/firestore";
import {db} from "@/lib/firebase/firebase";
import {VideoItem} from "@/lib/types";
import Video from "@/components/Content/VideoList/Video/Video";

interface pageProps {
    params: {
        channelId: string
    }
}

export default async function ChannelVideosPage({params}: pageProps) {
    const channelId = decodeURIComponent(params.channelId)
    const getChannelVideosById = async (channelId: string) => {


        const q = query(collection(db, 'videos'), where('channel_id', '==', channelId))

        try {
            const querySnapshot = await getDocs(q)

            if (querySnapshot.size > 0) {
                const videosData = querySnapshot.docs.map(doc => doc.data() as VideoItem)
                return videosData
            } else {
                console.log('nie znaleziono filmu')
            }
        } catch (err) {
            console.error(err)
        }
    }

    const videosData = await getChannelVideosById(channelId)

    if (!videosData) {
        return null
    }

    return (
        <div
            className={'w-full max-w-[1285px] flex flex-row flex-wrap justify-start items-start'}>
            {videosData.map((video, index) => (
                <div key={index} id={'video'} className={'flex flex-row mt-3 mb-5 mr-4'}>
                    <Video
                        video={{
                            ...video,
                            channelInfo: {
                                ...video.channelInfo,
                                avatar_link: null
                            }
                        }}
                        videoType='main'
                        flexDirection='column'
                        height='100%'
                        width='100%'/>
                </div>
            ))}
        </div>
    )
}

