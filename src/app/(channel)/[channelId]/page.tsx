import Channel from "@/components/Channel/Channel";
import {FC} from "react";
import Guide from "@/components/Guide/Guide";

interface pageProps {
    params: {
        channelId: string
    }
}

const ChannelPage: FC<pageProps> = ({params}) => {
    const channelId = decodeURIComponent(params.channelId)

    return (
        <div id={'content'} className={'flex flex-row w-full h-full'}>
            <Guide />
            <Channel channelId={channelId} />
        </div>
    )
}

export default ChannelPage