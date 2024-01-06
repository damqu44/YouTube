import React from "react";
import AboveTheFold from "@/components/FullVideo/PrimarySection/AboveTheFold/AboveTheFold";
import Comments from "@/components/FullVideo/PrimarySection/Comments/Comments";

type VideoProps = {
    _id: string;
    title: string;
    channel: string;
    subscriptions: string;
    likes: string;
    views: string;
    date: string;
    thumbnail: string;
    url_id: string;
    description: string;
    avatar_link: string;
    channelId: string;
};

const PrimarySection: React.FC<VideoProps> = (props) => {

    return (
        <>
            <div id={'primary'} className={'ml-20 mr-6 w-3/4 min-h-screen'}>
                <div id={'player'} className={'h-full'}>
                    <div id={'aspect-content'} className={'h-full'}>
                        <iframe
                            src={`https://www.youtube.com/embed/${props.url_id}?autoplay=1`}
                            title={props.title}
                            className={'w-full rounded-xl'}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
                <div id={'below'} className={'flex flex-col w-full'}>
                    <AboveTheFold _id={props._id} title={props.title} channel={props.channel}
                                  subscriptions={props.subscriptions} likes={props.likes} views={props.views}
                                  date={props.date} description={props.description} avatar_link={props.avatar_link}
                                  channelId={props.channelId}/>
                    <Comments/>
                </div>
            </div>
        </>
    )
}

export default PrimarySection