import './auth.css'
import youtubelogo from '@/../public/icons/yttextblack.svg'
import Image from "next/image";

const SignIn = () => {
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
                    <form>
                        <input id={'email'} type={'email'} placeholder={'Adres e-mail'}
                               className={'rounded border border-gray-300 w-80 h-7 px-4 py-5 text-base text-black'}/>
                    </form>
                    <div id={'auth-forgot-email'} className={'text-blue-600 pt-2 text-sm font-medium cursor-pointer'}>Nie pamiętasz
                        adresu?
                    </div>
                </div>
                <div id={'auth-next-step'} className={'w-full flex flex-row justify-between items-center pt-10 pb-14'}>
                    <div id={'auth-signup-page'} className={'w-1/2'}>
                        <div
                            className={'text-sm text-blue-600 font-medium cursor-pointer hover:bg-sky-50 hover:bg-opacity-50 w-min px-2 py-2.5 whitespace-nowrap'}>
                            Utwórz konto
                        </div>
                    </div>
                    <div id={'auth-signin-pass-page'} className={'h-max w-1/2 flex justify-end items-center'}>
                        <div className={'w-20 h-10 bg-blue-600 flex justify-center items-center cursor-pointer rounded-md hover:bg-blue-700'}>Dalej</div>
                    </div>
                </div>
            </div>
            <div id={'auth-footer'} className={'w-full bg-blue-900 flex justify-start items-center'}>
                <div id={'auth-language'} className={'w-full'}>
                    <select>
                        <option>Polski</option>
                        <option>Angielski</option>
                        <option>Niemiecki</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default SignIn