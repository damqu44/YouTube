import Guide from "@/components/Guide/Guide";
import {FC} from "react";
import Shorts from "@/components/shorts/shorts";


interface pageProps {
    params: {
        id: string;
    }
}

const ShortPage: FC<pageProps> = ({params}) => {

    return (
        <>
            <div id={'content'} className={'flex flex-row w-full h-full'}>
                <Guide/>
                <Shorts videoId={params.id} />
            </div>
        </>
    )
}

export default ShortPage