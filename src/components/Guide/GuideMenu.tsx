import settingsicon from '@/../public/icons/settings.svg'
import raporthistoryicon from '@/../public/icons/report.svg'
import helpicon from '@/../public/icons/help.svg'
import feedbackicon from '@/../public/icons/feedback.svg'
import Image from "next/image";
import './GuideCommon.css'
export default function GuideMenu(){
    return (
        <div id={'guide-menu'}>
            <div id={'settings'} className={'guide-item'}>
                <Image src={settingsicon} alt={'settings icon'} className={'guide-icon'}/>
                <span>Ustawienia</span>
            </div>
            <div id={'raport-history'} className={'guide-item'}>
                <Image src={raporthistoryicon} alt={'raport history icon'} className={'guide-icon'}/>
                <span>Historia raportów</span>
            </div>
            <div id={'help'} className={'guide-item'}>
                <Image src={helpicon} alt={'help icon'} className={'guide-icon'}/>
                <span>Pomoc</span>
            </div>
            <div id={'feedback-opionion'} className={'guide-item'}>
                <Image src={feedbackicon} alt={'feedback opinion icon'} className={'guide-icon'}/>
                <span>Prześlij opinię</span>
            </div>
            <div className={'line'}></div>
        </div>)
}