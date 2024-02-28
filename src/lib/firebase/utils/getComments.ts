import { doc, collection, getDocs, DocumentSnapshot, QuerySnapshot, DocumentReference } from "firebase/firestore";
import {db} from "@/lib/firebase/firebase";
import { CommentItem } from "@/lib/types";

async function getComments(videoId: string): Promise<CommentItem[]> {
    const videoRef = doc(db, 'videos', videoId)
    const commentsRef = collection(videoRef, 'comments')

    try {
        const commentsData: QuerySnapshot = await getDocs(commentsRef)
        const commentsWithReplies: CommentItem[] = []

        await Promise.all(commentsData.docs.map(async (commentDoc) => {
            const commentData = commentDoc.data() as CommentItem
            const repliesRef = collection(commentDoc.ref, 'replies')
            const repliesData: QuerySnapshot = await getDocs(repliesRef)
            const replies: CommentItem[] = repliesData.docs.map((replyDoc) => ({
                reply_id: replyDoc.id,
                comment_id: commentDoc.id,
                ...replyDoc.data() as CommentItem
            }))
            commentsWithReplies.push({
                ...commentData,
                id: commentDoc.id,
                replies: replies
            })
        }))

        return commentsWithReplies;
    } catch (error) {
        console.error("Error fetching comments:", error)
        throw error;
    }
}

export default getComments