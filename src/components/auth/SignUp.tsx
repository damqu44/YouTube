'use client'
import React, {useState} from "react";
import {UserAuth} from "@/contexts/AuthContext";
import {useRouter} from "next/navigation";
const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // @ts-ignore
    const {user, signUp} = UserAuth()
    const router = useRouter()
    console.log(user)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            if (signUp) {
                await signUp(email, password)
                router.push('/')
            } else {
                console.error('signUp is not defined')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={'w-full h-screen bg-red-300'}>
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email'
                       autoComplete='email'/>
                <input onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password'
                       autoComplete='current-password'/>
                <button type={"submit"}>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp