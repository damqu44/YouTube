'use client'
import Image from "next/image";
import './MastHead.css'
import searchicon from '@/../public/icons/search.svg'
import microphoneicron from '@/../public/icons/microphone.svg'
import React, {useState} from "react";
import {useRouter} from "next/navigation";

const MastHeadCenter: React.FC = () => {
    const router = useRouter()
    const [inputValue, setInputValue] = useState<string>('')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const trimmedInputValue = inputValue.trim();
        if(trimmedInputValue === '' || trimmedInputValue === '/' || trimmedInputValue === '.' ) {
            return
        }
        router.push(`/results/${trimmedInputValue}`);
        setInputValue('')
    }

    return (
        <div id={'center'} className={'flex justify-center items-center'}>
            <div id={'search-box'} className={'flex'}>
                <div id={'search-container'} className={'flex justify-left items-center  bg-stone-900 h-10 w-full'}>
                    <div id={'search-icon'}>
                        <Image src={searchicon} alt={'search icon'}
                               className={'h-4 w-4 ml-4 mr-3 brightness-0 invert'}/>
                    </div>
                    <div id={'search-form'} className={'flex w-full'}>
                        <form className={'h-full w-full'} onSubmit={handleSubmit}>
                            <input id={'search'} autoCapitalize={'none'} autoComplete={'off'} type={'text'}
                                   spellCheck={'false'} placeholder={'Szukaj'} value={inputValue}
                                   onChange={handleChange}
                                   className={'bg-transparent w-full border-none outline-none m-0 p-0'}/>
                        </form>
                    </div>
                </div>

                <button id={'search-icon-legacy'} className={'flex justify-center items-center h-10 w-16'}>
                    <Image src={searchicon} alt={'search icon'} className={'h-5 w-5 brightness-0 invert'}/>
                </button>
            </div>
            <button id={'voice-search-button'}
                    className={'flex justify-center items-center rounded-full w-10 h-10 ml-4'}>
                <Image src={microphoneicron} alt={'microphone icon'} className={'h-6 w-6 brightness-0 invert'}/>
            </button>
        </div>
    )
}

export default MastHeadCenter