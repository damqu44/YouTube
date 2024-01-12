'use client'
import './MastHead.css'
import Image from "next/image";
import LoginButton from '@/components/auth/login-button'
import menuicon from '@/../public/icons/menu.svg'
import {LogoutButton} from "@/components/auth/logout-button";
import {Icons} from "@/components/icons";
import React, {useEffect, useRef, useState} from 'react';
import {UserAuth} from "@/contexts/AuthContext";

export default function MastHeadEnd() {
    // @ts-ignore
    const {user} = UserAuth()
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const menuRef = useRef<HTMLDivElement | null>(null);
    console.log(user, 'email')
    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false)
            }
        }

        const handleEscapeKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.addEventListener('click', handleOutsideClick);
            document.addEventListener('keydown', handleEscapeKey);
        }

        return () => {
            document.removeEventListener('click', handleOutsideClick);
            document.removeEventListener('keydown', handleEscapeKey);
        };
    }, [isMenuOpen])

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    return (

        <div id={'end'} className={'flex justify-center items-center mr-8'}>
            {
                !user?.email ? (
                    <div id={'buttons'} className={'flex justify-center items-center'}>
                        <button id={'menu-button'} className={'w-10 h-10 flex items-center'}>
                            <Image src={menuicon} alt={'menu icon'} className={'w-8 h-8 brightness-0 invert mt-2'}/>
                        </button>
                        <LoginButton/>
                    </div>
                ) : (
                    <>
                        <div className={'relative px-2 flex justify-start items-center'}>
                            <button
                                className={'p-2 mr-2 rounded-full hover:bg-primary focus:bg-lightgray cursor-pointer'}>
                                <Icons.create className={'w-6 h-6 invert '}/></button>
                            <button
                                className={'p-2 mr-2 rounded-full hover:bg-primary focus:bg-lightgray cursor-pointer'}>
                                <Icons.notifications className={'w-6 h-6 invert'}/></button>
                            <button
                                onClick={toggleMenu}
                                className={'rounded-full border border-transparent focus:border focus:border-myblue'}>
                                {user?.photoURL ? (
                                    <Image src={user?.photoURL} alt={'profile image'} width={32} height={32}
                                           className={'rounded-full cursor-pointer'}/>
                                ) : (
                                    <Icons.profile className={'rounded-full h-8 w-8'}/>
                                )}
                            </button>
                            {isMenuOpen && (
                                <div id={'profile-menu'} ref={menuRef}
                                     className={'flex flex-col justify-start items-start w-80 rounded-xl absolute bg-gray-600 pb-3 top-8 right-0 z-50'}>
                                    <div id={'profile-header'}
                                         className={'w-full flex flex-row p-4'}>
                                        <div className={'mr-2'}>
                                            {user?.photoURL ? (

                                                <Image src={user?.photoURL} alt={'profile image'} width={40} height={40}
                                                       className={'rounded-full cursor-pointer mx-2'}/>
                                            ) : (
                                                <Icons.profile className={'rounded-full h-8 w-8'}/>
                                            )}
                                        </div>
                                        <div>
                                            <div className={'text-base'}>{user?.displayName}</div>
                                            <div className={'text-base'}>{user?.email}</div>
                                            <div className={'text-sm pt-1 cursor-pointer text-myblue'}>Wyświetl swój
                                                kanał
                                            </div>
                                        </div>
                                    </div>
                                    <div id={'profile-sections'}
                                         className={'w-full flex flex-col justify-start text-sm'}>
                                        <div className={'profile-section'}>
                                            <div className={'item'}>
                                                <Icons.google className={'w-6 h-6 mr-4'}/>
                                                <span>Konto Google</span>
                                            </div>
                                            <div className={'item'}>
                                                <Icons.switchacc className={'menu-icon'}/>
                                                <span>Przełącz konto</span>
                                            </div>
                                            <div className={'item'}>
                                                <LogoutButton/>
                                            </div>
                                        </div>
                                        <div className={'profile-section'}>
                                            <div className={'item'}>
                                                <Icons.youtube_studio className={'menu-icon'}/>
                                                <span>YouTube Studio</span>
                                            </div>
                                            <div className={'item'}>
                                                <Icons.youtube_premium className={'w-6 h-6 mr-4'}/>
                                                <span>Korzyści, jakie daje Premium</span>
                                            </div>
                                            <div className={'item'}>
                                                <Icons.dolar className={'menu-icon'}/>
                                                <span>Zakupy i subskrypcje</span>
                                            </div>
                                        </div>
                                        <div className={'profile-section'}>
                                            <div className={'item'}>
                                                <Icons.your_data className={'menu-icon'}/>
                                                <span>Twoje dane w YouTube</span>
                                            </div>
                                            <div className={'item'}>
                                                <Icons.appearance className={'menu-icon'}/>
                                                <span>Wygląd: tryb urządzenia</span>
                                            </div>
                                            <div className={'item'}>
                                                <Icons.language className={'menu-icon'}/>
                                                <span>Język: polski</span>
                                            </div>
                                            <div className={'item'}>
                                                <Icons.restricted_mode className={'menu-icon'}/>
                                                <span>Tryb ograniczonego dostępu:
                                                wyłączony
                                            </span>
                                            </div>
                                            <div className={'item'}>
                                                <Icons.location className={'menu-icon'}/>
                                                <span>Lokalizacja: Polska</span>
                                            </div>
                                            <div className={'item'}>
                                                <Icons.keyboard className={'menu-icon'}/>
                                                <span>Skróty klawiszowe</span>
                                            </div>
                                        </div>
                                        <div className={'profile-section'}>
                                            <div className={'item'}>
                                                <Icons.settings className={'menu-icon'}/>
                                                <span>Ustawienia</span>
                                            </div>
                                        </div>
                                        <div className={'profile-section'}>
                                            <div className={'item'}>
                                                <Icons.help className={'menu-icon'}/>
                                                <span>Pomoc</span>
                                            </div>
                                            <div className={'item'}>
                                                <Icons.feedback className={'menu-icon'}/>
                                                <span>Prześlij opinię</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </>
                )}
        </div>
    )
}