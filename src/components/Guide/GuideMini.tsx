import shortsicon from '@/../public/icons/shorts.svg'
import subscriptionsicon from '@/../public/icons/subscriptions.svg'
import homeicon from '@/../public/icons/home.svg'
import youicon from '@/../public/icons/you.svg'
import historyicon from '@/../public/icons/history.svg'
import Image from "next/image";
import './Guide.css'
import Link from "next/link";
import {usePathname} from "next/navigation";
import { Icons } from '../icons'
const GuideMini = () => {
    const currentRoute = usePathname();

    return (
        <>
            <div id={'mini-guide'} className={'flex w-min p-1 sticky'}>
                <div id={'mini-guide-items'} className={'border-gray-500 flex flex-col justify-start items-center'}>
                    <Link href={'/'} className={currentRoute === '/' ? 'mini-guide-item active' : 'mini-guide-item'}>
                        <div><Icons.home className={'w-6 h-6 brightness-0 invert mb-1'}/></div>
                        <div>Główna</div>
                    </Link>
                    <Link href={'/shorts'} className={currentRoute === '/shorts' ? 'mini-guide-item active' : 'mini-guide-item'}>
                        <div><Icons.shorts className={'w-6 h-6 brightness-0 invert mb-1'}/></div>
                        <div>Shorts</div>
                    </Link>
                    <Link href={'/feed/subscriptions'} className={currentRoute === '/feed/subscriptions' ? 'mini-guide-item active' : 'mini-guide-item'}>
                        <div><Icons.subs className={'w-6 h-6 brightness-0 invert mb-1'}/></div>
                        <div>Subskrypcje</div>
                    </Link>
                    <Link href={'/feed/you'} className={currentRoute === '/feed/you' ? 'mini-guide-item active' : 'mini-guide-item'}>
                        <div><Icons.your_lib className={'w-6 h-6 brightness-0 invert mb-1'}/></div>
                        <div>Ty</div>
                    </Link>
                    <Link href={'/feed/history'} className={currentRoute === '/feed/history' ? 'mini-guide-item active' : 'mini-guide-item'}>
                        <div><Icons.history className={'w-6 h-6 brightness-0 invert mb-1'}/></div>
                        <div>Historia</div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default GuideMini