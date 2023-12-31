'use client'
import React, {createContext, ReactNode, useContext, useState} from "react";

interface GuideContextProps {
    isGuideMiniOpen: boolean;
    toggleGuideMini: () => void;
}

interface GuideProviderProps {
    children: ReactNode;
}

const GuideContext = createContext<GuideContextProps | undefined>(undefined)

export const GuideProvider: React.FC<GuideProviderProps> = ({children}) => {
    const [isGuideMiniOpen, setIsGuideMiniOpen] = useState(false)

    const toggleGuideMini = () => {
        setIsGuideMiniOpen((prev) => !prev)
    }

    const contextValue = {
        isGuideMiniOpen,
        toggleGuideMini
    }

    return <GuideContext.Provider value={contextValue}>{children}</GuideContext.Provider>
}

export const useGuideContext = () => {
    const context = useContext(GuideContext)

    if (!context) {
        throw new Error('useGuideContext must be used within a GuideProvider');
    }

    return context
}