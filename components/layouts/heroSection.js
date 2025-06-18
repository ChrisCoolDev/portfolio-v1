"use client"

import localFont from 'next/font/local';

const euclid = localFont({ src: '../../public/fonts/euclid/EuclidTriangle-Bold.ttf', variable: '--font-euclid', display: 'swap'});

const twitterRedirect = () => {
    window.open('https://twitter.com/Ludovic_Tal', '_blank');
}

export default function HeroSection({t}) {

    return (
        <>
            <div className="px-4 pt-[66px] pb-[0px] max-sm:pt-[50px] max-sm:pb-[0px] ">
                <div className="flex flex-col items-start max-w-[1080px] mx-auto space-y-4 max-xl:max-w-[900px] max-lg:max-w-[700px]">
                    <h1 className={`mt-5 text-4xl font-bold font-heading tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl sm:leading-[3.5rem] max-w-[752px] ${euclid.className}`}>Software Engineer and Web Developer</h1>
                    <p className="max-w-[700px] leading-[170%] text-zinc-600 text-sm">Hello, I&apos;m Christian Ludovic, a software engineering student at Gümüşhane University of Technology. I am available for full-remote internship or part-time job opportunities.</p>
                </div>
            </div>
        </>
    )
}