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

        const replyData = await getDoc(replyRef)
        const replyDoc = replyData.data() as CommentItem

        if (withId) {
            return {
                reply_id: replyId,
                comment_id: commentId,
                ...replyDoc
            }
        } else {
            return {
                ...replyDoc
            }
        }

    } catch (error) {
        console.error("Error fetching comment:", error);
        throw error;
    }
}

export default getReply