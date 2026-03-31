"use client"

import localFont from 'next/font/local';
import { motion } from 'framer-motion';

    const nohemi = localFont({ src: '../../public/fonts/nohemi/Nohemi-Bold.otf', variable: '--font-nohemi', display: 'swap'});

    const handleClick = () => {
        window.open('mailto:talchrist10@gmail.com', '_blank')
    }

export default function Footer() {

    return (
        <>
            <div className=" px-4 text-white">
                <div className="mx-auto py-[120px] max-w-[1080px]  max-xl:max-w-[900px] max-lg:max-w-[700px] space-y-6">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className={`text-6xl ${nohemi.className}`}
                    >Let get it in touch</motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className='text-md max-w-[400px]'
                    >I would be delighted to explore a collaboration, answer your questions, or simply have a conversation.</motion.p>
                    <motion.button 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className='text-md border-2 border-solid border-white rounded-full px-11 py-3' 
                        onClick={handleClick}
                    >Hello@chris</motion.button>
                </div>
                
            </div>
        </>
    ) 
}