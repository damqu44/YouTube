'use client'
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface ActivePageProviderProps {
    children: ReactNode;
}

interface ActivePageContextType {
    activePage: string | null;
    setActivePage: (page: string) => void;
}

const ActivePageContext = createContext<ActivePageContextType | undefined>(undefined);

export const ActivePageProvider: React.FC<ActivePageProviderProps> = ({ children }) => {
    const [activePage, setActivePageState] = useState<string | null>(null);

    const setActivePage = (page: string) => {
        setActivePageState(page);
    };

    useEffect(() => {
        // Ustaw domyślną aktywną stronę przy pierwszym renderowaniu
        setActivePage(window.location.pathname);
    }, []);

    const contextValue: ActivePageContextType = {
        activePage,
        setActivePage,
    };

    return (
        <ActivePageContext.Provider value={contextValue}>
            {children}
        </ActivePageContext.Provider>
    );
};

export const useActivePage = () => {
    const context = useContext(ActivePageContext);
    if (!context) {
        throw new Error('useActivePage must be used within an ActivePageProvider');
    }
    return context;
};