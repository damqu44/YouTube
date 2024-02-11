'use client'
import React, {useState} from "react";
import {Icons} from "@/components/icons";

const Premium: React.FC = () => {
    const [months, setMonths] = useState<number>(1);
    const [price, setPrice] = useState<number>(24.99);
    const [error, setError] = useState<string | null>(null)

    function calculatePrice(months: number) {
        const discountPrice = 16.99
        const regularPrice = 24.99

        if (months < 1 || months > 12 || !Number.isInteger(months)) {
            setError('Wybierz ilość miesięcy z przedziału 1-12.')
            return 0;
        } else {
            setError(null)
        }

        let price: number
        if (months === 12) {
            price = months * discountPrice;
        } else if (months > 0 && months < 12) {
            price = months * regularPrice;
        } else {
            return 0
        }

        return price
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value);
        setMonths(value);
        setPrice(calculatePrice(value));
    }

    return (
        <>
            <div className={'flex flex-col w-full pt-20 items-center'}>
                <div className={'flex pb-6 justify-center items-center'}>
                    <div className={'text-4xl font-bold mr-1'}>YouTube Premium</div>
                    <Icons.youtube_premium className={'w-12 h-full'}/>
                </div>
                <div className={'flex justify-start items-center pb-1'}>
                    <div className={'text-base'}>Regularna cena za miesiąc subskrypcji:</div>
                    <div className={'text-lg text-myblue pl-3'}>24,99 zł</div>
                </div>
                <div className={'flex text-xs text-gray-500 font-bold pb-10'}>Zakup YouTube Premium na rok za jedyne
                    16,99 / miesiąc
                </div>
                <div className={'flex flex-col justify-start items-start'}>
                    <div className={'flex justify-start items-center pb-2'}>
                        <div className={'text-sm'}>Na ile miesięcy chcesz zakupić subskypcje?</div>
                        <input type={'number'} placeholder={'1'} onChange={handleInputChange} value={months}
                               min={1} max={12}
                               className={`${error ? 'text-red-500' : 'text-white'} bg-transparent border border-gray-600 rounded-xl ml-3 px-3 py-0.5 w-[60px]`}/>
                    </div>
                    <div className={'flex justify-start items-center '}>
                        <div className={`text-xs ${error ? 'line-through' : ''}`}>Łączny koszt zakupu subskrypcji wynosi: {price.toFixed(2)} zł</div>
                        <button
                            className={`${error ? 'text-red-500' : 'animate-pulse'}  px-3 py-1.5 hover:border-transparent flex justify-center items-center border border-gray-600 rounded-2xl transition-none hover:bg-[#263850] text-myblue text-sm font-medium ml-3 cursor-not-allowed`}>Realizuj
                        </button>
                    </div>
                    {error ? (
                        <div className={'pt-1 text-red-600 text-xs'}>{error}</div>
                    ) : null}
                </div>
            </div>
        </>
    )
}

export default Premium