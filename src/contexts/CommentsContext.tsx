import {CommentItem, UserItem} from "@/lib/types";
import React, {createContext, ReactNode, useContext, useState} from "react";

interface CommentsContextType {
    comments: CommentItem[]
    setComments: React.Dispatch<React.SetStateAction<CommentItem[]>>
    sortComments: (method: string, user?: UserItem) => void
}

const CommentsContext = createContext<CommentsContextType | undefined>(undefined)

export const useCommentsContext = () => {
    const context = useContext(CommentsContext)
    if (!context) {
        throw new Error('useCommentContext must be used within a CommentProvider')
    }
    return context
}

export const CommentsProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const [comments, setComments] = useState<CommentItem[]>([])
    const sortComments = (method: string, user?: UserItem) => {
        const commentsCopy = [...comments];

        switch (method) {
            case 'popular':
                setComments(sortByPopularity(commentsCopy));
                break;
            case 'newest':
                setComments(sortByNewest(commentsCopy));
                break;
            case 'user':
                if (user) sortByUser(commentsCopy, user);
                break;
            default:
                break;
        }
    }

    const sortByPopularity = (comments: CommentItem[]) => {
        return comments.sort((a, b) => calculateLikes(b) - calculateLikes(a));
    }

    const sortByNewest = (comments: CommentItem[]) => {
        return comments.sort((a, b) => new Date(b.timeAdded).getTime() - new Date(a.timeAdded).getTime());
    }

    const sortByUser = (comments: CommentItem[], user: UserItem) => {
        const userComments = comments.filter(comment => comment.author === user.userData.email);
        const otherComments = comments.filter(comment => comment.author !== user.userData.email);

        const sortedUserComments = sortByPopularity(userComments);
        const sortedOtherComments = sortByPopularity(otherComments);

        setComments([...sortedUserComments, ...sortedOtherComments]);
    }

    const calculateLikes = (comment: CommentItem) => {
        let likes = comment.likes.length;
        if (comment.replies) {
            likes += comment.replies.reduce((total, reply) => total + reply.likes.length, 0);
        }
        return likes;
    }

    return (
        <CommentsContext.Provider value={{comments, setComments, sortComments}}>
            {children}
        </CommentsContext.Provider>
    )
}