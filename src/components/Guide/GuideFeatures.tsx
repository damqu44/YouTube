import './Guide.css'
import {Icons} from "@/components/icons";
import {useAuthUser} from "@/hooks/firebase/useAuthUser";
import Link from "next/link";

export default function GuideFeatures() {
    const {user} = useAuthUser()

    return (
        <>
            {!user?.email ? (
                <>
                    <div className={'line'}/>

                    <div id={'browse-channels'} className={'guide-item'}>
                        <Icons.search_channels className={'guide-icon'}/>
                        <span>Przeglądaj kanały</span>
                    </div>
                </>
            ) : null}
            <div className={'line'}/>
            <div id={'more'}>
                <span className={'text-base pl-3'}>Więcej z YouTube</span>
                <Link href={'/premium'} className={'guide-item'}>
                    <Icons.youtube_logo className={'guide-icon color'}/>
                    <span>YouTube Premium</span>
                </Link>
                <div id={'yt-music'} className={'guide-item'}>
                    <Icons.youtube_music className={'guide-icon color'}/>
                    <span>YouTube Music</span>
                </div>
                <div id={'yt-kids'} className={'guide-item'}>
                    <Icons.youtube_kids className={'guide-icon color'}/>
                    <span>YouTube Kids</span>
                </div>
            </div>
            <div className={'line'}/>
        </>
    )
}