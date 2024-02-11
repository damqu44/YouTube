"use client"
import * as React from "react"
import {useRouter} from "next/navigation"
import {signOut} from "@/lib/firebase/auth";
import {Icons} from "@/components/icons";

export function LogoutButton() {
    const router = useRouter()
    const handleSignOut = async () => {
        const isOk = await signOut();

        if (isOk) router.push("/");
    }

    return (
        <div onClick={handleSignOut} className={'flex w-full h-full justify-start items-center'}>
            <Icons.signout className={'menu-icon'}/>
            <span>Wyloguj się</span>
        </div>
    )
}