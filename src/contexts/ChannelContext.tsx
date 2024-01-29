'use client'
import React, {createContext, FC, useContext, ReactNode, useState} from 'react';
import {ChannelItem} from "@/lib/types";

interface ChannelLayoutContextProps {
    activeContent: string;
    setActiveContent: (content: string) => void;
    channelData: ChannelItem;
}

const ChannelLayoutContext = createContext<ChannelLayoutContextProps | undefined>(undefined);

export const useChannelLayout = () => {
    const context = useContext(ChannelLayoutContext);
    if (!context) {
        throw new Error('useChannelLayout must be used within a ChannelLayoutProvider');
    }
    return context;
};

interface ChannelLayoutProviderProps {
    children: ReactNode;
    channelData: ChannelItem;
}

export const ChannelLayoutProvider: FC<ChannelLayoutProviderProps> = ({children, channelData}) => {
    const [activeContent, setActiveContent] = useState<string>('main');

    return (
        <ChannelLayoutContext.Provider value={{activeContent, setActiveContent, channelData}}>
            {children}
        </ChannelLayoutContext.Provider>
    );
};