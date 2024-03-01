import {CommentItem} from "@/lib/types";
import {doc, getDoc} from "@firebase/firestore";
import {db} from "@/lib/firebase/firebase";
import {collection} from "firebase/firestore";

async function getReply(videoId: string, commentId: string, replyId: string, withId: boolean): Promise<CommentItem | null> {
    try {
        const videoRef = doc(db, 'videos', videoId)
        const commentsRef = collection(videoRef, 'comments')
        const commentRef = doc(commentsRef, commentId)
        const repliesRef = collection(commentRef, 'replies')
        const replyRef = doc(repliesRef, replyId)

        const replyDoc = await getDoc(replyRef)
        const replyData = replyDoc.data() as CommentItem

        if (withId) {
            return {
                reply_id: replyId,
                comment_id: commentId,
                ...replyData
            }
        } else {
            return {
                ...replyData
            }
        }

    } catch (error) {
        console.error("Error fetching comment:", error);
        throw error;
    }
}

export default getReply