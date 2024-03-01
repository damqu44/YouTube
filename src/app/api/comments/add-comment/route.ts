import {doc} from "@firebase/firestore";
import {db} from "@/lib/firebase/firebase";
import {addDoc, collection} from "firebase/firestore";
import getComments from "@/lib/firebase/utils/getComments";
import getComment from "@/lib/firebase/utils/getComment";

export async function POST(req: Request) {
    const body = await req.json()
    const {video, comment, commentValue, user} = body
    const videoRef = doc(db, "videos", video.id);
    const commentsRef = collection(videoRef, 'comments')

    const createNewCommentObject = (commentValue: string, type: string) => {
        return {
            value: commentValue,
            author: user!.userData.email!,
            isEdited: false,
            timeAdded: new Date().toISOString(),
            likes: [],
            disLikes: [],
            type: type,
        }
    }

    try {
        if (user.userData.email) {
            if (!comment) {
                const newComment = createNewCommentObject(commentValue, 'comment')
                await addDoc(commentsRef, newComment)
                const updatedComments = await getComments(video.id)

                return new Response(JSON.stringify({updatedComments}), {
                    status: 200,
                    headers: {'Content-Type': 'application/json'}
                })
            } else {
                const newReply = createNewCommentObject(commentValue, 'reply')
                const commentRef = doc(commentsRef, comment.id ? comment.id : comment.comment_id)
                const repliesRef = collection(commentRef, 'replies')
                await addDoc(repliesRef, newReply)
                const updatedComment = await getComment(video.id, comment.id ? comment.id : comment.comment_id, true)
                return new Response(JSON.stringify({updatedComment}), {
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
    } catch (error) {
        return new Response(JSON.stringify({error: error}), {
            status: 500,
            headers: {'Content-Type': 'application/json'}
        })
    }

}