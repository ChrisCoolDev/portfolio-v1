"use client"

import localFont from 'next/font/local';

const nohemi = localFont({ src: '../../public/font/Nohemi/Nohemi-Bold.ttf', display: 'swap'});
const jeko = localFont({
    src: '../../public/font/Jeko/JekoDEMO-ExtraBold.otf', display: 'swap'
})

export default function HeroSection({t}) {

    const twitterRedirect = () => {
        window.open('https://twitter.com/Ludovic_Tal', '_blank');
    }

    return (
        <>
            <div className="px-4 pt-[66px] pb-[0px] max-sm:pt-[50px] max-sm:pb-[0px] ">
                <div className="flex flex-col items-start max-w-[1080px] mx-auto space-y-4 max-xl:max-w-[900px] max-lg:max-w-[700px]">
                    <h1 className={`text-5xl font-black max-w-[752px] ${jeko.className} max-sm:text-6xl max-sm:leading-[110%] leading-[130%]`}>{t('mainHeading')}</h1>
                    <p className="max-w-[700px] leading-[170%] text-zinc-600 text-sm">{t('subHeading')}</p>
                </div>
            </div>
        </>
    )
}