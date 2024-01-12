import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import React from "react";
import MastHeadContainer from "@/components/MastHead/MastHeadContainer";
import {ActivePageProvider} from "@/contexts/ActivePageContext";
import {GuideProvider} from "@/contexts/GuideContext";
import {AuthContextProvider} from "@/contexts/AuthContext";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Youtube',
    description: "My Youtube's duplicate.",
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode,
}) {


    return (
        <>
            <AuthContextProvider>
                    <html lang="en">
                    <body className={inter.className}>
                    <ActivePageProvider>
                        <GuideProvider>
                            <MastHeadContainer/>
                            {children}
                        </GuideProvider>
                    </ActivePageProvider>
                    </body>
                    </html>
            </AuthContextProvider>
        </>

    )
}
