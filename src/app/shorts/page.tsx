import Shorts from "@/components/shorts/shorts";
import {FC} from "react";
import GuideContainer from "@/components/ui/GuideContainer";

interface pageProps {
    params: {
        id: string;
    }
}

const ShortsPage: FC<pageProps> = ({params}) => {

    return (
            <GuideContainer>
                    <Shorts videoId={params.id}/>
            </GuideContainer>
    )
}

export default ShortsPage