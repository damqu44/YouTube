'use client'
import React, {useEffect, useState} from "react";
import CommentsHeader from "@/components/FullVideo/PrimarySection/Comments/CommentsHeader";
import Comments from "@/components/FullVideo/PrimarySection/Comments/Comments";
import {VideoItem} from "@/lib/types";
import {useCommentsContext} from "@/contexts/CommentsContext";
import {useAuthUser} from "@/hooks/firebase/useAuthUser";

type VideoProps = {
    video: VideoItem
};
const CommentsContainer: React.FC<VideoProps> = ({video}) => {
    const {user} = useAuthUser()
    const {comments, setComments, sortComments} = useCommentsContext()
    const [sorted, setSorted] = useState<boolean>(false);

    useEffect(() => {
        if (!sorted) {
            setComments(video.comments);
            setSorted(true);
        }
    }, []);

    useEffect(() => {
        if (sorted && user) {
            sortComments('user', user);
        } else if (sorted) {
            sortComments('popular')
        }
    }, [sorted, user]);

    return (
        <div className={'flex flex-col justify-start items-start mt-6'}>
            <CommentsHeader video={{...video, comments}} user={user}/>
            <Comments video={{...video, comments}} user={user}/>
        </div>
    )
}

export default CommentsContainer