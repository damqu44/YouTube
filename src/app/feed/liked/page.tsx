import Guide from "@/components/Guide/Guide";
import Liked from "@/components/SubPages/liked/Liked";

const LikedPage = () => {

    return (
        <>
            <div id={'content'} className={'flex w-full'}>
                <Guide/>
                <Liked />
            </div>
        </>
    )
}

export default LikedPage