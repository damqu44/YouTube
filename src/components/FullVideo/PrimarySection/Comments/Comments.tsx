import React from "react";
import CommentsHeader from "@/components/FullVideo/PrimarySection/Comments/CommentsHeader";
import CommentsContents from "@/components/FullVideo/PrimarySection/Comments/CommentsContents";

const Comments = () => {
    return (<div id={'comments'} className={'flex flex-col justify-start items-start mt-6'}>
        <CommentsHeader />
        <CommentsContents />
    </div>)
}

export default Comments