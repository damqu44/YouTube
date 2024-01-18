import React, {useEffect, useState} from "react";
import {arrayUnion, doc, getDoc, updateDoc} from "@firebase/firestore";
import {db} from "@/lib/firebase/firebase";
import {UserAuth} from "@/contexts/AuthContext";
import {isAuthenticated} from "@/utils/Auth";
import useSubscribedChannels from "@/hooks/firebase/useSubscribedChannels";

interface SubscribeButtonProps {
    channelId: string;

}

const SubscribeButton: React.FC<SubscribeButtonProps> = ({channelId}) => {
    const isAuth = isAuthenticated()
    const {user} = UserAuth()
    const [sub, setSub] = useState<boolean>(false)
    const {subscribedChannels} = useSubscribedChannels()

    const userEmail = user?.email;
    const userRef = userEmail ? doc(db, 'users', userEmail) : null

    //check is channel subscribed
    useEffect(() => {
        const checkSubscription = async () => {
            if (isAuth && userEmail && userRef) {
                try {
                    const docSnap = await getDoc(userRef);
                    if (docSnap.exists()) {
                        const subscriptions = docSnap.data().subscriptions || [];
                        const isSubscribed = subscriptions.some((subscription: {
                            id: string
                        }) => subscription.id === channelId);
                        setSub(isSubscribed);
                    }
                } catch (error) {
                    console.error("Błąd podczas sprawdzania subskrypcji:", error);
                }
            }
        };

        checkSubscription();
    }, [isAuth, userEmail, userRef, channelId]);

    //make channel be subscribed
    const subChannel = async () => {
        if (isAuth && userEmail && userRef) {
            setSub(true)
            await updateDoc(userRef, {
                subscriptions: arrayUnion({
                    id: channelId,
                }),
            })
        } else {
            alert('Please log in to sub a channel!')
        }
    }

    //make channel be unsubscribed
    const unSubChannel = async (passedID: string) => {
        try {
            if (userRef) {
                const result = subscribedChannels.filter((channel) => channel._id !== passedID)
                const resultId = result.map((channel) => ({id: channel._id}))
                setSub(false)
                await updateDoc(userRef, {
                    subscriptions: resultId,
                })
            }
        } catch (err) {
            console.error(err)
        }
    }
    const handleClick = async () => {
        await unSubChannel(channelId)
    }

    return (
        <>
            {!sub ? (
                <button
                    onClick={subChannel}
                    className={'font-medium text-sm bg-white hover:bg-opacity-90 ac px-5 py-2 text-center text-black rounded-2xl flex justify-center items-center'}>Subskrybuj
                </button>
            ) : (
                <button
                    onClick={handleClick}
                    className={'font-medium text-sm bg-primary hover:bg-lightgray ac px-5 py-2 text-center text-white rounded-2xl flex justify-center items-center'}>Subskrybujesz
                </button>
            )}
        </>
    )
}

export default SubscribeButton