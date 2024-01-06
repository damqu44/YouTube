import Guide from "@/components/Guide/Guide";
import Shorts from "@/components/shorts/shorts";
import {FC} from "react";

interface pageProps {
    params: {
        id: string;
    }
}

const ShortsPage: FC<pageProps> = ({params}) => {

    return (
        <>
            <div id={'content'} className={'flex flex-row w-full h-full'}>
                <Guide/>
                <Shorts videoId={params.id}/>
            </div>
        </>
    )
}

export default ShortsPage