import Guide from "@/components/Guide/Guide";
import Premium from "@/components/Premium";

const PremiumPage = () => {
    return (
        <>
            <div id={'content'} className={'flex flex-row w-full h-full'}>
                <Guide/>
                <Premium/>
            </div>
        </>
    )
}
export default PremiumPage