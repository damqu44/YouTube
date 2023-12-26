import Image from "next/image";
import leftarrowicon from "@/../public/icons/left-arrow.svg";
import rightarrowicon from "@/../public/icons/right-arrow.svg";
import React from "react";

const ChipCloud = () => {
    return (
        <div id={'chip-cloud'}
             className={'flex flex-row w-full h-full text-sm font-medium justify-center items-center py-4'}>
            <div id={'chip-left-arrow'} className={'mr-2 arrow'}>
                <Image src={leftarrowicon} alt={'left arrow to expand chip cloud'}
                       className={'brightness-0 invert'}/>
            </div>
            <div id={'chips'} className={'flex flex-row overflow-hidden w-full'}>
                <div id={'chip-all'}
                     className={'chip active'}>
                    <span>Wszystkie</span>
                </div>
                <div id={'chip-similar'}
                     className={'chip'}>
                    <span>Podobne</span>
                </div>
                <div id={'chip-foryou'}
                     className={'chip'}>
                    <span>Dla ciebie</span>
                </div>
                <div id={'chip-recentlyadded'}
                     className={'chip'}>
                    <span>Ostatnio przesłane</span>
                </div>
                <div id={'chip-watched'}
                     className={'chip'}>
                    <span>Obejrzane</span>
                </div>
            </div>
            <div id={'chip-right-arrow'} className={'ml-2 arrow'}>
                <Image src={rightarrowicon} alt={'right arrow to expand chip cloud'}
                       className={'brightness-0 invert'}/>
            </div>
        </div>
    )
}

export default ChipCloud