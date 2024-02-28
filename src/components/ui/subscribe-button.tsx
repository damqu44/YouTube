import React, {useEffect, useRef, useState} from "react";
import {arrayUnion, doc, getDoc, updateDoc} from "@firebase/firestore";
import {db} from "@/lib/firebase/firebase";
import useSubscribedChannels from "@/hooks/firebase/useSubscribedChannels";
import LoginButton from "@/components/auth/login-button";
import {useAuthUser} from "@/hooks/firebase/useAuthUser";

interface SubscribeButtonProps {
    channelId: string;
}

const SubscribeButton: React.FC<SubscribeButtonProps> = ({channelId}) => {
    const [sub, setSub] = useState<boolean>(false)
    const {subscribedChannels} = useSubscribedChannels()
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const subButtonRef = useRef<HTMLDivElement>(null);

    const {user} = useAuthUser()
    const userEmail = user?.email;
    const userRef = userEmail ? doc(db, 'users', userEmail) : null

    //check is channel subscribed
    useEffect(() => {
        const checkSubscription = async () => {
            if (userEmail && userRef) {
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
    }, [userEmail, userRef, channelId]);

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (subButtonRef.current && !subButtonRef.current.contains(event.target as Node)) {
                setIsModalOpen(false)
            }
        }

        const handleEscapeKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && subButtonRef.current) {
                setIsModalOpen(false)
            }
        };

        if (isModalOpen) {
            document.addEventListener('click', handleOutsideClick);
            document.addEventListener('keydown', handleEscapeKey);
        }

        return () => {
            document.removeEventListener('click', handleOutsideClick);
            document.removeEventListener('keydown', handleEscapeKey);
        };
    }, [isModalOpen])

    //make channel be subscribed
    const subChannel = async () => {
        if (userEmail && userRef) {
            setSub(true)
            await updateDoc(userRef, {
                subscriptions: arrayUnion({
                    id: channelId,
                }),
            })
        } else {
            setIsModalOpen(true)
        }
    }

    //make channel be unsubscribed
    const unSubChannel = async (passedID: string) => {
        try {
            if (userRef) {
                const result = subscribedChannels.filter((channel) => channel.id !== passedID)
                const resultId = result.map((channel) => ({id: channel.id}))
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
        <div className={'relative'}>
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
            {isModalOpen ? (
            <div
                ref={subButtonRef}
                className={'absolute min-w-[378px] min-h-[174px] bg-darkgray z-[9] flex flex-col top-full left-0 rounded-md'}>
                <span className={'px-5 pt-5 text-base'}>Chcesz zasubskrybować ten kanał?</span>
                <span className={'px-5 pt-3 text-sm text-secondary'}>Zaloguj się, aby zasubskrybować ten kanał.</span>
                <div className={'px-5 pt-10 pb-5'}><LoginButton/></div>
            </div>
            ) : null}
        </div>

    )
}

export default SubscribeButton