import React from 'react'
import ValorantButton from './Utils/ValorantButton'
import ProjectedImage from './Utils/ProjectedImage'

// sticky top-[68px] 

const Hero = () => {
    return (
        <div className='w-full h-screen  px-6 flex flex-row justify-between items-center' id='home'>
            <div className='w-1/2 flex flex-col ml-10'>
                <div className='h-88 flex flex-col gap-y-7'>
                    <p className='text-2xl font-bold'>
                        I'm
                    </p>
                    <h1 className='text-7xl font-bold'>
                        Amrit Kumar Yadav
                    </h1>
                    <p className='text-3xl font-bold mt-2 tracking-tight'>
                        Full Stack Developer | Robotics Enthusiast | Hacker
                    </p>
                    <p className='text-lg'>
                        1st year | Bachelors in AI and DataScience from IIT-Jodhpur
                    </p>
                </div>
                <div className='w-full flex flex-row gap-x-6'>
                    <ValorantButton children='Hire me'href='/hireme' />
                    <ValorantButton children='Contact me' href='contact' />
                </div>
                <a href="/documents/amrit-resume.pdf" download
                    class="w-fit inline-block px-4 py-2 mt-4 absolute bottom-10 left-12 bg-[#0d213d] text-white font-semibold rounded-lg shadow-md hover:bg-[#ff4655] transition">
                    Download Resume
                </a>
            </div>
            <div className='w-1/2 flex justify-end items-baseline pr-28'>
                <ProjectedImage src='/images/Amrit.png' flickersrc='/images/hacker.png' />
            </div>
        </div>
    )
}

export default Hero