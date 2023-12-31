import Image from "next/image";
import monkey from '@/../public/monkey.png'
import youtubelogo from '@/../public/icons/yttextblack.svg'
import {Icons} from "@/components/icons";
import Link from "next/link";

const NotFoundPage = () => {
    return (
        <div id={'error-page'}
             className={'absolute top-0 w-full h-full bg-gray-200 z-50 flex flex-col justify-center items-center'}>
            <div id={'error-content'} className={'flex flex-col justify-center items-center'}>
                <div id={'error-info'} className={'flex flex-col justify-center items-center'}>
                    <Image src={monkey} alt={'monkey with a magnifying glass'} width={186} height={174}
                           className={'mb-2.5'}/>
                    <div className={'text-base text-gray-800 text-center'}>Ta strona jest niedostępna. Przepraszamy.
                    <br />Spróbuj poszukać czegoś innego.</div>
                </div>
                <div id={'error-masthead'} className={'flex justify-center items-center mt-6'}>
                    <Link  href={'/'} id={'error-logo-container'} className={'mr-2 flex justify-center items-center'}>
                        <Image src={youtubelogo} alt={'youtube logo'} width={125} height={30}/>
                    </Link>
                    <div id={'error-masthead-search'} className={'flex justify-center items-center'}>
                        <input id={'error-masthead-search-terms'} name={'search_query'} type={'text'}
                               placeholder={'Szukaj'} className={'px-2 py-0.5 h-7 w-56 outline-0 text-black bg-white border border-gray-400'}
                               title={'Szukaj'} aria-label={'Szukaj'}/>
                        <button id={'error-masthead-search-button'} type={'submit'} className={'h-7 bg-white bg-opacity-60 border border-gray-400 text-gray-500 hover:bg-opacity-25 hover:shadow-gray-500'}>
                            <Icons.magnifier className={'w-4 h-4 mx-6'}/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFoundPage