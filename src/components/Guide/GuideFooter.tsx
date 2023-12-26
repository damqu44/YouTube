import Link from "next/link";

export default function GuideFooter() {
    return (
        <div id={'footer'} className={'w-full'}>
            <div id={'guide-links-primary'} className={'footer-links'}>
                <Link href={'https://about.youtube/'}>Informacje</Link>
                <Link href={'https://blog.youtube/'}>Centrum prasowe</Link>
                <Link href={'https://www.youtube.com/howyoutubeworks/policies/copyright/'}>Prawa autorskie</Link>
                <Link href={'https://www.youtube.com/t/contact_us/'}>Skontaktuj się z nami</Link>
                <Link href={'https://www.youtube.com/creators/'}>Twórcy</Link>
                <Link href={'https://www.youtube.com/ads/'}>Reklamy</Link>
                <Link href={'https://developers.google.com/youtube?hl=pl'}>Deweloperzy</Link>
            </div>
            <div id={'guide-links-secondary'} className={'footer-links'}>
                <Link href={'https://www.youtube.com/t/terms'}>Warunki</Link>
                <Link href={'https://policies.google.com/privacy?hl=pl'}>Prywatność</Link>
                <Link href={'https://www.youtube.com/howyoutubeworks/policies/community-guidelines/'}>Zasady i bezpieczeństwo</Link>
                <Link href={'https://www.youtube.com/howyoutubeworks/?utm_campaign=ytgen&utm_source=ythp&utm_medium=LeftNav&utm_content=txt&u=https%3A%2F%2Fwww.youtube.com%2Fhowyoutubeworks%3Futm_source%3Dythp%26utm_medium%3DLeftNav%26utm_campaign%3Dytgen'}>Jak działą YouTube</Link>
                <Link href={'https://www.youtube.com/new'}>Przetestuj nowe funkcje</Link>
            </div>
            <div id={'copyright'}>© 2023 Copy of YouTube Platform by Damian Charążka</div>
        </div>
    )
}