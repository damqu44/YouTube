import {Icons} from "@/components/icons";
import './Guide.css'
export default function GuideMenu(){
    return (
        <div id={'guide-menu'}>
            <div id={'settings'} className={'guide-item'}>
                <Icons.settings className={'guide-icon'}/>
                <span>Ustawienia</span>
            </div>
            <div id={'raport-history'} className={'guide-item'}>
                <Icons.raport_flag className={'guide-icon'}/>
                <span>Historia raportów</span>
            </div>
            <div id={'help'} className={'guide-item'}>
                <Icons.help className={'guide-icon'}/>
                <span>Pomoc</span>
            </div>
            <div id={'feedback-opionion'} className={'guide-item'}>
                <Icons.feedback className={'guide-icon'} />
                <span>Prześlij opinię</span>
            </div>
            <div className={'line'}></div>
        </div>)
}