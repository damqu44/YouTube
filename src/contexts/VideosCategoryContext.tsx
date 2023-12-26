import React, {createContext, useContext, useState, ReactNode} from 'react';

interface CategoryContextProps {
    selectedCategory: string | null;
    setSelectedCategory: (category: string | null) => void;
}

const CategoryContext = createContext<CategoryContextProps | undefined>(undefined);

interface CategoryProviderProps {
    children: ReactNode;
}

export const CategoryProvider: React.FC<CategoryProviderProps> = ({children}) => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const contextValue: CategoryContextProps = {
        selectedCategory,
        setSelectedCategory: (category: string | null) => {
            setSelectedCategory(category !== null ? category.toUpperCase() : null);
        },
    };

    return (
        <CategoryContext.Provider value={contextValue}>
            {children}
        </CategoryContext.Provider>
    );
};

export const useCategory = () => {
    const context = useContext(CategoryContext);
    if (!context) {
        throw new Error('useCategory must be used within a CategoryProvider');
    }
    return context;
};