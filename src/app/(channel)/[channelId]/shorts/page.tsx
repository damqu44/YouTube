import React, {FC} from "react";

interface pageProps {
    params: {
        channelId: string
    }
}

const ChannelMainPage: FC<pageProps> = ({params}) => {
    const channelId = decodeURIComponent(params.channelId)
    return (
        <></>
    )
}

export default ChannelMainPage