import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ShortsProviderProps {
    children: ReactNode;
}

const ShortsContext = createContext<{
    sortField: string | null;
    setSortField: React.Dispatch<React.SetStateAction<string | null>>;
    shouldSort: boolean;
    setShouldSort: React.Dispatch<React.SetStateAction<boolean>>;
}>({
    sortField: null,
    setSortField: () => {},
    shouldSort: false,
    setShouldSort: () => {},
});

export function useShortsContext() {
    return useContext(ShortsContext);
}

export function ShortsProvider({ children }: ShortsProviderProps) {
    const [sortField, setSortField] = useState<string | null>(null);
    const [shouldSort, setShouldSort] = useState(false);

    const value = {
        sortField,
        setSortField,
        shouldSort,
        setShouldSort,
    };

    return (
        <ShortsContext.Provider value={value}>
            {children}
        </ShortsContext.Provider>
    );
}