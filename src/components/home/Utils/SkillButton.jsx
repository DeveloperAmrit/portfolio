import React from 'react';
import { Link } from "react-router-dom";

const SkillButton = ({ text, path, position }) => {
  return (
    <Link
      to={path}
      className="group relative w-64 h-48 transform-gpu transition duration-300 hover:rotate-[1deg] hover:scale-105"
    >
      <div className="relative w-full h-full flex flex-col items-center justify-center rounded-xl border-2 border-white bg-black/30 text-white shadow-[0_0_20px_#0ff] overflow-hidden">
        <h1 className="z-10 text-3xl font-bold">{text}</h1>
        {position && <span className="z-10 -mb-5">({position})</span>}

        {/* Dot + Tail */}
        <span className="absolute inset-0 pointer-events-none z-0">
          {/* Main dot */}
          <span className="absolute w-2 h-2 bg-cyan-400 rounded-full animate-dotloop" />

          {/* Trailing dots */}
          <span className="absolute w-2 h-2 bg-cyan-400/70 blur-sm rounded-full animate-dotloop delay-100" />
          <span className="absolute w-2 h-2 bg-cyan-400/50 blur-md rounded-full animate-dotloop delay-200" />
          <span className="absolute w-2 h-2 bg-cyan-400/30 blur-lg rounded-full animate-dotloop delay-300" />
        </span>

        {/* Glow on Hover */}
        <div className="absolute inset-0 rounded-xl bg-cyan-400 opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-md" />
      </div>
    </Link>
  );
};

export default SkillButton;
