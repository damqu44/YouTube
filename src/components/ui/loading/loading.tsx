import React from "react";
import './spinner.css'

const Loading = () => {
    return (
        <div id={'loading'} className={'flex w-full justify-center items-start mt-36'}>
            <div className={'loading-spinner'}></div>
        </div>
    )
}

export  default Loading