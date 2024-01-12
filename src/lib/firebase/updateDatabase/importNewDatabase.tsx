'use client'
import {addDoc, collection, getFirestore} from "firebase/firestore";
import {app} from '@/lib/firebase/firebase'
import {YouTubeDataBase} from "@/lib/firebase/updateDatabase/youtubeDatabase";
const ImportNewDataBase = () => {
    const db = getFirestore(app)
    const handleDivClick = async () => {
        const channelsCollection = collection(db, 'channels');
        const videosCollection = collection(db, 'videos');

        const channelDocs = await Promise.all(
            YouTubeDataBase.channels.map(async (channel) => {
                try {
                    const docRef = await addDoc(channelsCollection, channel);
                    console.log('Dodano kanał:', channel.name);
                    return docRef;
                } catch (error) {
                    console.error('Błąd podczas dodawania kanału:', error);
                    return null;
                }
            })
        );

        const videoDocs = await Promise.all(
            YouTubeDataBase.videos.map(async (video) => {
                try {
                    const docRef = await addDoc(videosCollection, video);
                    console.log('Dodano wideo:', video.title);
                    return docRef;
                } catch (error) {
                    console.error('Błąd podczas dodawania wideo:', error);
                    return null;
                }
            })
        );

        console.log('Dodane kanały:', channelDocs);
        console.log('Dodane wideo:', videoDocs);
    };

    return (
        <>
            <div onClick={handleDivClick}>Click here to update DataBase!</div>
        </>
    )
}

export default ImportNewDataBase
