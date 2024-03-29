'use client'
import './MastHead.css'
import Image from "next/image";
import {Icons} from "@/components/icons";
import React, {useEffect, useRef, useState} from 'react';
import LoginButton from '@/components/auth/login-button'
import {LogoutButton} from "@/components/auth/logout-button";
import {useAuthUser} from "@/hooks/firebase/useAuthUser";

export default function MastHeadEnd() {
    const {user, isLoading} = useAuthUser()
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [isSearchVisible, setIsSearchVisible] = useState<boolean>(false)
    const menuRef = useRef<HTMLDivElement | null>(null);

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

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 640) {
                setIsSearchVisible(true);
            } else {
                setIsSearchVisible(false);
            }
        }

        handleResize();  // Initial call
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [])

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const Skeleton = () => {
        return (
            <div className={'p-0 m-0 w-[33%] mr-2 animate-pulse'}>
                <div className={'bg-skeletongray rounded-full '}
                     style={{width: '32px', height: '32px'}}>
                </div>
            </div>
        )
    }

    if (isLoading) {
        return (
            <div id={'end'} className={'flex justify-center items-center mr-8'}>
                <Skeleton/>
                <Skeleton/>
                <Skeleton/>
            </div>
        )
    }

    return (

        <div id={'end'} className={'flex justify-center items-center mr-8'}>
            {
                !user?.userData.email ? (
                    <div id={'buttons'} className={'flex justify-center items-center'}>
                        <button id={'menu-button'} className={'w-10 h-10 flex items-center'}>
                            <Icons.three_dots
                                className={'w-6 h-6 brightness-0 invert mt-2 rotate-90 cursor-not-allowed'}/>
                        </button>
                        <LoginButton/>
                    </div>
                ) : (
                    <>
                        <div className={'relative px-2 flex justify-start items-center'}>
                            {isSearchVisible ? (
                                <>
                                    <button
                                        className={'p-2 mr-2 rounded-full hover:bg-primary focus:bg-lightgray cursor-not-allowed'}>
                                        <Icons.magnifier className={'w-6 h-6 invert '}/></button>
                                    <button
                                        className={'p-2 mr-2 rounded-full hover:bg-primary focus:bg-lightgray cursor-not-allowed'}>
                                        <Icons.microphone className={'w-6 h-6 invert '}/></button>
                                </>
                            ) : null}
                            <button
                                className={'p-2 mr-2 rounded-full hover:bg-primary focus:bg-lightgray cursor-not-allowed'}>
                                <Icons.create className={'w-6 h-6 invert '}/></button>
                            <button
                                className={'p-2 mr-2 rounded-full hover:bg-primary focus:bg-lightgray cursor-not-allowed'}>
                                <Icons.notifications className={'w-6 h-6 invert'}/></button>
                            <button
                                onClick={toggleMenu}
                                className={'rounded-full border border-transparent focus:border focus:border-myblue'}>
                                {user?.userData.photoURL ? (
                                    <Image src={user?.userData.photoURL} alt={'profile image'} width={32} height={32}
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
                                            {user?.userData.photoURL ? (

                                                <Image src={user?.userData.photoURL} alt={'profile image'} width={40} height={40}
                                                       className={'rounded-full cursor-pointer mx-2'}/>
                                            ) : (
                                                <Icons.profile className={'rounded-full h-8 w-8'}/>
                                            )}
                                        </div>
                                        <div>
                                            <div className={'text-base'}>{user?.userData.displayName}</div>
                                            <div className={'text-base'}>{user?.userData.email}</div>
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