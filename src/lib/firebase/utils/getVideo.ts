import {ChannelItem, VideoItem} from "@/lib/types";
import {doc, getDoc} from "@firebase/firestore";
import {db} from "@/lib/firebase/firebase";

async function getVideo(videoId: string, channelId?: string): Promise<VideoItem | null> {
    try {
        const videoRef = doc(db, 'videos', videoId)
        const videoDoc = await getDoc(videoRef)
        const videoData = videoDoc.data() as VideoItem

        if (channelId) {
            const channelRef = doc(db, 'channels', channelId)
            const channelDoc = await getDoc(channelRef)
            const channelData = channelDoc.data() as ChannelItem

            return {
                ...videoData,
                channelInfo: channelData,
            }

        } else {
            return {
                ...videoData,
            }
        }

    } catch (error) {
        throw new Error('Error fetching video data:', error as Error)
    }
}

export default getVideo