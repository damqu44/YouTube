import './GuideCommon.css'
import ytpremiumicon from '@/../public/icons/yt-logo.svg'
import ytmusicicon from '@/../public/icons/ytmusic.svg'
import ytkidsicon from '@/../public/icons/ytkids.svg'
import searchchannels from '@/../public/icons/searchchannels.svg'
import Image from "next/image";
export default function GuideFeatures() {
    return (
        <>
            <div className={'line'}/>
            <div id={'browse-channels'} className={'guide-item'}>
                <Image src={searchchannels} alt={'search channels icon'} className={'guide-icon'}/>
                <span>Przeglądaj kanały</span>
            </div>
            <div className={'line'}/>
            <div id={'more'}>
                <span className={'text-base pl-3'}>Więcej z YouTube</span>
                <div id={'yt-premium'} className={'guide-item'}>
                    <Image src={ytpremiumicon} alt={'youtube premium icon'} className={'guide-icon color'}/>
                    <span>YouTube Premium</span>
                </div>
                <div id={'yt-music'} className={'guide-item'}>
                    <Image src={ytmusicicon} alt={'youtube music icon'} className={'guide-icon color'}/>
                    <span>YouTube Music</span>
                </div>
                <div id={'yt-kids'} className={'guide-item'}>
                    <Image src={ytkidsicon} alt={'youtube kids icon'} className={'guide-icon color'}/>
                    <span>YouTube Kids</span>
                </div>
            </div>
            <div className={'line'}/>
        </>
    )
}