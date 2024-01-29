'use client'
import Image from "next/image";
import monkey from '@/../public/monkey.png'
import {Icons} from "@/components/icons";
import Link from "next/link";
import {useRouter} from "next/navigation";
import React, {useState} from "react";

export default function NotFound() {
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
        <div id={'error-page'}
             className={'absolute top-0 w-full h-full bg-gray-200 z-50 flex flex-col justify-center items-center'}>
            <div id={'error-content'} className={'flex flex-col justify-center items-center'}>
                <div id={'error-info'} className={'flex flex-col justify-center items-center'}>
                    <Image src={monkey} alt={'monkey with a magnifying glass'} width={186} height={174}
                           className={'mb-2.5'}/>
                    <div className={'text-base text-gray-800 text-center'}>Ta strona jest niedostępna. Przepraszamy.
                        <br/>Spróbuj poszukać czegoś innego.
                    </div>
                </div>
                <div id={'error-masthead'} className={'flex justify-center items-center mt-6'}>
                    <Link href={'/'} id={'error-logo-container'} className={'mr-2 flex justify-center items-center'}>
                        <Icons.youtube_logo_text_black className={'w-[125px] h-[30px]'}/>
                    </Link>
                    <form onSubmit={handleSubmit}
                          className={'flex justify-center items-center'}>
                        <input onChange={handleChange}
                               name={'search_query'} type={'text'}
                               placeholder={'Szukaj'}
                               className={'px-2 py-0.5 h-7 w-56 outline-0 text-black bg-white border border-gray-400'}
                               title={'Szukaj'} aria-label={'Szukaj'}/>
                        <button onClick={handleSubmit}
                                type={'submit'}
                                className={'h-7 bg-white bg-opacity-60 border border-gray-400 text-gray-500 hover:bg-opacity-25 hover:shadow-gray-500'}>
                            <Icons.magnifier className={'w-4 h-4 mx-6'}/>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
