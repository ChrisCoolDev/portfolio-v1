import Image from 'next/image'
import ejaraLogo from '@/public/logos/ejara.svg'
import GlomLogo from '@/public/logos/glom.png'
import ybdigital from '@/public/logos/yb_digitall.jpeg'

export default function Experience (){

    const mailTo = () => {
        window.open('mailto:talchrist10@gmail.com')
    }

    return(
        <>
            <div className="flex flex-col gap-6 p-6 border border-solid border border-stone-200  lg:max-w-[520px] w-full rounded-xl">
                <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M2.75 9.75C2.75 8.95435 3.06607 8.19129 3.62868 7.62868C4.19129 7.06607 4.95435 6.75 5.75 6.75H18.25C19.0456 6.75 19.8087 7.06607 20.3713 7.62868C20.9339 8.19129 21.25 8.95435 21.25 9.75V18.25C21.25 19.0456 20.9339 19.8087 20.3713 20.3713C19.8087 20.9339 19.0456 21.25 18.25 21.25H5.75C4.95435 21.25 4.19129 20.9339 3.62868 20.3713C3.06607 19.8087 2.75 19.0456 2.75 18.25V9.75Z" fill="#F4F4F5" fill-opacity="0.1" stroke="#71717A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3 14.25H9.249C9.733 14.25 10.201 14.248 10.565 14.569L11.342 15.251C11.5238 15.411 11.7578 15.4993 12 15.4993C12.2422 15.4993 12.4762 15.411 12.658 15.251L13.435 14.569C13.799 14.249 14.267 14.25 14.751 14.25H21M8.75 6.5V4.75C8.75 4.21957 8.96071 3.71086 9.33579 3.33579C9.71086 2.96071 10.2196 2.75 10.75 2.75H13.25C13.7804 2.75 14.2891 2.96071 14.6642 3.33579C15.0393 3.71086 15.25 4.21957 15.25 4.75V6.5" stroke="#71717A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <h2 className={`font-bold`}>My Experience</h2>
                </div>
                <div className="flex flex-col gap-4"> 
                    <div className="flex items-center gap-4 max-xl:w-[390px]'">
                        <div className='w-12 h-12 max-sm:w-14 border border-solid border-stone-300 rounded-full flex items-center justify-center bg-white'> 
                            <Image src={ybdigital} width={40} height={40} alt="logo de glom" />
                        </div>
                        <div className="flex flex-col gap-1 w-[424px] max-xl:w-[300px] max-lg:w-full">
                            <h3 className='font-medium text-[14px]'>Yb_digitall</h3>
                            <div className="flex items-center justify-between w-full text-xs max-sm:flex-col max-sm:items-start max-sm:gap-1">
                                <p className='text-zinc-600 text-xs'>Front developer</p>
                                <p className='text-xs text-gray-400'>Dec 2024 - Feb 2025</p>
                            </div>
                        </div>
                    </div>                   
                    <div className="flex items-center gap-4">
                        <div className='w-12 h-12 max-sm:w-14 border border-solid border-stone-300 rounded-full flex items-center justify-center bg-white'>
                            <Image src={ejaraLogo} width={40} height={40} alt="logo de ejara " />
                        </div>
                        <div className="flex flex-col gap-1 w-[424px] max-xl:w-[300px] max-lg:w-full">
                            <h3 className='font-medium text-[14px]'>Ejara Cameroun</h3>
                            <div className="flex items-center justify-between w-full text-xs max-sm:flex-col max-sm:items-start max-sm:gap-1">
                                <p className='text-zinc-600 text-xs'>Product Designer Junior</p>
                                <p className='text-gray-400 text-xs'>Oct 2022 - Mar 2023</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 max-xl:w-[390px]'">
                        <div className='w-12 h-12 max-sm:w-14 border border-solid border-stone-300 rounded-full flex items-center justify-center bg-white'> 
                            <Image src={GlomLogo} width={40} height={40} alt="logo de glom" />
                        </div>
                        <div className="flex flex-col gap-1 w-[424px] max-xl:w-[300px] max-lg:w-full">
                            <h3 className='font-medium text-[14px]'>Glom Sarl Cameroun</h3>
                            <div className="flex items-center justify-between w-full text-xs max-sm:flex-col max-sm:items-start max-sm:gap-1">
                                <p className='text-zinc-600 text-xs'>Web Designer</p>
                                <p className='text-xs text-gray-400'>Jan 2022 - Jul 2023</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}