import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import React from "react";
import MastHeadContainer from "@/components/MastHead/MastHeadContainer";
import {ActivePageProvider} from "@/contexts/ActivePageContext";

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
        <html lang="en">
        <body className={inter.className}>
                <ActivePageProvider>
                <MastHeadContainer/>
                {children}
                </ActivePageProvider>
            </body>
        </html>

    )
}
