import CompaktVideos from "@/components/FullVideo/SecondarySection/CompaktVideoSection/CompaktVideos";
import React, {useEffect, useState} from "react";
import {VideoItem} from "@/lib/types";
import ChipCloud from "@/components/FullVideo/SecondarySection/ChipCloudSection/ChipCloud";

type VideoProps = {
    videos: VideoItem[]
}
const SecondarySection: React.FC<VideoProps> = (props) => {
    const [isSecondaryVisible, setIsSecondaryVisible] = useState<boolean>()

    useEffect(() => {
            const handleSecondaryVisibility = () => {
                if (window.innerWidth <= 1020) {
                    setIsSecondaryVisible(false);
                } else {
                    setIsSecondaryVisible(true)
                }
            }


            handleSecondaryVisibility();  // Initial call
            window.addEventListener("resize", handleSecondaryVisibility);
            return () => {
                window.removeEventListener("resize", handleSecondaryVisibility);
            }
        }, []
    )
    return (
        <div id={'secondary'}
             style={{display: isSecondaryVisible ? 'flex' : 'none'}}
             className={'mr-24 w-[440px] min-h-screen flex-col justify-start items-center'}>
            <ChipCloud/>
            <CompaktVideos videos={props.videos}/>
        </div>
    )
}

export default SecondarySection