import './Guide.css'
import {Icons} from '../icons';

export default function GuideSubscriptions() {
    return (
        <div id={'guide-subscriptions'}>
            <div className={'guide-item'}>
                <span className={'text-base font-bold'}>Subskrypcje</span>
            </div>
            <div className={'guide-item'}>
                <Icons.your_profile className={'guide-icon'}/>
                <span>Political meme</span>
            </div>
            <div className={'guide-item'}>
                <Icons.podcasts className={'guide-icon'}/>
                <span>Kashanka</span>
            </div>
            <div className={'guide-item'}>
                <Icons.youtube_music_white className={'guide-icon'}/>
                <span>Johan Ingeborg</span>
            </div>
            <div className={'line'}></div>
        </div>
    )
}