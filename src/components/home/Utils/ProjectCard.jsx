import React from "react";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ project }) => {
    const { image, title, description, stack, github, deployed, live } = project;

    return (
        <div className="max-w-sm h-full min-h-[500px] flex flex-col rounded-2xl overflow-hidden shadow-lg bg-zinc-900 hover:scale-[1.02] transition-transform duration-300 border-2 border-zinc-800">
            <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover border-b border-zinc-800"
            />

            {/* Content */}
            <div className="flex-1 p-4 flex flex-col gap-3 text-zinc-100">
                <h2 className="text-xl font-semibold">{title}</h2>
                <p
                    className="text-zinc-400 text-sm"
                    dangerouslySetInnerHTML={{ __html: description }}
                ></p>

                <div className="flex flex-wrap gap-2 my-2">
                    {stack.map((tech, idx) => (
                        <span
                            key={idx}
                            className="text-xs bg-zinc-800 text-zinc-300 px-2 py-1 rounded-full"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
            {/* Buttons at bottom */}
            <div className="flex justify-between items-center gap-2 p-4 pt-0">
                {github &&
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-white bg-zinc-700 px-3 py-1.5 rounded hover:bg-zinc-600 transition"
                    >
                        <FaGithub />
                        GitHub
                    </a>
                }
                {live &&
                    <div>
                        {deployed ?
                            <a
                                href={live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm bg-green-600 text-white px-3 py-1.5 rounded hover:bg-green-500 transition"
                            >
                                Live Site
                            </a>
                            :
                            <span className="text-sm bg-green-950 text-white px-3 py-1.5 rounded">
                                {live}
                            </span>
                        }
                    </div>}
            </div>

            {/* Just to ensure Tailwind includes these colors */}
            <div className="hidden text-sky-400"></div>
        </div>
    );
};

export default ProjectCard;
