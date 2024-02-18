import {doc, getDoc, updateDoc} from "@firebase/firestore";
import {CommentItem} from "@/lib/types";
import {db} from "@/lib/firebase/firebase";

export async function POST(req: Request) {
    const body = await req.json()
    const videoRef = doc(db, "videos", body.video.id);

    try {
        if (body.comment.author === body.user.email) {
            const videoSnap = await getDoc(videoRef)
            if (videoSnap.exists()) {
                const videoData = videoSnap.data()

                let updatedComments: CommentItem[] = [...videoData.comments]
                if (body.comment.replies) {
                    updatedComments = updatedComments.filter((com: CommentItem) => com.id !== body.comment.id)
                } else {
                    updatedComments = updatedComments.map((com: CommentItem) => {
                        const updatedReplies = com.replies?.filter((reply: CommentItem) => reply.id !== body.comment.id)
                        return {...com, replies: updatedReplies}
                    })
                }
                await updateDoc(videoRef, {
                    comments: updatedComments
                })

                return new Response(JSON.stringify({updatedComments}), {
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