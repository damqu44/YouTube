import React, {useEffect, useState} from "react";
import {arrayRemove, arrayUnion, doc, updateDoc} from "@firebase/firestore";
import {db} from "@/lib/firebase/firebase";
import {UserAuth} from "@/contexts/AuthContext";
import {isAuthenticated} from "@/utils/Auth";
import {Icons} from "@/components/icons";
import LoginButton from "@/components/auth/login-button";
import Modal from "./Modal";
import {onSnapshot} from "firebase/firestore";

interface LikeDislikeButtonProps {
    _id: string;
    likes: string;
}

interface VideoInteractions {
    id: string;
    like: boolean;
    disLike: boolean;
}

const LikeDislikeButton: React.FC<LikeDislikeButtonProps> = ({_id, likes}) => {
    const isAuth = isAuthenticated();
    const {user} = UserAuth();
    const userEmail = user?.email;
    const userRef = userEmail ? doc(db, 'users', userEmail) : null;
    const [videosInteractions, setVideosInteractions] = useState<VideoInteractions[]>([])
    const [like, setLike] = useState<boolean>(false)
    const [disLike, setDisLike] = useState<boolean>(false)
    const [isLikeModalOpen, setIsLikeModalOpen] = useState<boolean>(false);
    const [isDisLikeModalOpen, setIsDisLikeModalOpen] = useState<boolean>(false);

    useEffect(() => {
        onSnapshot(doc(db, 'users', `${userEmail}`), (doc) => {
            setVideosInteractions(doc.data()?.videosInteractions)
        })
    }, [userEmail])


    //check is video liked
    useEffect(() => {
        const checkVideosInteractions = async () => {
            if (isAuth && userRef) {
                const existingIndex = videosInteractions?.findIndex(video => video.id === _id);
                if (existingIndex !== -1) {
                    const foundVideo = videosInteractions?.find(video => video.id === _id)
                    if (foundVideo) {
                        setLike(foundVideo?.like === true);
                        setDisLike(foundVideo?.disLike === true);
                    }
                }
            }
        }
        checkVideosInteractions();
    }, [isAuth, userRef, _id])


    const changeVideosInteractions = async (like: boolean, disLike: boolean) => {
        if (isAuth && userRef && videosInteractions) {
            try {
                const existingIndex = videosInteractions.findIndex(video => video.id === _id);
                setLike(like)
                setDisLike(disLike)
                if (existingIndex !== -1) {
                    await updateDoc(userRef, {
                        videosInteractions: arrayRemove(videosInteractions[existingIndex]),
                    });
                }

                await updateDoc(userRef, {
                    videosInteractions: arrayUnion({
                        id: _id,
                        like: like,
                        disLike: disLike,
                    }),
                })
            } catch (err) {
                console.error(err)
            }
        } else {
            if (like) {
                setIsLikeModalOpen(true)
                setIsDisLikeModalOpen(false)

            } else if (disLike) {
                setIsDisLikeModalOpen(true)
                setIsLikeModalOpen(false)
            }
        }
    }

    const handleModalClose = () => {
        setIsLikeModalOpen(false);
        setIsDisLikeModalOpen(false);
    };


    const handleClickToDisLikeVideo = async () => {
        await changeVideosInteractions(false, true)
    }
    const handleClickToUnDisLikeVideo = async () => {
        await changeVideosInteractions(false, false)
    }
    const handleClickToLikeVideo = async () => {
        await changeVideosInteractions(true, false)
    }
    const handleClickToUnLikeVideo = async () => {
        await changeVideosInteractions(false, false)
    }


    return (
        <div
            className={`relative flex flex-row justify-center items-center`}>
            <div onClick={!like ? handleClickToLikeVideo : handleClickToUnLikeVideo}
                 className={'relative flex flex-row actions-color rounded-l-full justify-center items-center'}>
                {!like ? (
                    <Icons.like className={'w-6 h-7 brightness-0 invert mr-3 transition-all'}/>
                ) : (
                    <Icons.like_filled className={'w-6 h-7 brightness-0 invert mr-3 transition-all'}/>
                )}
                <span className={'mr-4'}>{likes}</span>
                <Modal isOpen={isLikeModalOpen} onClose={handleModalClose}>
                    <span
                        className={'px-5 pt-5 text-base'}>Podoba Ci się ten film?</span>
                    <span className={'px-5 pt-3 text-sm text-secondary'}>Zaloguj się, żeby Twoja opinia została wzięta pod uwagę.</span>
                    <div className={'px-5 pt-10 pb-5'}><LoginButton/></div>
                </Modal>
            </div>
            <div onClick={!disLike ? handleClickToDisLikeVideo : handleClickToUnDisLikeVideo}
                 className={'relative flex flex-row actions-color rounded-r-full justify-center items-center mr-2'}>
                {!disLike ? (
                    <Icons.dislike className={'w-6 h-7 brightness-0 invert ml-2 mr-1'}/>
                ) : (
                    <Icons.dislike_filled className={'w-6 h-7 brightness-0 invert ml-2 mr-1'}/>
                )}
                <Modal isOpen={isDisLikeModalOpen} onClose={handleModalClose}>
                    <span
                        className={'px-5 pt-5 text-base'}>Nie podoba Ci się ten film?</span>
                    <span className={'px-5 pt-3 text-sm text-secondary'}>Zaloguj się, żeby Twoja opinia została wzięta pod uwagę.</span>
                    <div className={'px-5 pt-10 pb-5'}><LoginButton/></div>
                </Modal>
            </div>

        </div>
    );
};

export default LikeDislikeButton;