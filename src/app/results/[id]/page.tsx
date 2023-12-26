import React, {FC} from 'react'
import Results from "@/components/Results/Results";
import Guide from "@/components/Guide/Guide";

interface pageProps {
    params: {
        id: string
    }
}

const ResultsPage: FC<pageProps> = ({params}) => {

    return (
        <>
            <div id={'content'} className={'flex w-full h-full just'}>
                <Guide />
                <Results resultsId={params.id}/>
            </div>
        </>

    )
}

export default ResultsPage

