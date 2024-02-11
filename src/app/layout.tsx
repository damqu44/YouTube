import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import React from "react";
import MastHeadContainer from "@/components/MastHead/MastHeadContainer";
import {ActivePageProvider} from "@/contexts/ActivePageContext";
import {GuideProvider} from "@/contexts/GuideContext";
import {CategoryProvider} from "@/contexts/VideosCategoryContext";
import {AuthUserProvider} from "@/hooks/firebase/useAuthUser";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Youtube',
    description: "Youtube's duplicate.",
    authors: {name: 'Damian Charążka'},
    generator: 'Next.js',
    publisher: 'Vercel',
}

export default function RootLayout({children,}: { children: React.ReactNode, }) {

    return (
        <>
            <html lang="en">
            <body className={inter.className}>
            <AuthUserProvider>
                <ActivePageProvider>
                    <GuideProvider>
                        <CategoryProvider>
                            <MastHeadContainer/>
                            {children}
                        </CategoryProvider>
                    </GuideProvider>
                </ActivePageProvider>
            </AuthUserProvider>
            </body>
            </html>
        </>
    )
}
