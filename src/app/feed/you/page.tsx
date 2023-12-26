import Guide from "@/components/Guide/Guide";
import You from "@/components/SubPages/You/You";

const YouPage = () => {

    return (
        <>
            <div id={'content'} className={'flex flex-row w-full h-full'}>
                <Guide/>
                <You/>
            </div>
        </>
    )
}

export default YouPage