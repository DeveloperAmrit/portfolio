import React from "react";
import {
    FaGithub,
    FaLinkedin,
    FaYoutube,
    FaTwitter,
    FaStackOverflow,
} from "react-icons/fa";


import StackOverflowFeed from "./Utils/StackOverflowFeed";
import FeedbackSlider from "./Utils/FeedbackSlider";



export default function Socials() {
    return (
        <div className='w-full px-6' id='socials'>
            <h1 className='w-fit min-w-48 text-4xl bg-[#0a192f] font-bold py-4 pl-2 z-50 sticky top-0'>Socials</h1>
            <div className='pb-16 w-full'>
                <blockquote className="w-full text-3xl md:text-5xl font-semibold text-center italic my-16 tracking-wide">
                    <span className="subtle-glow">
                        "Smartwork comes with hardwork"
                    </span>
                </blockquote>

                <StackOverflowFeed userId='29920273' />
                <div className="flex flex-col items-center gap-8 p-6 ">

                    {/* Feedback Slider */}
                    <FeedbackSlider />


                    {/* Social Buttons */}
                    <div className="w-full">
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            Connect with me
                        </h2>
                        <div className="flex flex-wrap justify-center gap-4 pt-4">
                            {socials.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex items-center gap-3 px-5 py-3 text-white rounded-xl transition ${social.color} ${social.hover} cursor-pointer hover:scale-105 duration-100`}
                                >
                                    <span className="text-2xl">{social.icon}</span>
                                    <span className="font-medium">{social.text}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


const socials = [
    {
        name: "LinkedIn",
        icon: <FaLinkedin />,
        url: "https://www.linkedin.com/in/amrit-kumar-yadav/",
        color: "bg-blue-700",
        hover: "hover:bg-blue-800",
        text: "Let's connect on LinkedIn",
    },
    {
        name: "GitHub",
        icon: <FaGithub />,
        url: "hhttps://github.com/DeveloperAmrit",
        color: "bg-gray-700",
        hover: "hover:bg-gray-800",
        text: "Check out my GitHub",
    },
    {
        name: "YouTube",
        icon: <FaYoutube />,
        url: "https://www.youtube.com/@TheBlackWaveOriginal",
        color: "bg-red-600",
        hover: "hover:bg-red-700",
        text: "Watch my videos",
    },
    {
        name: "Twitter",
        icon: <FaTwitter />,
        url: "https://x.com/yadav_amritk",
        color: "bg-sky-500",
        hover: "hover:bg-sky-600",
        text: "Follow me on Twitter",
    },
    {
        name: "Stack Overflow",
        icon: <FaStackOverflow />,
        url: "https://stackoverflow.com/users/29920273/amrit-kumar-yadav",
        color: "bg-orange-500",
        hover: "hover:bg-orange-600",
        text: "View my Stack Overflow",
    },
];