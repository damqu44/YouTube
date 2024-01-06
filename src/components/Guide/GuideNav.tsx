'use client'
import {Icons} from "@/components/icons";
import LoginButton from '@/components/auth/login-button'
import './Guide.css'
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useUser} from "@clerk/nextjs";

export default function GuideNav() {
    const currentRoute = usePathname();
    const {isSignedIn, user} = useUser()

    return (
        <div id={'nav'} className={'flex flex-col'}>
            <Link id={'home'} className={currentRoute === '/' ? 'guide-item active' : 'guide-item'} href={'/'}>
                <Icons.home className={'guide-icon'}/>
                <span>Główna</span>
            </Link>
            <Link id={'shorts'} className={currentRoute!.startsWith('/shorts/') ? 'guide-item active' : 'guide-item'}
                  href={`/shorts/id`}>
                <Icons.shorts className={'guide-icon'}/>
                <span>Shorts</span>
            </Link>
            <Link id={'subscriptions'}
                  className={currentRoute === '/feed/subscriptions' ? 'guide-item active' : 'guide-item'}
                  href={'/feed/subscriptions'}>
                <Icons.subs className={'guide-icon'}/>
                <span>Subskrypcje</span>
            </Link>
            {isSignedIn ? (
                <>
                    <Link id={'youtube-music'} className={'guide-item'} href={'https://music.youtube.com/'}>
                        <Icons.youtube_music_white className={'guide-icon'}/>
                        <span>YouTube Music</span>
                    </Link>
                    <div className={'line'}></div>
                    <Link id={'you'} className={currentRoute === '/feed/you' ? 'guide-item active' : 'guide-item'}
                          href={'/feed/you'}>
                        <span className={'mr-2 font-bold text-base'}>Ty</span>
                        <Icons.right_arrow_light className={'w-5 h-5 brightness-100 invert'}/>
                    </Link>
                    <Link className={currentRoute === `/${user?.firstName}` ? 'guide-item active' : 'guide-item'}
                          href={`/${user?.firstName}`}>
                        <Icons.your_profile className={'guide-icon'}/>
                        <span>Twój kanał</span>
                    </Link>
                    <Link id={'history'}
                          className={currentRoute === '/feed/history' ? 'guide-item active' : 'guide-item'}
                          href={'/feed/history'}>
                        <Icons.history className={'guide-icon'}/>
                        <span>Historia</span>
                    </Link>
                    <Link className={'guide-item'}
                          href={'https://studio.youtube.com/channel/'} target={'_blank'}>
                        <Icons.your_vid className={'guide-icon'}/>
                        <span>Twoje filmy</span>
                    </Link>
                    <Link className={currentRoute === '/playlist/to-watch' ? 'guide-item active' : 'guide-item'}
                          href={'/playlist/to-watch'}>
                        <Icons.to_watch className={'guide-icon'}/>
                        <span>Do obejrzenia</span>
                    </Link>
                    <Link id={'downloads'}
                          className={currentRoute === '/feed/downloads' ? 'guide-item active' : 'guide-item'}
                          href={'/feed/downloads'}>
                        <Icons.download className={'guide-icon'}/>
                        <span>Pobrane</span>
                    </Link>
                    <button id={'more'} className={'guide-item'}>
                        <Icons.down_arrow className={'guide-icon'}/>
                        <span>Pokaż więcej</span>
                    </button>
                    <div className={'line'}></div>
                </>
            ) : (
                <>
                    <div className={'line'}></div>
                    <Link id={'you'} className={currentRoute === '/feed/you' ? 'guide-item active' : 'guide-item'}
                          href={'/feed/you'}>
                        <Icons.your_lib className={'guide-icon'}/>
                        <span>Ty</span>
                    </Link>
                    <Link id={'history'}
                          className={currentRoute === '/feed/history' ? 'guide-item active' : 'guide-item'}
                          href={'/feed/history'}>
                        <Icons.history className={'guide-icon'}/>
                        <span>Historia</span>
                    </Link>
                    <div className={'line'}></div>
                    <div id={'guide-signin-promo'}
                         className={'w-full flex flex-col justify-center items-center text-sm py-2 px-4'}>
                        <div className={'mb-2'}>Zaloguj się, by polubić film, zostawić komentarz lub zasubskrybować
                            kanał.
                        </div>
                        <div className={'w-full flex justify-start items-center'}><LoginButton/></div>
                    </div>
                    <div className={'line'}></div>
                </>
            )}
        </div>
    )
}