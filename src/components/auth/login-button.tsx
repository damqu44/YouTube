'use client'
import {Icons} from "@/components/icons";
import {Button} from "@/components/ui/button";
import * as React from "react";
import {useRouter} from "next/navigation";
import {signInWithGoogle} from "@/lib/firebase/auth";

export default function LoginButton() {
    const router = useRouter()

    const handleSignIn = async () => {
        const isOk = await signInWithGoogle()

        if (isOk) router.push("/");
    }

    return (
            <Button variant={'login'} size={'login'} onClick={handleSignIn}>
                <Icons.profile className={'h-5 w-5 mr-3'}/>
                <span className={'text-myblue text-sm font-medium'}>Zaloguj się</span>
            </Button>
    )
}