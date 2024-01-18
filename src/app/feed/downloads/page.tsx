import Guide from "@/components/Guide/Guide";
import {isAuthenticated} from "@/utils/Auth";
import {redirect} from "next/navigation";
import React from "react";

const DownloadPage = () => {
    const isAuth = isAuthenticated

    if(!isAuth) {
        redirect('/')
    }

    return (
            <div id={'content'} className={'flex flex-row w-full h-full'}>
                <Guide/>
                <div className={'w-full flex flex-col items-center pt-36'}>Przerwa techniczna...</div>
            </div>
    )
}

export default DownloadPage