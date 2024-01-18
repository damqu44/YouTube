"use client"
import * as React from "react"
import {useRouter} from "next/navigation"
import {UserAuth} from "@/contexts/AuthContext";
import {Icons} from "@/components/icons";

export function LogoutButton() {
    const router = useRouter()
    // @ts-ignore
    const {user, logOut} = UserAuth()

    const handleLogout = async () => {
        try {
            if (logOut) {
                await logOut()
                router.push('/')
            } else {
                console.error('logOut is not defined')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div onClick={handleLogout} className={'flex w-full h-full justify-start items-center'}>
            <Icons.signout className={'menu-icon'}/>
            <span>Wyloguj się</span>
        </div>
    )
}