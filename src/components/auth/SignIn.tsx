'use client'
import React, {useState} from "react";
import {UserAuth} from "@/contexts/AuthContext";
import {useRouter} from "next/navigation";

const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState<Error | undefined>()
    const {user, logIn} = UserAuth()
    const router = useRouter()
    console.log(user)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            if (logIn) {
                await logIn(email, password)
                router.push('/')
            } else {
                console.error('logIn is not defined')
            }
        } catch (error) {
            setError(error as Error)
            console.log(Error)
        }
    }

    return (
        <div className={'w-full h-screen bg-red-300'}>
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email'
                       autoComplete='email'/>
                <input onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password'
                       autoComplete='current-password'/>
                <button type={"submit"}>Zaloguj się</button>
            </form>
        </div>
    )
}

export default SignIn