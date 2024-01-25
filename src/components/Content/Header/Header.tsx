'use client'
import React from "react";
import './Header.css'
import {useCategory} from "@/contexts/VideosCategoryContext";
import { Icons } from "@/components/icons";

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
        <div id={'chips-wrapper'} className={'flex flex-row w-full justify-center items-center sticky top-14 overflow-hidden'}>
            <div id={'header-left-arrow'} className={'mr-2 header-arrow'}>
                <Icons.right_arrow_light className={'brightness-0 invert rotate-180'}/>
            </div>
            <div id={'chips-content'}
                 className={'flex w-full justify-start items-center text-sm font-bold'}>
                {categories.map((category) => (
                    <div
                        key={category.id}
                        className={`chip ${selectedCategory === category.id || (category.id === 'WSZYSTKO' && !selectedCategory) ? 'active' : ''}`}
                        onClick={() => handleChipClick(category.category)}
                    >
                        {category.value}
                    </div>
                ))}
            </div>
            <div id={'header-right-arrow'} className={'ml-2 header-arrow'}>
                <Icons.right_arrow_light className={'brightness-0 invert'}/>
            </div>
        </div>
    )
}

export default Header;