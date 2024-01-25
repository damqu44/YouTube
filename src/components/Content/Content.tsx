'use client'
import './Content.css'
import VideoList from "@/components/Content/VideoList/VideoList";
import React from "react";
import Guide from "@/components/Guide/Guide";
import Header from "@/components/Content/Header/Header";
import {CategoryProvider} from "@/contexts/VideosCategoryContext";
import Container from "@/components/ui/Container";
const Content: React.FC = () => {

    return (
        <>
            <div id={'content'} className={'flex w-full'}>
                <Guide/>
                    <div className={'w-full flex justify-center items-start'}>
                        <Container>
                            <Header/>
                            <div id={'contents-row'} className={'w-full flex flex-wrap justify-start items-start'}>
                                <VideoList/>
                            </div>
                        </Container>
                    </div>
            </div>
        </>
    )
}

export default Content