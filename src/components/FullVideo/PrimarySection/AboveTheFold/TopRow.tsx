import Image from "next/image";
import {Icons} from "@/components/icons";
import Link from "next/link";
import {db} from "@/lib/firebase/firebase";
import React, {useEffect, useState} from "react";
import SubscribeButton from "@/components/ui/subscribe-button";
import {useNumbersFormatting} from "@/hooks/formats/useNumbersFormatting";
import {UserAuth} from "@/contexts/AuthContext";
import {arrayUnion, doc, getDoc, updateDoc} from "@firebase/firestore";
import {isAuthenticated} from "@/utils/Auth";
import useLikedVideos from "@/hooks/firebase/useLikedVideos";

type VideoProps = {
    _id: string;
    channel: string;
    subscriptions: string;
    likes: string;
    avatar_link: string;
    channelId: string;
};
const TopRow: React.FC<VideoProps> = (props) => {
    const isAuth = isAuthenticated()
    const {user} = UserAuth()
    const {formatSubscribers} = useNumbersFormatting();
    const {likedVideos} = useLikedVideos()
    const [like, setLike] = useState<boolean>(false)

    const userEmail = user?.email;
    const userRef = userEmail ? doc(db, 'users', userEmail) : null

    //check is video liked
    useEffect(() => {
        const checkLike = async () => {
            if (isAuth && userEmail && userRef) {
                try {
                    const docSnap = await getDoc(userRef);
                    if (docSnap.exists()) {
                        const likedVideos = docSnap.data().likedVideos || [];
                        const isLiked = likedVideos.some((likedVideo: {
                            id: string
                        }) => likedVideo.id === props._id);
                        setLike(isLiked);
                    }
                } catch (error) {
                    console.error("Błąd podczas sprawdzania subskrypcji:", error);
                }
            }
        };

        checkLike();
    }, [isAuth, userEmail, userRef, props._id]);

    //make video to be liked
    const likeVideo = async () => {
        console.log('Starting..')
        if (isAuth && userEmail && userRef) {
            console.log('Working..')
            setLike(true)
            await updateDoc(userRef, {
                likedVideos: arrayUnion({
                    id: props._id,
                }),
            })
        } else {
            alert('Please log in to like a video!')
        }
    }

    //make video to be unliked
    const unLikeVideo = async (passedID: string) => {
        try {
            if (userRef) {
                const result = likedVideos.filter((video) => video.id !== passedID)
                const resultId = result.map((video) => ({id: video.id}))
                setLike(false)
                await updateDoc(userRef, {
                    likedVideos: resultId,
                })
            }
        } catch (err) {
            console.error(err)
        }
    }
    const handleClick = async () => {
        await unLikeVideo(props._id)
    }

    return (
        <div id={'top-row'} className={'flex flex-row pt-4'}>
            <div id={'owner'} className={'flex flex-row w-1/2 justify-start items-center'}>
                <Link className={'pr-3'} href={`/${props.channelId}`}>
                    {props.avatar_link ? (
                        <Image src={props.avatar_link} alt={'channel image'} width={40} height={40}
                               className={'rounded-full cursor-pointer'}></Image>
                    ) : (
                        <Icons.profile className={'w-10 h-10 rounded-full cursor-pointer'}/>
                    )}
                </Link>
                <div id={'channel-info'}
                     className={'flex flex-col justify-center items-center pr-8'}>
                    <Link id={'channel'} href={`/${props.channelId}`}
                          className={'w-full h-6 text-base font-medium cursor-pointer overflow-hidden'}>
                        {props.channel}
                    </Link>
                    <div id={'subscriptions'}
                         className={'w-full flex flex-row'}>
                        <div className={'text-xs gray-color'}>{formatSubscribers(props.subscriptions)}</div>
                    </div>
                </div>
                <div id={'subscribe-button'}>
                    <SubscribeButton channelId={props.channelId}/>
                </div>
            </div>
            <div id={'actions'}
                 className={'flex flex-row w-1/2 h-10 justify-end items-center text-sm font-medium text-white whitespace-nowrap'}>
                <div id={'top-level-buttons'} className={'flex flex-row h-full'}>
                    <div id={'like-dislike-button'}
                         className={'flex flex-row justify-center items-center'}>
                        {like ? (
                            <div onClick={handleClick}
                                 className={'flex flex-row actions-color rounded-l-full justify-center items-center relative'}>
                                <Icons.like_filled
                                    className={'w-6 h-7 brightness-0 invert mr-3'}/>
                                <span className={'mr-4'}>{props.likes}</span>
                            </div>
                        ) : (
                            <div onClick={likeVideo}
                                 className={'flex flex-row actions-color rounded-l-full justify-center items-center relative'}>
                                <Icons.like
                                    className={'w-6 h-7 brightness-0 invert mr-3'}/>
                                <span className={'mr-4'}>{props.likes}</span>
                            </div>
                        )}
                        <div className={'flex flex-row actions-color rounded-r-full justify-center items-center mr-2'}>
                            <Icons.dislike
                                className={'w-6 h-7 brightness-0 invert ml-2 mr-1'}/>
                        </div>
                    </div>
                    <div id={'share-button'}
                         className={'flex flex-row actions-color rounded-full justify-center items-center mr-2'}>
                        <Icons.share
                            className={'w-6 h-6 brightness-0 invert mr-1'}/>
                        <span className={'mr-2'}>Udostępnij</span>
                    </div>
                    {!user?.email ? (
                        <div id={'save-button'}
                             className={'flex flex-row actions-color rounded-full justify-center items-center mr-3'}>
                            <Icons.save
                                className={'w-6 h-6 brightness-0 invert mr-1'}/>
                            <span className={'mr-2'}>Zapisz</span>
                        </div>
                    ) : (
                        <>
                            <div id={'download-button'}
                                 className={'flex flex-row actions-color rounded-full justify-center items-center mr-3'}>
                                <Icons.download
                                    className={'w-6 h-6 brightness-0 invert mr-1'}/>
                                <span className={'mr-2'}>Pobierz</span>
                            </div>
                            <div id={'clip-button'}
                                 className={'flex flex-row actions-color rounded-full justify-center items-center mr-3'}>
                                <Icons.scissors
                                    className={'w-6 h-6 brightness-0 invert mr-1'}/>
                                <span className={'mr-2'}>Klip</span>
                            </div>
                        </>
                    )}
                    <div id={'spec-button'}
                         className={'actions-color h-full flex justify-center items-center rounded-full hover:cursor-not-allowed'}>
                        <Icons.three_dots
                            className={'w-6 h-7 brightness-0 invert'}/>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default TopRow