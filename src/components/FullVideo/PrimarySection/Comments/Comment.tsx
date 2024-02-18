'use client'
import Image from "next/image";
import {Icons} from "@/components/icons";
import React, {useEffect, useState} from "react";
import {CommentItem, VideoItem, UserItem} from "@/lib/types";
import {doc, getDoc, updateDoc} from "@firebase/firestore";
import {db} from "@/lib/firebase/firebase";
import useFormatDate from "@/hooks/formats/useFormatDate";
import Link from "next/link";
import NewComment from "@/components/FullVideo/PrimarySection/Comments/NewComment";
import {User as FirebaseUser} from "@firebase/auth";
import Modal from "@/components/FullVideo/PrimarySection/AboveTheFold/Actions/Modal";
import {useCommentsContext} from "@/contexts/CommentsContext";
import {signInWithGoogle} from "@/lib/firebase/auth";

interface CommentProps {
    video: VideoItem
    comment: CommentItem
    user: FirebaseUser | null
}

const Comment: React.FC<CommentProps> = ({video, comment, user}) => {
    const [author, setAuthor] = useState<UserItem>()
    const {comments, setComments} = useCommentsContext()
    const [isAddSectionOpen, setIsAddSectionOpen] = useState<boolean>(false)
    const [isRepliesShow, setIsRepliesShow] = useState<boolean>(false)
    const [hoveredIndex, setHoveredIndex] = useState<string | null>(null)
    const [isSettingsModalOpen, setIsSettingsModalOpen] = useState<boolean>(false)
    const [isInEditMode, setIsInEditMode] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const userRef = doc(db, 'users', comment.author)
    const videoRef = doc(db, "videos", video.id);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userSnap = await getDoc(userRef)
                const userData = userSnap.data() as UserItem
                if (userData) {
                    setAuthor(userData)
                }
            } catch (e) {
                console.error("Error getting cached document:", e);
            }
        }
        fetchUserData()
    }, [])

    useEffect(() => {
        document.body.classList.toggle('loading', isLoading);
    }, [isLoading])

    const toggleLikeDislikeComment = async (action: string) => {
        if (!user?.email) {
            await signInWithGoogle()
            return
        }

        try {
            const videoSnap = await getDoc(videoRef);
            if (videoSnap.exists()) {
                const videoData = videoSnap.data();

                let foundComment: CommentItem
                let foundReply: CommentItem | undefined
                let foundCommentIndex: number
                let foundReplyIndex: number | undefined
                let updatedLikes: string[]
                let updatedDislikes: string[]
                let isUserLikedComment: boolean
                let isUserDisLikedComment: boolean

                if (comment.replies) {
                    foundComment = videoData.comments.find((com: CommentItem) => com.id === comment.id)
                    foundCommentIndex = videoData.comments.findIndex((com: CommentItem) => com.id === comment.id)
                    updatedLikes = [...foundComment.likes];
                    updatedDislikes = [...foundComment.disLikes];
                    isUserLikedComment = foundComment.likes.includes(user.email)
                    isUserDisLikedComment = foundComment.disLikes.includes(user.email)
                } else {
                    foundComment = videoData.comments.find((com: CommentItem) => com.replies?.find((com: CommentItem) => com.id === comment.id))
                    foundCommentIndex = videoData.comments.findIndex((com: CommentItem) => com.replies?.find((com: CommentItem) => com.id === comment.id));
                    foundReply = foundComment.replies?.find((com: CommentItem) => com.id === comment.id)
                    foundReplyIndex = foundComment.replies?.findIndex((com: CommentItem) => com.id === comment.id)
                    if (!foundReply || foundReplyIndex === undefined) return
                    updatedLikes = [...foundReply.likes]
                    updatedDislikes = [...foundReply.disLikes]
                    isUserLikedComment = foundReply.likes.includes(user.email)
                    isUserDisLikedComment = foundReply.disLikes.includes(user.email)
                }

                if (foundCommentIndex !== -1) {
                    let updatedComments = [...videoData.comments];

                    if (action === "like") {
                        if (!isUserLikedComment) {
                            updatedLikes = updatedLikes.filter(email => email !== user.email);
                            updatedLikes.push(user.email);
                        } else {
                            updatedLikes = updatedLikes.filter(email => email !== user.email);
                        }
                        updatedDislikes = updatedDislikes.filter(email => email !== user.email);
                    } else if (action === "dislike") {
                        if (!isUserDisLikedComment) {
                            updatedDislikes = updatedDislikes.filter(email => email !== user.email);
                            updatedDislikes.push(user.email);
                        } else {
                            updatedDislikes = updatedDislikes.filter(email => email !== user.email);
                        }
                        updatedLikes = updatedLikes.filter(email => email !== user.email);
                    }

                    if (comment.replies) {
                        updatedComments[foundCommentIndex] = {
                            ...foundComment,
                            likes: updatedLikes,
                            disLikes: updatedDislikes
                        }
                    } else {
                        updatedComments[foundCommentIndex].replies = foundComment.replies?.map((reply: CommentItem) => {
                            if (reply.id === comment.id) {
                                return {
                                    ...reply,
                                    likes: updatedLikes,
                                    disLikes: updatedDislikes
                                }
                            }
                            return reply
                        })
                    }

                    await updateDoc(videoRef, {
                        comments: updatedComments
                    });

                    setComments(updatedComments)
                } else {
                    console.log("Wideo o podanym identyfikatorze nie istnieje.");
                }
            }
        } catch (error) {
            console.error("Błąd podczas pobierania danych wideo:", error);
        }
    }

    const makeApiCall = async () => {
        setIsLoading(true)
        try {
            const response = await fetch('/api/comments/delete-comment', {
                method: 'POST',
                body: JSON.stringify({video: video, user: user, comment: comment}),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            setIsLoading(false)
            return response.json();
        } catch (error) {
            setIsLoading(false)
            throw new Error('Błąd podczas wywoływania API');
        }
    }

    const handleDeleteComment = async () => {
        if (!user?.email) {
            return;
        }

        try {
            const response = await makeApiCall()
            if (response.updatedComments) {
                setComments(response.updatedComments)
            }
        } catch (error) {
            console.error('Błąd podczas usuwania komentarza:', error);
        }
    }

    const handleToggleAddComment = async () => {
        if (!user?.email) {
            await signInWithGoogle()
            return
        }
        setIsAddSectionOpen(!isAddSectionOpen);
    }

    const handleModalToggle = () => {
        setIsSettingsModalOpen(prevState => !prevState);
    }

    const handleEditClose = () => {
        setIsInEditMode(false)
    }

    return (
        <div
            className={`${comment.replies ? 'grid grid-cols-[40px_auto]' : 'grid grid-cols-[32px_auto]'} relative w-full gap-3 mb-2`}
            onMouseEnter={() => setHoveredIndex(comment.id)}
            onMouseLeave={() => setHoveredIndex(null)}
        >
            <Link href={`/${author?.userData.displayName}`}
                  className={`w-full`}>
                {author?.userData.photoURL ? (
                    <Image
                        src={author?.userData.photoURL}
                        alt={'profile image'} width={40} height={40}
                        className={`${comment.replies ? 'h-10 w-10' : 'w-8 h-8'} rounded-full cursor-pointer`}/>
                ) : (
                    <Icons.profile
                        className={`${comment.replies ? 'h-10 w-10' : 'w-8 h-8'} rounded-full cursor-pointer`}/>
                )}
            </Link>
            <div
                className={'max-w-full flex flex-col justify-start items-start'}>
                {!isInEditMode ? (
                    <>
                        <div
                            className={'flex flex-row justify-start items-center mb-1'}>
                            <Link href={`/${author?.userData.displayName}`}
                                  className={'text-[13px] mr-1'}>{author?.userData.displayName}</Link>
                            <div
                                className={'text-[12px] text-secondary'}>
                                {useFormatDate(comment.timeAdded)}
                                {comment.isEdited ? ' (edytowany)' : null}
                            </div>
                        </div>
                        <div
                            className={'max-w-[90%] mb-1 text-[14px] break-all overflow-hidden'}>
                            {comment.value}
                        </div>
                        <div
                            className={'flex flex-row justify-start items-center mb-1'}>
                            <div
                                className={'flex justify-center items-center'}>
                                <div
                                    onClick={() => toggleLikeDislikeComment('like')}
                                    className={'cursor-pointer mr-0.5 rounded-full w-8 h-8 hover:bg-primary flex justify-center items-center'}>
                                    {user?.email && comment.likes.includes(user.email) ? (
                                        <Icons.like_filled
                                            className={'brightness-0 invert w-6 h-6 '}/>
                                    ) : (
                                        <Icons.like
                                            className={'brightness-0 invert w-6 h-6 '}/>
                                    )}
                                </div>
                                <span
                                    className={'mr-1 text-[12px]'}>{comment.likes.length > 0 ? comment.likes.length : null}</span>
                            </div>
                            <div
                                onClick={() => toggleLikeDislikeComment('dislike')}
                                className={'cursor-pointer rounded-full w-8 h-8 hover:bg-primary flex justify-center items-center mr-1'}>
                                {user?.email && comment.disLikes.includes(user.email) ? (
                                    <Icons.dislike_filled
                                        className={'brightness-0 invert w-6 h-6 '}/>
                                ) : (
                                    <Icons.dislike
                                        className={'brightness-0 invert w-6 h-6 '}/>
                                )}
                            </div>
                            <div
                                onClick={handleToggleAddComment}
                                className={'text-[12px] cursor-pointer hover:bg-primary rounded-full h-8 px-2 flex justify-center items-center'}>
                                Odpowiedz
                            </div>
                        </div>
                        <div className={'flex w-full mb-1'}>
                            {isAddSectionOpen &&
                                <NewComment video={video} parentId={comment.id} onClose={handleToggleAddComment}
                                            user={user} comment={comment} author={author}/>}
                        </div>
                    </>
                ) : <NewComment video={video} user={user} onClose={handleToggleAddComment} onEditClose={handleEditClose}
                                editMode={true}
                                comment={comment}/>}
                {comment.replies && comment?.replies.length > 0 ? (
                    <button
                        onClick={() => {
                            setIsRepliesShow(prevState => !prevState)
                        }}
                        className={'flex h-9 hover:bg-[#263850] justify-center items-center px-4 mb-2 rounded-full cursor-pointer'}>
                        <Icons.triangle
                            className={`${isRepliesShow ? 'rotate-0' : 'rotate-180'} w-6 h-6 fill-myblue`}/>
                        <div
                            className={'text-[14px] text-myblue'}>{`${comment.replies.length} ${comment.replies.length === 1 ? 'odpowiedź' : 'odpowiedzi'}`}</div>
                    </button>
                ) : null}
                {isRepliesShow ? (
                    <>
                        {comment.replies && comment.replies.map((reply: CommentItem) => (
                            <Comment key={reply.id} video={video} comment={reply} user={user}/>
                        ))}
                    </>
                ) : null}
            </div>
            {hoveredIndex === comment.id && (
                <button
                    onClick={handleModalToggle}
                    className={'absolute right-0 top-0 w-10 h-10 flex justify-center items-center rounded-full active:bg-primary'}>
                    <Icons.three_dots className={'w-6 h-6 rotate-90 fill-white'}/>
                </button>
            )}
            <Modal
                styles={'absolute min-w-[50px] bg-darkgray z-[9] flex-col top-[40px] right-0 py-1 rounded-md'}
                isOpen={isSettingsModalOpen} onClose={handleModalToggle}>
                {user?.email && author?.userData.email === user.email ? (
                    <>
                        <div
                            onClick={() => setIsInEditMode(prevState => !prevState)}
                            className={'flex justify-start items-center hover:bg-primary py-2 px-4 cursor-pointer'}>
                            <Icons.pen
                                className={'w-6 h-6 brightness-0 invert mr-1'}/>
                            <span className={'mr-2'}>Edytuj</span>
                        </div>
                        <div
                            onClick={handleDeleteComment}
                            className={'flex justify-start items-center hover:bg-primary py-2 px-4 cursor-pointer'}>
                            <Icons.trash_bin
                                className={'w-6 h-6 brightness-0 invert mr-1'}/>
                            <span className={'mr-2'}>Usuń</span>
                        </div>
                    </>
                ) : (
                    <div
                        className={'flex justify-start items-center hover:bg-primary py-2 px-4 hover:cursor-not-allowed'}>
                        <Icons.feedback
                            className={'w-6 h-6 brightness-0 invert mr-1'}/>
                        <span className={'mr-2'}>Zgłoś</span>
                    </div>
                )}
            </Modal>
        </div>
    )
}

export default Comment