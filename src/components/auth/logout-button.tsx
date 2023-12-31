"use client"
import * as React from "react"
import {useRouter} from "next/navigation"
import {SignOutButton} from "@clerk/nextjs"

interface LogoutButtonProps {
    children: React.ReactNode;
}

export function LogoutButton({children}: LogoutButtonProps) {
    const router = useRouter()
    const [isPending, startTransition] = React.useTransition()

    return (
        <SignOutButton
            signOutCallback={() =>
                startTransition(() => {
                    router.push(`${window.location.origin}/?redirect=false`)
                })
            }
        >
            {children}
        </SignOutButton>

    )
}