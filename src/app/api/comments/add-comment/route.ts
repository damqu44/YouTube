import {arrayUnion, doc, getDoc, updateDoc} from "@firebase/firestore";
import {db} from "@/lib/firebase/firebase";
import {CommentItem} from "@/lib/types";
import {uuidv4} from "@firebase/util";
import {undefined} from "zod";

export async function POST(req: Request) {
    const body = await req.json()
    const {video, comment, commentValue, comments, user, parentId} = body
    const videoRef = doc(db, "videos", video.id);

    const createNewCommentObject = (commentValue: string): CommentItem => {
        const comment: CommentItem = {
            id: uuidv4(),
            value: commentValue,
            author: user!.email!,
            isEdited: false,
            timeAdded: new Date().toISOString(),
            likes: [],
            disLikes: [],
        }
        if (!parentId) {
            comment.replies = []
        }

        return comment
    }

    try {

        if (user.email) {
            let updatedComments: CommentItem[]
            let updatedReplies: CommentItem[]

            if (!parentId) {
                const newComment = createNewCommentObject(commentValue)
                await updateDoc(videoRef, {
                    comments: arrayUnion(newComment)
                })

                return new Response(JSON.stringify({newComment}), {
                    status: 200,
                    headers: {'Content-Type': 'application/json'}
                })
            } else {
                const videoSnap = await getDoc(videoRef)
                if (videoSnap.exists()) {
                    const videoData = videoSnap.data()
                    let foundComment: CommentItem | null
                    let foundCommentIndex: number

                    if (parentId && comment && comment.replies) {
                        foundComment = videoData.comments.find((com: CommentItem) => com.id === parentId)
                        foundCommentIndex = videoData.comments.findIndex((com: CommentItem) => com.id === parentId)
                    } else if (parentId) {
                        foundComment = videoData.comments.find((com: CommentItem) => com.replies?.find((com: CommentItem) => com.id === parentId))
                        foundCommentIndex = videoData.comments.findIndex((com: CommentItem) => com.replies?.find((com: CommentItem) => com.id === parentId))
                    } else {
                        foundComment = null
                        foundCommentIndex = -1
                    }

                    if (foundComment && foundComment.replies && foundCommentIndex !== -1) {
                        updatedComments = [...videoData.comments]
                        updatedReplies = [...foundComment.replies]
                        updatedReplies.push(createNewCommentObject(commentValue))
                        updatedComments[foundCommentIndex] = {
                            ...foundComment,
                            replies: updatedReplies,
                        }

                        await updateDoc(videoRef, {
                            comments: updatedComments
                        })

                        return new Response(JSON.stringify({updatedComments}), {
                            status: 200,
                            headers: {'Content-Type': 'application/json'}
                        })
                    }
                }
            }
        } else {
            return new Response(JSON.stringify({error: 'Unauthorized'}), {
                status: 401,
                headers: {'Content-Type': 'application/json'}
            })
        }
    } catch (error) {
        return new Response(JSON.stringify({error: error}), {
            status: 500,
            headers: {'Content-Type': 'application/json'}
        })
    }

}