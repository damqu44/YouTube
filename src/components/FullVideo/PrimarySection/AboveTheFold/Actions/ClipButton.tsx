import {Icons} from "@/components/icons";
import React from "react";

interface SaveButtonProps {
    isButtonVisible: boolean;
}
const ClipButton: React.FC <SaveButtonProps>= ({isButtonVisible}) => {
    return (
        <div
            className={isButtonVisible ? 'action-button flex rounded-full mr-2 hover:cursor-not-allowed' : 'flex justify-start items-center hover:bg-primary py-2 px-4 cursor-not-allowed'}>
            <Icons.scissors
                className={'w-6 h-6 brightness-0 invert mr-1'}/>
            <span className={'mr-2'}>Klip</span>
        </div>
    )
}

export default ClipButton