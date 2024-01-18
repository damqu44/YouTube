import Guide from "@/components/Guide/Guide";
import React from "react";
import Liked from "@/components/SubPages/liked/Liked";

export default async function Page() {

    return (
        <>
            <div id={'content'} className={'flex w-full'}>
                <Guide/>
                <Liked/>
            </div>
        </>
    )
}
