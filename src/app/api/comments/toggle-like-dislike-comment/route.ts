import {doc, updateDoc} from "@firebase/firestore";
import {db} from "@/lib/firebase/firebase";
import {CommentItem} from "@/lib/types";
import getComment from "@/lib/firebase/utils/getComment";
import {collection} from "firebase/firestore";
import getReply from "@/lib/firebase/utils/getReply";


export async function POST(req: Request) {
    const body = await req.json()
    const {video, comment, user, action} = body
    const videoRef = doc(db, "videos", video.id)
    const commentsRef = collection(videoRef, 'comments')

    try {
        if (user.email) {
            let updatedLikes: string[]
            let updatedDislikes: string[]
            let commentToInteract: CommentItem | null

            if (comment.type === 'comment') {
                commentToInteract = await getComment(video.id, comment.id, false)
            } else if (comment.type === 'reply') {
                commentToInteract = await getReply(video.id, comment.comment_id, comment.reply_id, false)
            } else return

            if (commentToInteract) {
                updatedLikes = commentToInteract.likes
                updatedDislikes = commentToInteract.disLikes

                if (action === 'like') {
                    const isUserLikedComment = commentToInteract.likes.includes(user.email)

                    if (!isUserLikedComment) {
                        updatedLikes.push(user.email)
                    } else {
                        updatedLikes = updatedLikes.filter(email => email !== user.email);
                    }
                    updatedDislikes = updatedDislikes.filter(email => email !== user.email);

                } else if (action === 'dislike') {
                    const isUserDisLikedComment = commentToInteract.disLikes.includes(user.email)

                    if (!isUserDisLikedComment) {
                        updatedDislikes.push(user.email);
                    } else {
                        updatedDislikes = updatedDislikes.filter(email => email !== user.email);
                    }
                    updatedLikes = updatedLikes.filter(email => email !== user.email);
                }

                const commentToFetch = {
                    ...commentToInteract,
                    likes: updatedLikes,
                    disLikes: updatedDislikes,
                }

                if (comment.type === 'comment') {
                    const commentRef = doc(commentsRef, comment.id)
                    await updateDoc(commentRef, commentToFetch)
                } else if (comment.type === 'reply') {
                    const commentRef = doc(commentsRef, comment.comment_id)
                    const repliesRef = collection(commentRef, 'replies')
                    const replyRef = doc(repliesRef, comment.reply_id)
                    await updateDoc(replyRef, commentToFetch)
                } else return

                const updatedComment = await getComment(video.id, comment.id ? comment.id : comment.comment_id, true)
                return new Response(JSON.stringify({updatedComment}), {
                    status: 200,
                    headers: {'Content-Type': 'application/json'}
                })
            } else {
                return new Response(JSON.stringify({error: 'Not Found'}), {
                    status: 404,
                    headers: {'Content-Type': 'application/json'}
                })
            }
        } else {
            return new Response(JSON.stringify({error: 'Unauthorized'}), {
                status: 401,
                headers: {'Content-Type': 'application/json'}
            })
        }
    } catch
        (error) {
        return new Response(JSON.stringify({error: error}), {
            status: 500,
            headers: {'Content-Type': 'application/json'}
        })
    }

}