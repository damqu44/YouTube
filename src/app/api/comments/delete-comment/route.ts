import {deleteDoc, doc} from "@firebase/firestore";
import {db} from "@/lib/firebase/firebase";
import {collection} from "firebase/firestore";
import getComments from "@/lib/firebase/utils/getComments";
import getComment from "@/lib/firebase/utils/getComment";

export async function POST(req: Request) {
    const body = await req.json()
    const {comment, user, video} = body

    const videoRef = doc(db, 'videos', video.id);
    const commentsRef = collection(videoRef, 'comments')

    try {
        if (comment.author === user.email) {
            if (comment.type === 'comment') {
                const commentRef = doc(commentsRef, comment.id)
                await deleteDoc(commentRef)
                const updatedComments = await getComments(video.id)
                console.log(video.id, updatedComments)
                return new Response(JSON.stringify({updatedComments}), {
                    status: 200,
                    headers: {'Content-Type': 'application/json'}
                })

            } else if (comment.type === 'reply') {
                const commentRef = doc(commentsRef, comment.comment_id)
                const repliesRef = collection(commentRef, 'replies')
                const replyRef = doc(repliesRef, comment.reply_id)

                await deleteDoc(replyRef)
                const updatedComment = await getComment(video.id, comment.comment_id, true)

                return new Response(JSON.stringify({updatedComment}), {
                    status: 200,
                    headers: {'Content-Type': 'application/json'}
                })

            } else {
                return new Response(JSON.stringify({error: 'Video data not found'}), {
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
    } catch (error) {
        return new Response(JSON.stringify({error: error}), {
            status: 500,
            headers: {'Content-Type': 'application/json'}
        })
    }
}