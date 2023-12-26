import Image from "next/image";
import LoginButton from '../UI/LoginButton'
import menuicon from '@/../public/icons/menu.svg'
export default function MastHeadEnd() {
    return (
        <div id={'end'} className={'flex justify-center items-center mr-8'}>
            <div id={'buttons'} className={'flex justify-center items-center'}>
                <button id={'menu-button'} className={'w-10 h-10 flex items-center'}>
                    <Image src={menuicon} alt={'menu icon'} className={'w-8 h-8 brightness-0 invert mt-2'}/>
                </button>
                <LoginButton />
            </div>
        </div>
    )
}