"use client"

export default function HeroSection({t}) {

    const twitterRedirect = () => {
        window.open('https://twitter.com/Ludovic_Tal', '_blank');
    }

    return (
        <>
            <div className="px-4 pt-[66px] pb-[0px] max-sm:pt-[50px] max-sm:pb-[0px] ">
                <div className="flex flex-col items-start max-w-[1080px] mx-auto space-y-4 max-xl:max-w-[900px] max-lg:max-w-[700px]">
                    <h1 className={`text-5xl font-black max-w-[752px] max-sm:text-6xl max-sm:leading-[110%] leading-[130%]`}>Software engineer and web developer</h1>
                    <p className="max-w-[700px] leading-[170%] text-zinc-600 text-sm">Hello, I&apos;m Christian Ludovic, a software engineering student at Gümüşhane University of Technology. I am available for full-remote internship or part-time job opportunities.</p>
                </div>
            </div>
        </>
    )
}