import {Icons} from "@/components/icons";
import './auth.css'
import {Button} from "@/components/ui/button";
import * as React from "react";
import {useRouter} from "next/navigation";

export default function loginButton() {
    const router = useRouter()
    return (
            <Button variant={'login'} size={'login'} className={'login-btn'} onClick={() => router.push('/signin')}>
                <Icons.profile className={'h-5 w-5 mr-3'}/>
                <span className={'text-myblue text-sm font-medium'}>Zaloguj się</span>
            </Button>
    )
}