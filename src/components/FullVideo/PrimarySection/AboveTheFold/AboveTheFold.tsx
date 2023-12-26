import React from "react";
import TopRow from "@/components/FullVideo/PrimarySection/AboveTheFold/TopRow";
import Description from "@/components/FullVideo/PrimarySection/AboveTheFold/Description";

type VideoProps = {
    _id: string;
    title: string;
    channel: string;
    subscriptions: string;
    likes: string;
    views: string;
    date: string;
    description: string;
    avatar_link: string;
    channelId: string;
};
const AboveTheFold: React.FC<VideoProps> = (props) => {
    return (
        <div id={'above-the-fold'} className={'flex flex-col'}>
            <div id={'title'} className={'text-xl font-bold h-9 pt-3 overflow-hidden'}>
                {props.title}
            </div>
            <TopRow _id={props._id} channel={props.channel} subscriptions={props.subscriptions}
                    likes={props.likes} avatar_link={props.avatar_link} channelId={props.channelId}/>
            <Description _id={props._id} views={props.views} date={props.date} channel={props.channel}
                         subscriptions={props.subscriptions} description={props.description}
                         avatar_link={props.avatar_link} channelId={props.channelId}/>
        </div>
    )
}

export default AboveTheFold