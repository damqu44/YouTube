// 'use client'
// import React, {useState} from "react";
// import {UserAuth} from "@/contexts/AuthContext";
// import {useRouter} from "next/navigation";
// const SignUp = () => {
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     // @ts-ignore
//     const {user, signUp} = UserAuth()
//     const router = useRouter()
//     console.log(user)
//
//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault()
//         try {
//             if (signUp) {
//                 await signUp(email, password)
//                 router.push('/')
//             } else {
//                 console.error('signUp is not defined')
//             }
//         } catch (error) {
//             console.log(error)
//         }
//     }
//
//     return (
//         <div className={'w-full h-screen bg-red-300'}>
//             <form onSubmit={handleSubmit}>
//                 <input onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email'
//                        autoComplete='email'/>
//                 <input onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password'
//                        autoComplete='current-password'/>
//                 <button type={"submit"}>Sign Up</button>
//             </form>
//         </div>
//     )
// }
//
// export default SignUp

'use client'
import React, {useState} from "react";
import {UserAuth} from "@/contexts/AuthContext";
import {useRouter} from "next/navigation";
import Link from "next/link";
import {Icons} from "../icons";

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const [error, setError] = useState<string | null>(null)
    const {signUp} = UserAuth()
    const router = useRouter()
    const [isChecked, setChecked] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false)
    const toggleShowPassword = () => {
        setChecked(!isChecked);
        setPasswordVisible(!isChecked)
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError(null)
        try {
            if (password !== repeatPassword) {
                setError('Hasła muszą być takie same.')
                return
            }
            if (signUp) {
                await signUp(email, password)
                router.push('/')
            } else {
                setError('unknown error')
            }
        } catch (err) {
            setError((err as Error).message)
            console.error(err)
        }
    }

    return (
        <div id={'auth-container'}
             className={'w-full h-full bg-white z-50 absolute top-0 flex flex-col justify-center items-center'}>
            <div id={'auth-signin'}
                 className={'pt-14 pb-9 px-10 flex flex-col justify-start items-center rounded-xl border border-gray-300'}>
                <div id={'auth-signin-info'} className={'flex flex-col justify-start items-center'}>
                    <Icons.youtube_logo_text_black className={'w-[95px]'}/>
                    <div className={'text-black text-2xl pt-4'}>Załóż konto</div>
                    <div className={'text-black text-base pt-2'}>Przejdź do YouTube</div>
                </div>
                <div id={'auth-signin-email'} className={'flex flex-col justify-start items-start pt-6'}>
                    <form onSubmit={handleSubmit}>
                        <div className={' mb-1'}>
                            <input onChange={(e) => setEmail(e.target.value)}
                                   type='email' placeholder='Email'
                                   autoComplete='email'
                                   className={`outline-none focus:border-2 rounded border h-12 w-80 px-4 text-base text-black ${error !== null ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-blue-600'}`}/>
                        </div>
                        <div className={'relative mb-1'}>
                            <input onChange={(e) => setPassword(e.target.value)}
                                   type={passwordVisible ? 'text' : 'password'} placeholder={'Wpisz hasło'}
                                   autoComplete='current-password'
                                   className={`outline-none focus:border-2 focus:border-blue-600 rounded border border-gray-300 h-12 w-80 px-4 text-base text-black ${error !== null ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-blue-600'}`}/>
                            <div className={'absolute right-[0%] top-[50%] translate-x-[-50%] translate-y-[-50%] translate cursor-pointer'}>
                                {isChecked ? (
                                    <Icons.eyeShowPassword onClick={toggleShowPassword}
                                                           className={'w-4 h-4'}/>
                                ) : (
                                    <Icons.eyeHidePassword onClick={toggleShowPassword}
                                                           className={'w-4 h-4'}/>
                                )}
                            </div>
                        </div>
                        <div>
                            <input onChange={(e) => setRepeatPassword(e.target.value)}
                                   type={passwordVisible ? 'text' : 'password'} placeholder={'Powtórz hasło'}
                                   autoComplete='current-password'
                                   className={`outline-none focus:border-2 focus:border-blue-600 rounded border border-gray-300 h-12 w-80 px-4 text-base text-black ${error !== null ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-blue-600'}`}/>
                        </div>
                    </form>
                    {error !== null && (
                        <div id={'auth-error'} className={'text-red-500 text-xs pt-1 flex justify-start items-center'}>
                            <Icons.error className={'mr-2 w-4 h-4'}/>
                            {error}
                            {/*Nie możemy znaleźć takiego konta*/}
                        </div>
                    )}
                </div>
                <div className={'w-full flex flex-row justify-between items-center pt-10 pb-14'}>
                    <div className={'w-1/2'}>
                        <Link href={'/signin'}
                              className={'text-sm text-blue-600 font-medium cursor-pointer rounded-md hover:bg-sky-50 hover:bg-opacity-50 focus:bg-blue-100 w-min px-2 py-2.5 whitespace-nowrap'}>
                            Zaloguj się
                        </Link>
                    </div>
                    <div id={'auth-signin-pass-page'} className={'h-max w-1/2 flex justify-end items-center'}>
                        <button onClick={handleSubmit} type={'submit'}
                                className={'py-1 px-4 bg-blue-600 flex justify-center items-center cursor-pointer rounded-md hover:bg-blue-700 focus:bg-blue-800'}>Utwórz
                            konto
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
                        target={'_blank'}
                        id={'help'} className={'p-4 text-gray-600 rounded-md focus:bg-gray-100'}>Pomoc</Link>
                    <Link href={'https://policies.google.com/privacy?gl=PL&hl=pl'} id={'privacy'}
                          target={'_blank'}
                          className={'p-4 text-gray-600 rounded-md focus:bg-gray-100'}>Prywatność</Link>
                    <Link href={'https://policies.google.com/terms?gl=PL&hl=pl'} id={'conditions'}
                          target={'_blank'}
                          className={'p-4 text-gray-600 rounded-md focus:bg-gray-100'}>Warunki</Link>
                </div>
            </div>
        </div>
    )
}

export default SignUp