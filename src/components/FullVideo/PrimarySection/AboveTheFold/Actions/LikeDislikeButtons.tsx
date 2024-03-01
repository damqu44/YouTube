import '../../../FullVideo.css'
import React, {useEffect, useState} from "react";
import LoginButton from "@/components/auth/login-button";
import Modal from "./Modal";
import {Icons} from "@/components/icons";
import {UserItem, VideoItem} from "@/lib/types";

interface LikeDislikeButtonProps {
    video: VideoItem;
    user: UserItem | null;
}

const LikeDislikeButton: React.FC<LikeDislikeButtonProps> = ({video, user}) => {
    const userEmail = user?.userData.email
    const [likesAmount, setLikesAmount] = useState<number>(video.likes.length)
    const [like, setLike] = useState<boolean>(false)
    const [disLike, setDisLike] = useState<boolean>(false)
    const [isLikeModalOpen, setIsLikeModalOpen] = useState<boolean>(false)
    const [isDisLikeModalOpen, setIsDisLikeModalOpen] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        setLike(video.likes.includes(userEmail as string))
        setDisLike(video.disLikes.includes(userEmail as string))
    }, [user]);

    const makeApiCall = async (action: string) => {
        setIsLoading(true)
        try {
            const response = await fetch('/api/video/toggle-like-dislike-video', {
                method: 'POST',
                body: JSON.stringify({user: user, videoId: video.id, action: action}),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            setIsLoading(false)
            return response.json()
        } catch (error) {
            setIsLoading(false)
            throw new Error('Error occurred:', error as Error)
        }
    }

    const handleToggleLikeDisLikeComment = async (action: string) => {
        if (!userEmail) {
            if (action === 'like') {
                setIsLikeModalOpen(true)
                setIsDisLikeModalOpen(false)
            } else if (action === 'dislike') {
                setIsDisLikeModalOpen(true)
                setIsLikeModalOpen(false)
            }
            return
        }

        try {
            const response = await makeApiCall(action)
            if (response.updatedVideo) {
                const video = response.updatedVideo as VideoItem
                if (video.likes.includes(userEmail)) {
                    setLike(true)
                    setDisLike(false)
                } else if (video.disLikes.includes(userEmail)) {
                    setLike(false)
                    setDisLike(true)
                } else {
                    setLike(false)
                    setDisLike(false)
                }
                setLikesAmount(video.likes.length)
            }
        } catch (error) {
            console.error('Error occurred:', error);
        }
    }

    const handleModalClose = () => {
        setIsLikeModalOpen(false);
        setIsDisLikeModalOpen(false);
    }

    const styles = 'absolute min-w-[400px] min-h-[174px] bg-darkgray z-[9] flex-col top-full left-0 rounded-md'
    return (
        <>
            <div
                onClick={() => handleToggleLikeDisLikeComment('like')}
                className={'action-button flex rounded-l-full border-right'}>
                {!like ? (
                    <Icons.like className={'w-6 h-6 brightness-0 invert mr-3 transition-all'}/>
                ) : (
                    <Icons.like_filled className={'w-6 h-6 brightness-0 invert mr-3 transition-all'}/>
                )}
                <span className={'mr-4'}>{likesAmount}</span>
                <Modal isOpen={isLikeModalOpen} onClose={handleModalClose} styles={styles}>
                    <span
                        className={'px-5 pt-5 text-base'}>Podoba Ci się ten film?</span>
                    <span className={'px-5 pt-3 text-sm text-secondary'}>Zaloguj się, żeby Twoja opinia została wzięta pod uwagę.</span>
                    <div className={'px-5 pt-10 pb-5'}><LoginButton/></div>
                </Modal>
            </div>
            <div onClick={() => handleToggleLikeDisLikeComment('dislike')}
                 className={'action-button rounded-r-full mr-2 border-left'}>
                {!disLike ? (
                    <Icons.dislike className={'w-6 h-6 brightness-0 invert ml-2 mr-1'}/>
                ) : (
                    <Icons.dislike_filled className={'w-6 h-6 brightness-0 invert ml-2 mr-1'}/>
                )}
                <Modal isOpen={isDisLikeModalOpen} onClose={handleModalClose} styles={styles}>
                    <span
                        className={'px-5 pt-5 text-base'}>Nie podoba Ci się ten film?</span>
                    <span className={'px-5 pt-3 text-sm text-secondary'}>Zaloguj się, żeby Twoja opinia została wzięta pod uwagę.</span>
                    <div className={'px-5 pt-10 pb-5'}><LoginButton/></div>
                </Modal>
            </div>
        </>
    )
}

export default LikeDislikeButton;