'use client'
import './auth.css'
import youtubelogo from '@/../public/icons/yttextblack.svg'
import Image from "next/image";
import Link from "next/link";
import {FC, useState} from "react";

interface pageProps {
    email: string
}

const SignInPass: FC<pageProps> = ({email}) => {
    const [isChecked, setChecked] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false)
    const handleCheckboxChange = () => {
        setChecked(!isChecked);
        setPasswordVisible(!isChecked)
    };

    return (
        <div id={'auth-container'}
             className={'w-full h-full bg-white z-50 absolute top-0 flex flex-col justify-center items-center'}>
            <div id={'auth-signin'}
                 className={'pt-14 pb-9 px-10 flex flex-col justify-start items-center rounded-xl border border-gray-300'}>
                <div id={'auth-signin-info'} className={'flex flex-col justify-start items-center'}>
                    <div id={'logo-container'}>
                        <Image src={youtubelogo} alt={'Youtube logo'} width={95}/>
                    </div>
                    <div className={'text-black text-2xl pt-4'}>dmaian</div>
                    <div className={'text-black text-base pt-2'}>damian.charazka1@gmail.com</div>
                </div>
                <div id={'auth-signin-password'} className={'flex flex-col justify-start items-start pt-6'}>
                    <form>
                        <input id={'password'} type={passwordVisible ? 'text' : 'password'} placeholder={'Wpisz hasło'}
                               className={'outline-none focus:border-2 focus:border-blue-600 rounded border border-gray-300 h-12 w-80 px-4 text-base text-black'}/>
                    </form>
                    <label className={'flex justify-start items-center cursor-pointer mt-2'}>
                        <input id={'pass-checkbox'} checked={isChecked} type={'checkbox'}
                               onChange={handleCheckboxChange}
                               className={'mr-3 ml-1 cursor-pointer hover:bg-gray-100'}/>
                        <span
                            className={'text-sm text-black font-medium'}>Pokaż hasło</span>
                    </label>
                </div>
                <div id={'auth-next-step'} className={'w-full flex flex-row justify-between items-center pt-10 pb-14'}>
                    <div id={'auth-signup-page'} className={'w-1/2'}>
                        <Link href={'/signin/reset-password'}
                              className={'text-sm text-blue-600 font-medium cursor-pointer rounded-md hover:bg-sky-50 hover:bg-opacity-50 focus:bg-blue-100 w-min px-2 py-2.5 whitespace-nowrap'}>
                            Nie pamiętasz hasła?
                        </Link>
                    </div>
                    <div id={'auth-signin-verify'} className={'h-max w-1/2 flex justify-end items-center'}>
                        <div
                            className={'w-20 h-9 bg-blue-600 flex justify-center items-center cursor-pointer rounded-md hover:bg-blue-700 focus:bg-blue-800'}>Dalej
                        </div>
                    </div>
                </div>
            </div>
            <div id={'auth-footer'} className={'w-full flex flex-row justify-start items-center'}>
                <div id={'auth-language'} className={'w-2/5 mr-7'}>
                    <select
                        className={'w-full text-gray-600 text-xs p-4 cursor-pointer outline-none rounded-md focus:bg-gray-100'}>
                        <option>Polski</option>
                        <option>Angielski</option>
                        <option>Niemiecki</option>
                    </select>
                </div>
                <div id={'auth-info'} className={'w-3/5 flex text-xs mt-2'}>
                    <Link
                        href={'https://support.google.com/accounts?hl=pl&visit_id=638393588688832162-44523636&rd=2&p=account_iph#topic=3382296'}
                        id={'help'} className={'p-4 text-gray-600 rounded-md focus:bg-blue-100'}>Pomoc</Link>
                    <Link href={'https://policies.google.com/privacy?gl=PL&hl=pl'} id={'privacy'}
                          className={'p-4 text-gray-600 rounded-md focus:bg-blue-100'}>Prywatność</Link>
                    <Link href={'https://policies.google.com/terms?gl=PL&hl=pl'} id={'conditions'}
                          className={'p-4 text-gray-600 rounded-md focus:bg-blue-100'}>Warunki</Link>
                </div>
            </div>
        </div>
    )
}

export default SignInPass