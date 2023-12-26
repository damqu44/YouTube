import Image from "next/image";
import profileicon from "../../../public/icons/profile.svg";
import './LoginButton.css'
import Link from "next/link";

export default function loginButton() {
    return (
        <Link href={'/signin'}>
            <button id={'login-button'} className={'flex justify-center items-center h-9 w-32'}>
                <Image src={profileicon} alt={'profile icon'} className={'h-5 w-5 mr-3'}/>
                <span className={'text-sm font-medium'}>Zaloguj się</span>
            </button>
        </Link>
    )
}