import localFont from 'next/font/local';

const nohemi = localFont({ src: '../../public/fonts/nohemi/Nohemi-Bold.otf', variable: '--font-nohemi', display: 'swap'});

const handleClick = () => {
    window.open('mailto:talchrist10@gmail.com', '_blank')
}

export default function Footer() {
    return (
        <>
            <div className=" px-4 text-white">
                <div className="mx-auto py-[120px] max-w-[1080px]  max-xl:max-w-[900px] max-lg:max-w-[700px] space-y-6">
                    <h2 className={`text-6xl ${nohemi.className}`}>Let get it in touch</h2>
                    <p className='text-md max-w-[400px]'>I would be delighted to explore a collaboration, answer your questions, or simply have a conversation.</p>
                    <button className='text-md border-2 border-solid border-white rounded-full px-11 py-3' onClick={handleClick}>Hello@chris</button>
                </div>
                
            </div>
        </>
    ) 
}