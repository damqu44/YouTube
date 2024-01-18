import Image from "next/image";
import {Icons} from "@/components/icons";
import React from "react";

const CommentsContents = () => {
    return (
        <div id={'com-contents'} className={'mt-3 w-full'}>
            <div id={'comment-thread'} className={'w-full'}>
                <div id={'comment'}
                     className={'w-full h-20 flex flex-row justify-start items-start mb-5'}>
                    <div id={'comment-channel-avatar'} className={'mr-4'}>
                        {/*<Image src={''} alt={'channel image'}*/}
                        {/*       className={'h-10 w-10 rounded-full cursor-pointer'}></Image>*/}
                        <Icons.profile className={'w-10 h-10 rounded-full cursor-pointer'}/>
                    </div>
                    <div id={'comment-main'}
                         className={'w-full flex flex-col justify-start items-start'}>
                        <div id={'author-header'}
                             className={'w-full flex flex-row justify-start items-center mb-1'}>
                            <div id={'author-text'} className={'text-sm mr-1'}>@Sezwer</div>
                            <div id={'published-time-text'}
                                 className={'text-xs dark-gray-color'}>2
                                tygodnie temu
                            </div>
                        </div>
                        <div id={'comment-content'} className={'mb-2'}>
                            Tanio skóry nie sprzedał.
                        </div>
                        <div id={'comment-action-buttons'}>
                            <div id={'comment-like-dislike-button'}
                                 className={'flex flex-row justify-start items-center'}>
                                <div id={'comment-like-button'}
                                     className={'flex justify-center items-center'}>
                                    <Icons.like
                                        className={'brightness-0 invert mr-2 w-6 h-6 cursor-pointer'}/>
                                    <span className={'mr-3'}>186</span>
                                </div>
                                <div id={'comment-dislike-button'}
                                     className={'flex justify-center items-center mr-2'}>
                                    <Icons.dislike
                                        className={'brightness-0 invert mr-1 w-6 h-6 cursor-pointer'}/>
                                </div>
                                <div id={'reply-button'}
                                     className={'text-sm cursor-not-allowed'}>
                                    Odpowiedz
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommentsContents