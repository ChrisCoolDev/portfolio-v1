"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import Badge from '../basis/badge'

import ProjectCard from '../basis/projectCard'

import localFont from 'next/font/local';

const euclid = localFont({ src: '../../public/fonts/euclid/EuclidTriangle-Bold.ttf', variable: '--font-euclid', display: 'swap'});


export default function ProjectSection(){

    const redirectLinkify = () => {
        window.open('https://linkiify.netlify.app', '_blank')
    }

    const redirectPortfolio = () => {   
        window.open('http://christfaciledev.me', '_blank')
    }

    const redirectConvertMe = () => {
        window.open('https://github.com/ChristianLudovic/Convert-Me-Web-app', '_blank')
    }

    
    const projects = [
        {
            imagePath: "/projects_images/subscribeThumbnail.png",
            type: 'Side-project',
            tags: 'Laravel, React, Tailwindcss',
            name: 'Subscribe',
            description: "Design and participation in the integration of the web application Subscribe, which allows users to easily manage their subscriptions (Netflix, Spotify, Deezer, etc.).",
            url: 'https://subscribe-ui.vercel.app'
            
        },
        {
            imagePath: "/projects_images/hakuThumbnail.png",
            type: 'Agency project',
            tags: 'React, Tailwindcss',
            name: 'Haku Studio',
            description: 'Design and integration of the landing page of an creactive agency studio called Haku.Studio',
            url: 'https://haku-landing-page-blue.vercel.app'
        },
        {
            imagePath: "/projects_images/yeezyThumbnail.png",
            type: 'Side-project',
            tags: 'Vue, Tailwind, jspdf, htmltocanvas',
            name: 'Yeezy webapp clone',
            description : "Built the clone of the entire process of yeezy e-commerce webapp, i've also add some future like receipt generation in pdf",
            url: 'https://yeezy-clone-psi.vercel.app'    
        },
        {
            imagePath: "/projects_images/calendarThumbnail.png",
            type: 'Side-project',
            tags: 'Laravel, Livewire, Alpine.js, Tailwindcss',
            name: 'Calendar',
            description: "Developpement d'un calendrier plutot authentique, qui permet aux utilisateurs de gerer facilement les dates de naissance de leurs proches.",
            url: 'https://github.com/ChristianLudovic/calendar'
        },
        {
            imagePath: "/projects_images/growThumbnail.png",
            type: 'fun-project',
            tags: 'Livewire, Alpine js, Laravel, Tailwindcss',
            name: 'Growk',
            description: "Development of the web application Growk, which serves as a to-do list and helps users better organize their daily lives.",
            url: 'https://github.com/ChristianLudovic/todo-list-in-laravel-and-livewire'
        },
        {
            imagePath: "/projects_images/scheddo-Thumbnail.png",
            type: 'Fun-project',
            tags: 'Laravel, Livewire, Alpine.js, Tailwindcss',
            name: 'Scheddo',
            description: "Development of the web application Sheddo, which allows users to book services (hairdressing, barbering, manicures, pedicures, etc.) in specialized shops.",
            url: 'https://github.com/ChristianLudovic/scheddo'
            
        },
        {
            imagePath: "/projects_images/portfolioThumbnail.png",
            type: 'Portfolio',
            tags: 'Nextjs, Tailwindcss',
            name: 'My portfolio',
            description: "Design and integration of my personal portfolio, showcasing my skills, projects, and professional experiences.",
            url: 'https://chrisfaciledev.netlify.app'
        },
        
    ]

    return(
        <>
            <div className='px-4 '>
                <div className='max-w-[1080px] mx-auto flex flex-col space-y-11 max-xl:max-w-[900px] max-lg:max-w-[700px]'>
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className={`text-[22px] font-bold tracking-[0.2px] ${euclid.className}`}
                    >My projects</motion.h1>
                    <div className='flex flex-col gap-8 max-lg:w-full'>
                        <div className='flex gap-[30px] flex-wrap max-xl:gap-4 max-lg:flex-col max-lg-w-full max-lg:space-y-11' >
                            {projects.map((project, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <ProjectCard data={project}/>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}