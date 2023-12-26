import MastHeadStart from "@/components/MastHead/MastHeadStart";
import MastHeadCenter from "@/components/MastHead/MastHeadCenter";
import MastHeadEnd from "@/components/MastHead/MastHeadEnd";

export default function MastHeadContainer() {
    return (
        <div id={'masthead-container'} className={'w-full h-14 flex justify-between text-slate-100 sticky top-0'}>
            <MastHeadStart />
            <MastHeadCenter />
            <MastHeadEnd />
        </div>
    )
}