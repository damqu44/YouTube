import {Icons} from "@/components/icons";
import React, {useState} from "react";
import {useAuthUser} from "@/hooks/firebase/useAuthUser";
import {VideoItem} from "@/lib/types";
import NewComment from "@/components/FullVideo/PrimarySection/Comments/NewComment";
import {useCommentsContext} from "@/contexts/CommentsContext";
import Modal from "@/components/FullVideo/PrimarySection/AboveTheFold/Actions/Modal";
import {User as FirebaseUser} from "@firebase/auth";

type CommentsHeaderProps = {
    video: VideoItem
    user: FirebaseUser | null
}

const CommentsHeader: React.FC<CommentsHeaderProps> = ({video, user}) => {
    const {comments, sortComments} = useCommentsContext()
    const [isSettingsModalOpen, setIsSettingsModalOpen] = useState<boolean>(false)

    const handleModalToggle = () => {
        setIsSettingsModalOpen(prevState => !prevState);
    }

    return (
        <div
            className={'w-full flex flex-col pb-4'}>
            <div
                className={'w-full flex flex-row justify-start items-center mb-4'}>
                <div
                    className={'text-xl font-bold mr-6 justify-start items-center'}>
                    {`${comments.length} ${comments.length === 1 ? 'komentarz' : (comments.length % 10 === 2 || comments.length % 10 === 3 || comments.length % 10 === 4) && (comments.length % 100 < 12 || comments.length % 100 > 14) ? 'komentarze' : 'komentarzy'}`}
                </div>
                <div className={'relative flex'}>
                    <div
                        onClick={handleModalToggle}
                        className={'flex flex-row cursor-pointer justify-start items-center'}>
                        <Icons.sort_lines
                            className={'brightness-0 invert mr-2 w-6 h-6'}/>
                        <div className={'font-semibold truncate text-sm'}>Sortuj według</div>
                    </div>
                    <Modal
                        styles={'absolute bg-darkgray z-[9] flex-col top-full left-0 mt-2 py-1 rounded-md'}
                        isOpen={isSettingsModalOpen} onClose={handleModalToggle}>
                        <div
                            onClick={() => sortComments('popular')}
                            className={'flex justify-start items-center hover:bg-primary py-2 px-4 cursor-pointer'}>
                            <span className={'mr-2 text-sm truncate'}>Najlepsze komentarze</span>
                        </div>
                        <div
                            onClick={() => sortComments('newest')}
                            className={'flex justify-start items-center hover:bg-primary py-2 px-4 cursor-pointer'}>
                            <span className={'mr-2 text-sm truncate'}>Od najnowszych</span>
                        </div>
                    </Modal>
                </div>
            </div>
            <NewComment video={video} user={user}/>
        </div>
    )
}

export default CommentsHeader