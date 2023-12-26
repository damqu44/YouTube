import './GuideCommon.css'
import Image from "next/image";
import hoticon from '@/../public/icons/hot.svg'
import musicicon from '@/../public/icons/music.svg'
import moviesicon from '@/../public/icons/movies.svg'
import liveicon from '@/../public/icons/live.svg'
import gamesicon from '@/../public/icons/games.svg'
import newsicon from '@/../public/icons/news.svg'
import sporticon from '@/../public/icons/sport.svg'
export default function GuideExplore() {
    return (
        <div id={'Explore'}>
            <div id={'on time'} className={'guide-item'}>
                <Image src={hoticon} alt={'hot icon'} className={'guide-icon'}/>
                <span>Na czasie</span>
            </div>
            <div id={'music'} className={'guide-item'}>
                <Image src={musicicon} alt={'music icon'} className={'guide-icon'}/>
                <span>Muzyka</span>
            </div>
            <div id={'movies'} className={'guide-item'}>
                <Image src={moviesicon} alt={'movies icon'} className={'guide-icon'}/>
                <span>Filmy</span>
            </div>
            <div id={'live'} className={'guide-item'}>
                <Image src={liveicon} alt={'live icon'} className={'guide-icon'}/>
                <span>Na żywo</span>
            </div>
            <div id={'games'} className={'guide-item'}>
                <Image src={gamesicon} alt={'games icon'} className={'guide-icon'}/>
                <span>Gry</span>
            </div>
            <div id={'news'} className={'guide-item'}>
                <Image src={newsicon} alt={'news icon'} className={'guide-icon'}/>
                <span>Wiadomości</span>
            </div>
            <div id={'sport'} className={'guide-item'}>
                <Image src={sporticon} alt={'sport icon'} className={'guide-icon'}/>
                <span>Sport</span>
            </div>
        </div>
    )
}