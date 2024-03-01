'use client'
import React from "react";
import {CommentItem, UserItem, VideoItem} from "@/lib/types";
import Comment from "@/components/FullVideo/PrimarySection/Comments/Comment";
import {User as FirebaseUser} from "@firebase/auth";


type VideoProps = {
    video: VideoItem
    user: UserItem | null
}

const Comments: React.FC<VideoProps> = ({video, user}) => {
    return (
        <div
            className={'mt-3 w-full'}>
            <div
                className={'w-full'}>
                {video.comments.map((comment: CommentItem) => (
                    <Comment key={comment.id} video={video} comment={comment} user={user}/>
                ))}
            </div>
        </div>
    )
}

export default Comments