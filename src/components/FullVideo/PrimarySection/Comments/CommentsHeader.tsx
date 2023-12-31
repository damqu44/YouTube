import Image from "next/image";
import {Icons} from "@/components/icons";
import React from "react";

const CommentsHeader = () => {
    return (
        <div id={'com-header'} className={'w-full flex flex-col'}>
            <div id={'title'} className={'w-full flex flex-row justify-start items-center'}>
                <div id={'comments-count'} className={'text-xl font-bold mr-6'}>
                    1 komentarz
                </div>
                <div id={'sort-menu'} className={'flex flex-row text-sm cursor-pointer'}>
                    <Icons.sort_lines
                        className={'brightness-0 invert mr-2'}/>
                    <div className={'font-semibold'}>Sortuj według</div>
                </div>
            </div>
            <div id={'comment-box'} className={'w-full flex flex-row mt-4'}>
                <div id={'your-thumbnail'}
                     className={'flex flex-row pr-3'}>
                    <Image src={''} alt={'channel image'}
                           className={'h-10 w-10 rounded-full cursor-pointer'}/>
                </div>
                <div className={'w-full flex flex-col'}>
                    <div id={'placeholder-area'} className={'w-full pr-5'}>
                        <input type={'text'} placeholder={'Dodaj komentarz'}
                               className={'w-full placeholder-input'}/>
                    </div>
                    <div id={'comments-footer'}
                         className={'flex flex-row justify-end items-center text-sm mt-4'}>
                        <div id={'comments-cancel-button'}
                             className={'mr-5 cursor-pointer font-semibold'}>Anuluj
                        </div>
                        <div id={'comments-submit-button'}
                             className={'light-gray-color px-4 py-2 rounded-3xl cursor-not-allowed text-gray-500'}>Skomentuj
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommentsHeader