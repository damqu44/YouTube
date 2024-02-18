'use client'
import Guide from "@/components/Guide/Guide";
import Premium from "@/components/Premium";

export default function PremiumPage() {
    return (
        <>
            <div id={'content'} className={'flex flex-row w-full h-full'}>
                <Guide/>
                <Premium/>
            </div>
        </>
    )
}
