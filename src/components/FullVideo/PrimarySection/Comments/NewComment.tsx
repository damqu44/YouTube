import Image from "next/image";
import {Icons} from "@/components/icons";
import React, {useEffect, useState} from "react";
import {CommentItem, UserItem, VideoItem} from "@/lib/types";
import {User as FirebaseUser} from "@firebase/auth";
import {useCommentsContext} from "@/contexts/CommentsContext";
import {signInWithGoogle} from "@/lib/firebase/auth";
import {updateDoc} from "@firebase/firestore";

interface NewCommentProps {
    video: VideoItem
    parentId?: string
    onClose?: () => void
    onEditClose?: () => void
    user: FirebaseUser | null
    editMode?: boolean
    comment?: CommentItem
    author?: UserItem
}

const NewComment: React.FC<NewCommentProps> = ({
                                                   video,
                                                   parentId,
                                                   onClose,
                                                   user,
                                                   editMode,
                                                   comment,
                                                   onEditClose,
                                                   author
                                               }) => {
    const [commentValue, setCommentValue] = useState<string>('')
    const [isAddSectionOpen, setIsAddSectionOpen] = useState<boolean>(false)
    const {setComments, comments} = useCommentsContext()
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        if (comment && comment.type === 'reply') {
            setCommentValue(`@${author?.userData.displayName}`)
        }
    }, []);

    useEffect(() => {
        document.body.classList.toggle('loading', isLoading);
    }, [isLoading])

    const makeApiCall = async (action: string) => {
        setIsLoading(true)
        try {
            const response = await fetch(`/api/comments/${action}`, {
                method: 'POST',
                body: JSON.stringify({
                    video: video,
                    user: user,
                    comment: comment,
                    comments: comments,
                    commentValue: commentValue,
                    parentId: parentId
                }),
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

    const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
        if (commentValue.length === 0 || commentValue.length > 1500) return

        try {
            if (editMode) {
                const response = await makeApiCall('edit-comment')
                if (response.updatedComment) {
                    const foundCommentIndex = comments.findIndex((com: CommentItem) => com.id === comment?.id);
                    setComments(prevComments => {
                        const updatedComments = [...prevComments]
                        updatedComments[foundCommentIndex] = response.updatedComment
                        return updatedComments
                    })
                } else if (response.updatedReply) {
                    const foundCommentIndex = comments.findIndex((com: CommentItem) => com.id === comment?.comment_id);
                    setComments(prevComments => {
                        const updatedComments = [...prevComments]
                        updatedComments[foundCommentIndex] = response.updatedReply
                        return updatedComments
                    })
                }
                if (onEditClose) onEditClose()
            } else {
                const response = await makeApiCall('add-comment')
                const foundCommentIndex = comments.findIndex((com: CommentItem) => com.id === comment?.id ? comment.id : comment?.comment_id);
                if (response.updatedComments) {
                    setComments(response.updatedComments)
                } else if (response.updatedComment) {
                    setComments(prevComments => {
                        const updatedComments = [...prevComments]
                        updatedComments[foundCommentIndex] = response.updatedComment
                        return updatedComments
                    })
                }
                if (onClose) onClose()
            }
            setCommentValue('')
            setIsAddSectionOpen(false)
        } catch (error) {
            console.error('Error occurred:', error)
        }
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCommentValue(event.target.value);
    }

    const handleAddSectionOpen = async () => {
        if (!user?.email) {
            await signInWithGoogle()
            return
        } else {
            setIsAddSectionOpen(true)
        }
    }

    return (
        <div
            className={'w-full flex flex-row'}>
            <div
                className={`${editMode ? 'hidden' : 'flex'} flex-row pr-3`}>
                {user?.photoURL ? (
                    <Image src={user.photoURL} alt={'profile image'} width={40} height={40}
                           className={`${comment && comment.type === 'reply' ? 'w-7 h-7' : 'h-10 w-10'} rounded-full cursor-pointer`}/>
                ) : (
                    <Icons.profile
                        className={`${comment && comment.type === 'reply' ? 'w-7 h-7' : 'h-10 w-10'} rounded-full cursor-pointer`}/>
                )}
            </div>
            <div className={'flex-grow flex flex-col pr-5'}>
                <div
                    className={'w-full'}>
                    <input
                        onClick={handleAddSectionOpen}
                        onChange={handleInputChange} value={commentValue}
                        type={'text'} placeholder={'Dodaj komentarz'}
                        className={'w-full placeholder-input'}/>
                </div>
                <div className={'flex w-full justify-between items-center mt-1'}>
                    {editMode || isAddSectionOpen && !comment?.id && !comment?.comment_id || comment?.id || comment?.comment_id ? (
                        <>
                            <div className={'flex justify-start items-center text-red-500 text-sm'}>
                                <div
                                    className={'flex justify-center items-center h-10 w-10 hover:bg-primary rounded-full cursor-pointer mr-2'}>
                                    <Icons.face className={'w-6 h-6 invert brightness-100'}/>
                                </div>
                            </div>
                            <div
                                className={'flex flex-row justify-end items-center text-sm'}>
                                <div
                                    onClick={editMode ? onEditClose : comment && comment.id || comment?.comment_id ? onClose : () => setIsAddSectionOpen(false)}

                                    className={'mr-5 cursor-pointer rounded-3xl font-bold px-4 py-2 hover:bg-primary'}>Anuluj
                                </div>
                                <button
                                    onClick={handleSubmit}
                                    className={`${commentValue.length === 0 || commentValue.length > 1500 ? 'text-gray-500 bg-primary cursor-default' : ' bg-myblue text-black/90 cursor-pointer hover:bg-[#4EACFFFF]'} px-4 py-2 rounded-3xl font-bold  text-sm`}>
                                    {editMode ? 'Zapisz' : 'Skomentuj'}
                                </button>
                            </div>
                        </>
                    ) : null}
                </div>
            </div>
        </div>
    )
}

export default NewComment