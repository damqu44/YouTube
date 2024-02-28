import {doc, getDoc, updateDoc} from "@firebase/firestore";
import {db} from "@/lib/firebase/firebase";
import getComment from "@/lib/firebase/utils/getComment";
import getReply from "@/lib/firebase/utils/getReply";
import {collection} from "firebase/firestore";

export async function POST(req: Request) {
    const body = await req.json()
    const {video, comment, commentValue, user} = body
    const videoRef = doc(db, 'videos', video.id)
    const commentsRef = collection(videoRef, 'comments')


    try {
        if (comment.author === user.email) {
            if (comment.type === 'comment') {
                const commentRef = doc(commentsRef, comment.id)

                const commentToEdit = await getComment(video.id, comment.id, false)
                console.log('COMMENT TO EDIT:', commentToEdit)
                const commentToFetch = {
                    ...commentToEdit,
                    value: commentValue,
                    isEdited: true,
                }
                await updateDoc(commentRef, commentToFetch)
                const updatedComment = await getComment(video.id, comment.id, true)

                return new Response(JSON.stringify({updatedComment}), {
                    status: 200,
                    headers: {'Content-Type': 'application/json'}
                })
            } else if (comment.type === 'reply') {
                const commentRef = doc(commentsRef, comment.comment_id)
                const repliesRef = collection(commentRef, 'replies')
                const replyRef = doc(repliesRef, comment.reply_id)

                const replyToEdit = await getReply(video.id, comment.comment_id, comment.reply_id, false)
                console.log('REPLY TO EDIT:', replyToEdit)
                const replyToFetch = {
                    ...replyToEdit,
                    value: commentValue,
                    isEdited: true,

                }
                await updateDoc(replyRef, replyToFetch)
                const updatedReply = await getComment(video.id, comment.comment_id, true)
                console.log(updatedReply)

                return new Response(JSON.stringify({updatedReply}), {
                    status: 200,
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
        });
    }
}