'use client'
import React, {createContext, ReactNode, useContext, useState} from 'react';
import { VideoItem } from "@/hooks/firebase/useVideos";

interface ResultsContextProps {
    searchQuery: string;
    searchedSortedVideos: VideoItem[];
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
    setSearchedSortedVideos: React.Dispatch<React.SetStateAction<VideoItem[]>>;
}

const ResultsContext = createContext<ResultsContextProps | undefined>(undefined);

interface ResultsProviderProps {
    children: ReactNode;
}
export const ResultsProvider: React.FC<ResultsProviderProps> = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [searchedSortedVideos, setSearchedSortedVideos] = useState<VideoItem[]>([]);

    return (
        <ResultsContext.Provider value={{ searchQuery, searchedSortedVideos, setSearchQuery, setSearchedSortedVideos }}>
            {children}
        </ResultsContext.Provider>
    );
};

export const useResults = () => {
    const context = useContext(ResultsContext);
    if (!context) {
        throw new Error('useResults must be used within a ResultsProvider');
    }
    return context;
};