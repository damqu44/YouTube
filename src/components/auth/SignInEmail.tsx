'use client'
import './auth.css'
import youtubelogo from '@/../public/icons/yttextblack.svg'
import erroricon from '@/../public/icons/errorred.svg'
import Image from "next/image";
import Link from "next/link";
import React, {useState} from "react";
import {useRouter} from "next/navigation";

const SignInEmail: React.FC = () => {
    const router = useRouter()
    const [inputValue, setInputValue] = useState<string>('')
    const [error, setError] = useState<string | null>(null)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }
    const handleSubmit = () => {
        const trimmedInputValue = inputValue.trim()
        router.push(`/signin/password`)
        setInputValue('')
    }

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        handleNextClick();
    }

    const handleNextClick = () => {
        if (inputValue.trim() === '') {
            setError('Wpisz adres e-mail')
        } else {
            setError(null)
            handleSubmit()
        }
    }

    return (
        <div id={'auth-container'}
             className={'w-full h-full bg-white z-50 absolute top-0 flex flex-col justify-center items-center'}>
            <div id={'auth-signin'}
                 className={'pt-14 pb-9 px-10 flex flex-col justify-start items-center rounded-xl border border-gray-300'}>
                <div id={'auth-signin-info'} className={'flex flex-col justify-start items-center'}>
                    <div id={'logo-container'}>
                        <Image src={youtubelogo} alt={'Youtube logo'} width={95}/>
                    </div>
                    <div className={'text-black text-2xl pt-4'}>Zaloguj się</div>
                    <div className={'text-black text-base pt-2'}>Przejdź do YouTube</div>
                </div>
                <div id={'auth-signin-email'} className={'flex flex-col justify-start items-start pt-6'}>
                    <form onSubmit={handleFormSubmit}>
                        <input id={'email'} type={'email'} placeholder={'Adres e-mail'} onChange={handleChange}
                               className={`outline-none focus:border-2 rounded border h-12 w-80 px-4 text-base text-black ${error !== null ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-blue-600'}`}/>
                    </form>
                    {error !== null && (
                        <div id={'auth-error'} className={'text-red-500 text-xs pt-1 flex justify-start items-center'}>
                            <Image src={erroricon} alt={'error icon'} height={16} width={16} className={'mr-2'}/>
                            {error}
                            {/*Nie możemy znaleźć takiego konta*/}
                        </div>
                    )}
                    <Link id={'auth-forgot-email'} href={'/'}
                          className={'text-blue-600 mt-2 text-sm rounded-md font-medium cursor-pointer focus:bg-blue-100'}>Nie
                        pamiętasz
                        adresu?
                    </Link>
                </div>
                <div id={'auth-next-step'} className={'w-full flex flex-row justify-between items-center pt-10 pb-14'}>
                    <div id={'auth-signup-page'} className={'w-1/2'}>
                        <Link href={'/signup'}
                              className={'text-sm text-blue-600 font-medium cursor-pointer rounded-md hover:bg-sky-50 hover:bg-opacity-50 focus:bg-blue-100 w-min px-2 py-2.5 whitespace-nowrap'}>
                            Utwórz konto
                        </Link>
                    </div>
                    <div id={'auth-signin-pass-page'} className={'h-max w-1/2 flex justify-end items-center'}>
                        <button onClick={handleNextClick} type={'button'}
                                className={'w-20 h-9 bg-blue-600 flex justify-center items-center cursor-pointer rounded-md hover:bg-blue-700 focus:bg-blue-800'}>Dalej
                        </button>
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

export default SignInEmail