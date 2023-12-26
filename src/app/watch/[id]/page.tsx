import React, {FC} from 'react'
import './player.css'
import FullVideo from "@/components/FullVideo/FullVideo";

interface pageProps {
    params: {
        id: string
    }
}

const FullVideoPage: FC<pageProps> = ({params}) => {


    return (
        <>
            <FullVideo videoId={params.id}/>
        </>

    )
}

export default FullVideoPage

