import CompaktVideos from "@/components/FullVideo/SecondarySection/CompaktVideoSection/CompaktVideos";
import React, {useEffect, useState} from "react";
import {VideoItem} from "@/lib/types";
import ChipCloud from "@/components/FullVideo/SecondarySection/ChipCloudSection/ChipCloud";
import {useAuthUser} from "@/hooks/firebase/useAuthUser";

type VideoProps = {
    videos: VideoItem[]
}
const SecondarySection: React.FC<VideoProps> = (props) => {
    const [isSecondaryVisible, setIsSecondaryVisible] = useState<boolean>()
    const {user, isLoading} = useAuthUser()

    useEffect(() => {
            const handleSecondaryVisibility = () => {
                if (window.innerWidth <= 1020) {
                    setIsSecondaryVisible(false);
                } else {
                    setIsSecondaryVisible(true)
                }
            }


            handleSecondaryVisibility()
            window.addEventListener("resize", handleSecondaryVisibility);
            return () => {
                window.removeEventListener("resize", handleSecondaryVisibility);
            }
        }, []
    )

    if (isLoading) {
        return (
            <div className={'mr-24 w-[440px] h-screen'}></div>
        )
    }

    return (
        <div id={'secondary'}
             style={{display: isSecondaryVisible ? 'flex' : 'none'}}
             className={'mr-24 w-[440px] min-h-screen flex-col justify-start items-center'}>
            {user?.userData.email ? <ChipCloud/> : null}
            <CompaktVideos videos={props.videos}/>
        </div>
    )
}

export default SecondarySection