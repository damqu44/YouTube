import React from "react";
import {Icons} from "@/components/icons";

const Error = () => {
    return (
        <div id={'loading'} className={'flex w-full h-10 justify-center items-start mt-32'}>
            <div className={'flex justify-center items-center h-full pr-3'}><Icons.alert className={'w-10 h-10 brightness-100 invert'}/></div>
            <div className={'font-bold text-xl flex justify-center items-center h-full pt-2'}>ERROR!</div>
        </div>
    )
}

export  default Error