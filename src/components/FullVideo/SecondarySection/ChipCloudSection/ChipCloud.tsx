'use client'
import React from "react"
import '../../FullVideo.css'
import ScrollArea from "@/components/ScrollArea";
import {useCategory} from "@/contexts/VideosCategoryContext";

const categories = [
    {id: 'WSZYSTKO', value: 'Wszystkie', category: ''},
    {id: 'PODOBNE', value: 'Podobne', category: "PODOBNE"},
    {id: 'DLA_CIEBIE', value: 'Dla ciebie', category: "DLA_CIEBIE"},
    {id: 'OSTATNIO_PRZESLANE', value: 'Ostatnio przesłane', category: "OSTATNIO_PRZESLANE"},
    {id: 'OBEJRZANE', value: 'Obejrzane', category: "OBEJRZANE"},

];
const ChipCloud = () => {
    const {selectedCategory, setSelectedCategory} = useCategory();

    const handleChipClick = (category: string) => {
        setSelectedCategory(category);
    };

    return (
        <ScrollArea arrows={{isAtStart: true, isAtEnd: false}} styles={{
            containerStyle: 'flex flex-row w-[440px] h-full text-sm font-medium justify-between items-center py-4',
            contentStyle: 'flex flex-row w-[100%] overflow-hidden',
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

export default ChipCloud