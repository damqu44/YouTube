'use client'
import Guide from "@/components/Guide/Guide"
import Container from "@/components/ui/Container"
import React from "react"

interface GuideContainerProps {
    children: React.ReactNode;
}

const GuideContainer: React.FC<GuideContainerProps> = ({children}) => {
    return (
        <div id={'content'} className={'flex w-full h-full'}>
            <Guide/>
            <Container>
                {children}
            </Container>
        </div>
    )
}

export default GuideContainer