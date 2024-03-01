import {CommentItem, UserItem, VideoItem} from "@/lib/types";
import React, {createContext, ReactNode, useContext, useEffect, useState} from "react";
import {useAuthUser} from "@/hooks/firebase/useAuthUser";
import {User as FirebaseUser} from "@firebase/auth";

interface VideoContextType {
    video: VideoItem | undefined
    setVideo: React.Dispatch<React.SetStateAction<VideoItem | undefined>>
}

const VideoContext = createContext<VideoContextType | undefined>(undefined)

export const useVideoContext = () => {
    const context = useContext(VideoContext)
    if (!context) {
        throw new Error('useVideoContext must be used within a VideoProvider')
    }
    return context
}

export const VideoProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const [video, setVideo] = useState<VideoItem>()


    return (
        <VideoContext.Provider value={{video, setVideo}}>
            {children}
        </VideoContext.Provider>
    )
}