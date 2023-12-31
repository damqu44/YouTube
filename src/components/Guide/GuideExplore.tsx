import './Guide.css'
import { Icons } from '../icons';
export default function GuideExplore() {
    return (
        <div id={'guide-explore'}>
            <div className={'guide-item'}>
                <span className={'text-base font-bold'}>Odkrywaj</span>
            </div>
            <div id={'on time'} className={'guide-item'}>
                <Icons.hot className={'guide-icon'}/>
                <span>Na czasie</span>
            </div>
            <div id={'music'} className={'guide-item'}>
                <Icons.music className={'guide-icon'}/>
                <span>Muzyka</span>
            </div>
            <div id={'movies'} className={'guide-item'}>
                <Icons.movies className={'guide-icon'}/>
                <span>Filmy</span>
            </div>
            <div id={'live'} className={'guide-item'}>
                <Icons.live className={'guide-icon'}/>
                <span>Na żywo</span>
            </div>
            <div id={'games'} className={'guide-item'}>
                <Icons.games className={'guide-icon'}/>
                <span>Gry</span>
            </div>
            <div id={'news'} className={'guide-item'}>
                <Icons.news className={'guide-icon'}/>
                <span>Wiadomości</span>
            </div>
            <div id={'sport'} className={'guide-item'}>
                <Icons.sport className={'guide-icon'}/>
                <span>Sport</span>
            </div>
            <div id={'podcasts'} className={'guide-item'}>
                <Icons.podcasts className={'guide-icon'}/>
                <span>Podcasty</span>
            </div>
        </div>
    )
}