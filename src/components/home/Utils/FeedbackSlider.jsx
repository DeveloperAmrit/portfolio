import React from 'react'
import { motion } from "framer-motion";
import feedbacks from '../../../data/feedbacks'


const FeedbackSlider = () => {
    return (
        <div className='w-full'>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                Feedbacks
            </h2>
            <div className='w-full flex justify-center'>
                <div className="overflow-hidden  max-w-6xl my-8">
                    <motion.div
                        className="flex gap-6"
                        animate={{ x: ["0%", "-100%"] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 40,
                        }}
                    >
                        {[...feedbacks, ...feedbacks].map((feedback, index) => (
                            <div
                                key={index}
                                className="min-w-[350px] max-w-[350px] bg-zinc-900 border border-zinc-600 hover:border-zinc-400 shadow-md p-5 rounded-2xl flex flex-col justify-between gap-3 min-h-52"
                            >
                                <p className="text-zinc-100">"{feedback.message}"</p>
                                <div className="flex items-center gap-4 mt-2">
                                    <img
                                        src={feedback.photo}
                                        alt={feedback.name}
                                        className="w-12 h-12 rounded-full object-cover border"
                                    />
                                    <div className="flex flex-col">
                                        <a
                                            href={feedback.profileLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="font-semibold text-blue-600 hover:underline"
                                        >
                                            {feedback.name}
                                        </a>
                                        <span className="text-sm text-gray-500">{feedback.position}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default FeedbackSlider