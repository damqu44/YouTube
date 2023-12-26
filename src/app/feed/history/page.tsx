import Guide from "@/components/Guide/Guide";
import History from "@/components/SubPages/History/History";

const HistoryPage = () => {

    return (
        <>
            <div id={'content'} className={'flex w-full'}>
                <Guide/>
                <History />
            </div>
        </>
    )
}

export default HistoryPage