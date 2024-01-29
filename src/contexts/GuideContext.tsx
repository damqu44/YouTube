'use client'
import React, {createContext, ReactNode, useContext, useState} from "react";

interface GuideContextProps {
    isGuideMiniOpen: boolean;
    isGuideVisible: boolean;
    isDynamicGuideOpen: boolean;
    setIsGuideMiniOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setIsGuideVisible: React.Dispatch<React.SetStateAction<boolean>>;
    setIsDynamicGuideOpen: React.Dispatch<React.SetStateAction<boolean>>;
    toggleGuideMini: () => void;
    toggleDynamicGuide: () => void
}

interface GuideProviderProps {
    children: ReactNode;
}

const GuideContext = createContext<GuideContextProps | undefined>(undefined)

export const GuideProvider: React.FC<GuideProviderProps> = ({children}) => {
    const [isGuideMiniOpen, setIsGuideMiniOpen] = useState<boolean>(false)
    const [isDynamicGuideOpen, setIsDynamicGuideOpen] = useState<boolean>(false)
    const [isGuideVisible, setIsGuideVisible] = useState<boolean>(false)

    const toggleGuideMini = () => {
        if (!isGuideVisible){
            setIsGuideVisible(true)
            setIsGuideMiniOpen((prev) => !prev)
        } else {
            setIsGuideMiniOpen((prev) => !prev)
        }
    }
    const toggleDynamicGuide = () => {
            setIsDynamicGuideOpen((prev) => !prev)
    }



    const contextValue = {
        isGuideMiniOpen,
        isGuideVisible,
        isDynamicGuideOpen,
        setIsGuideMiniOpen,
        setIsGuideVisible,
        setIsDynamicGuideOpen,
        toggleGuideMini,
        toggleDynamicGuide,

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