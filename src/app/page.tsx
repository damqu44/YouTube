import Guide from "@/components/Guide/Guide";
import Container from "@/components/ui/Container";
import Header from "@/components/Content/Header/Header";
import VideoList from "@/components/Content/VideoList/VideoList";
import React from "react";

const HomePage = () => {

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

export default HomePage;