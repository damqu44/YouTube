import {doc, updateDoc} from "@firebase/firestore";
import {db} from "@/lib/firebase/firebase";
import {CommentItem} from "@/lib/types";

export async function POST(req: Request) {
    const body = await req.json()
    const {video, comment, commentValue, comments, user } = body
    const videoRef = doc(db, "videos", video.id);


    try {
        if (comment.author === user.email) {
            let updatedComments: CommentItem[]
            if (comment && comment.replies) {
                updatedComments = comments.map((com: CommentItem) => {
                    if (comment && com.id === comment.id) {
                        return {...com, value: commentValue, isEdited: true};
                    }
                    return com
                })
            } else {
                updatedComments = comments.map((com: CommentItem) => {
                    const updatedReplies = com.replies?.map((reply: CommentItem) => {
                        if (reply.id === comment?.id) {
                            return {...reply, value: commentValue, isEdited: true};
                        } else {
                            return reply;
                        }
                    })
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
            return new Response(JSON.stringify({error: 'Unauthorized'}), {
                status: 401,
                headers: {'Content-Type': 'application/json'}
            })
        }
    } catch (error) {
        return new Response(JSON.stringify({error: error}), {
            status: 500,
            headers: {'Content-Type': 'application/json'}
        });
    }
}