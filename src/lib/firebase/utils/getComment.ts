import {CommentItem} from "@/lib/types";
import {doc, getDoc} from "@firebase/firestore";
import {db} from "@/lib/firebase/firebase";
import {collection, DocumentSnapshot, getDocs, QuerySnapshot} from "firebase/firestore";

async function getComment(videoId: string, commentId: string, withId: boolean): Promise<CommentItem | null> {
    try {
        const videoRef = doc(db, 'videos', videoId)
        const commentsRef = collection(videoRef, 'comments');
        const commentRef = doc(commentsRef, commentId);

        const commentDoc: DocumentSnapshot = await getDoc(commentRef);
        const commentData = commentDoc.data() as CommentItem

        const repliesRef = collection(commentRef, 'replies');
        const repliesData: QuerySnapshot = await getDocs(repliesRef);
        const replies: CommentItem[] = repliesData.docs.map((replyDoc) => ({
            reply_id: replyDoc.id,
            comment_id: commentDoc.id,
            ...replyDoc.data() as CommentItem
        }))

        if (withId) {
            return {
                ...commentData,
                id: commentDoc.id,
                replies: replies
            } as CommentItem
        } else {
            return {
                ...commentData
            } as CommentItem
        }

    } catch (error) {
        console.error("Error fetching comment:", error);
        throw error;
    }
}

export default getComment