'use client'
import React from "react";
import './Header.css'
import {useCategory} from "@/contexts/VideosCategoryContext";
import ScrollArea from "@/components/ScrollArea";

const categories = [
    {id: 'WSZYSTKO', value: 'Wszystko', category: ''},
    {id: 'MUZYKA', value: 'Muzyka', category: "MUZYKA"},
    {id: 'TECHNOLOGIE', value: 'Technologie', category: "TECHNOLOGIE"},
    {id: 'WIADOMOSCI', value: 'Wiadomości', category: "WIADOMOSCI"},
    {id: 'POLITYKA', value: 'Polityka', category: "POLITYKA"},
    {id: 'GRY', value: 'Gry', category: "GRY"},
    {id: 'ROZRYWKA', value: 'Rozrywka', category: "ROZRYWKA"},
    {id: 'SPORT', value: 'Sport', category: "SPORT"},
    {id: 'PRZYRODA', value: 'Przyroda', category: "PRZYRODA"},
    {id: 'OSTATNIO_PRZESLANE', value: 'Ostatnio przesłane', category: "OSTATNIO_PRZESLANE"},
];

const Header: React.FC = () => {
    const {selectedCategory, setSelectedCategory} = useCategory();

    const handleChipClick = (category: string) => {
        setSelectedCategory(category);
    };

    return (
        <ScrollArea
            styles={{
                containerStyle: 'flex flex-row w-full justify-start items-center sticky top-14 overflow-hidden z-[35] bg-primaryStrong',
                contentStyle: 'flex w-full justify-start items-center text-sm font-bold w-[100%] overflow-hidden',
            }}>
            {categories.map((category) => (
                <div
                    key={category.id}
                    className={`chip ${selectedCategory === category.id || (category.id === 'WSZYSTKO' && !selectedCategory) ? 'active' : ''}`}
                    onClick={() => handleChipClick(category.category)}
                >
                    {category.value}
                </div>
            ))}
        </ScrollArea>
    )
}

export default Header;