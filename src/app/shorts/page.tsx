import Guide from "@/components/Guide/Guide";
import Shorts from "@/components/shorts/shorts";

export default function ShortsPage(){

    return (
        <>
            <div id={'content'} className={'flex flex-row w-full h-full'}>
                <Guide/>
                <Shorts />
            </div>
        </>
    )
}
