'use client'
import './MastHead.css'
import {Icons} from "@/components/icons";
import React, {useState} from "react";
import {useRouter} from "next/navigation";

const MastHeadCenter: React.FC = () => {
    const router = useRouter()
    const [inputValue, setInputValue] = useState<string>('')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        const trimmedInputValue = inputValue.trim();
        if (trimmedInputValue === '' || trimmedInputValue === '/' || trimmedInputValue === '.') {
            return;
        }
        setInputValue('');
        router.push(`/results/${trimmedInputValue}`);
    };

    return (
        <div id={'center'} className={'flex justify-center items-center'}>
            <div id={'search-box'} className={'flex'}>
                <div id={'search-container'}
                     className={'flex justify-left items-center bg-stone-900 h-10 w-full relative'}>
                    <div id={'search-icon'}>
                        <Icons.magnifier
                            className={'h-5 w-5 ml-3 brightness-0 invert'}/>
                    </div>
                    <div id={'search-form'} className={'flex w-full ml-5'}>
                        <form className={'h-full w-full'} onSubmit={handleSubmit}>
                            <input id={'search'} autoCapitalize={'none'} autoComplete={'off'} type={'text'}
                                   spellCheck={'false'} placeholder={'Szukaj'} value={inputValue}
                                   onChange={handleChange}
                                   className={'bg-transparent w-full border-none outline-none m-0 p-0'}/>
                        </form>
                    </div>
                </div>

                <button
                    className={'flex justify-center items-center h-10 w-16 bg-primary rounded-tr-[20px] rounded-br-[20px]'}
                    onClick={handleSubmit}>
                    <Icons.magnifier className={'h-5 w-5 brightness-0 invert'}/>
                </button>
            </div>
            <button
                className={'flex justify-center items-center rounded-full w-10 h-10 ml-4 bg-primary hover:bg-lightgray cursor-not-allowed'}>
                <Icons.microphone className={'h-6 w-6 brightness-0 invert'}/>
            </button>
        </div>
    )
}

export default MastHeadCenter