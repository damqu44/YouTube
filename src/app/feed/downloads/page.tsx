import Guide from "@/components/Guide/Guide";
import {isAuthenticated} from "@/utils/Auth";
import {redirect} from "next/navigation";

const DownloadPage = () => {
    const isAuth = isAuthenticated

    if(!isAuth) {
        redirect('/')
    }

    return (
            <div id={'content'} className={'flex flex-row w-full h-full'}>
                <Guide/>
            </div>
    )
}

export default DownloadPage