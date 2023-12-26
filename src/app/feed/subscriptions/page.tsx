import Subscriptions from "@/components/SubPages/Subscriptions/Subscriptions";
import Guide from "@/components/Guide/Guide";

const SubscriptionsPage = () => {

    return (
        <>
            <div id={'content'} className={'flex flex-row w-full h-full'}>
                <Guide/>
                <Subscriptions/>
            </div>
        </>
    )
}

export default SubscriptionsPage