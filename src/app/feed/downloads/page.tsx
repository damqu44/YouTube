import Guide from "@/components/Guide/Guide";
import {redirect} from "next/navigation";
import React from "react";
import {isUserAuthenticated} from "@/lib/firebase/firebase-admin";

export async function DownloadPage () {
    if (!await isUserAuthenticated()) redirect("/");


    return (
            <div id={'content'} className={'flex flex-row w-full h-full'}>
                <Guide/>
                <div className={'w-full flex flex-col items-center pt-36'}>Przerwa techniczna...</div>
            </div>
    )
}

export default DownloadPage