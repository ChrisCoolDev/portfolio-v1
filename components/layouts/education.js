import Image from 'next/image'
import educationIcon from '@/public/education.svg'
import Link from 'next/link'
import gumuUniLogo from '@/public/logos/gum_uni_logo.svg'
import iut from '@/public/logos/iut.png'
import slz from '@/public/logos/slz.png'

export default function EductionSection({t}){

    const redirectBadjoun = () => {
        window.open('https://www.univ-dschang.org/iutfv-bandjoun/', '_blank')
    }

    return (
        <>
            <div className="px-4 py-16">
                <div className="flex flex-col items-start max-w-[1080px] mx-auto gap-6 max-xl:max-w-[900px] max-lg:max-w-[700px]">
                    <div className='flex flex-col space-y-11 max-sm:space-y-9 items-start'>
                        <div className="flex items-center justify-center">
                            <h2 
                                className={`text-2xl font-bold tracking-[1px]`}
                            
                            >My education</h2>
                        </div>
                        <div className='grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3'>
                            <div className='group relative flex flex-col items-start isolate gap-5'>
                                <div className='w-12 h-12 max-sm:w-14 rounded-[6px] border border-solid border-stone-300 flex items-center justify-center bg-white '>
                                    <Image src={gumuUniLogo} width={28} height={28} alt="logo de glom" />
                                </div>
                                <div className='space-y-[6px]'>
                                    <h3 className='text-[12px]text-zinc-800leading-[130%] font-medium'>University Technology of Gumushane</h3>
                                    <p className='text-sm text-zinc-600 leading-[150%]'>I am currently in my third year of engineering, specializing in software engineering.</p>
                                </div>
                                <div className='flex items-center space-x-2'>
                                    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-6 flex-none text-zinc-600">
                                        <path d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z" fill="currentColor"></path>
                                    </svg>
                                    <Link href={'https://www.gumushane.edu.tr/'} className='text-xs text-zinc-600 tracking-[0.7px]'>gumushane.edu.tr</Link>

                                </div>
                            </div>
                            <div className='group relative flex flex-col items-start isolate gap-5'>
                                <div className='w-12 h-12 max-sm:w-14 rounded-[6px] border border-solid border-stone-300 flex items-center justify-center bg-white '>
                                    <Image src={slz} width={28} height={28} alt="logo du slz douala" />
                                </div>
                                <div className='space-y-[6px]'>
                                    <h3 className='text-[12px]text-zinc-800leading-[130%] font-medium'>SLZ Douala</h3>
                                    <p className='text-sm text-zinc-600 leading-[150%]'>I obtained a B1 certificate in the German language there.</p>
                                </div>
                                <div className='flex items-center space-x-2'>
                                    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-6 flex-none text-zinc-600">
                                        <path d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z" fill="currentColor"></path>
                                    </svg>
                                    <Link href={'https://www.slz-douala.org/fr/'} className='text-xs text-zinc-600 tracking-[0.7px]'>slz-douala.org/fr/</Link>

                                </div>
                            </div>
                            <div className='group relative flex flex-col items-start isolate gap-5'>
                                <div className='w-12 h-12 max-sm:w-14 rounded-[6px] border border-solid border-stone-300 flex items-center justify-center bg-white'>
                                    <Image src={iut} width={28} height={28} alt="logo de glom" />
                                </div>
                                <div className='space-y-[6px]'>
                                    <h3 className='text-[12px]text-zinc-800leading-[130%] font-medium'>IUT fotso victor</h3>
                                    <p className='text-sm text-zinc-600 leading-[150%]'>I obtained a two-year diploma in Electrical Engineering, specializing in Automation and Industrial Computing.</p>
                                </div>
                                <div className='flex items-center space-x-2'>
                                    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-6 flex-none text-zinc-600">
                                        <path d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z" fill="currentColor"></path>
                                    </svg>
                                    <Link href={'https://www.univ-dschang.org/iutfv-bandjoun/'} className='text-xs text-zinc-600 tracking-[0.7px]'>univ-dschang.org/iutfv-bandjoun/</Link>

                                </div>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}