import Image from "next/image";
import {SignInButton} from "@clerk/nextjs";
import profileicon from "../../../public/icons/profile.svg";
import './auth.css'
import {Button} from "@/components/ui/button";
import * as React from "react";

export default function loginButton() {

    return (
        <>
            <SignInButton>
                <Button variant={'login'} size={'login'} className={'login-btn'}>
                    <Image src={profileicon} alt={'profile icon'} className={'h-5 w-5 mr-3'}/>
                    <span className={'text-myblue text-sm font-medium'}>Zaloguj się</span>
                </Button>
            </SignInButton>
        </>
    )
}