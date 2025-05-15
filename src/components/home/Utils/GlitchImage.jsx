import React, { useEffect, useState } from 'react';
import '../../../styles/imageGlitch.css';

const GlitchImage = ({ src, flickersrc, alt, width = 'w-[500px]' }) => {
  const [lines, setLines] = useState([]);
  
  if(!flickersrc) flickersrc = src;

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      const newLines = Array.from({ length: Math.floor(Math.random() * 10 + 5) }).map(() => ({
        top: `${Math.random() * 100}%`,
        color: getRandomColor(),
        left: `${Math.random() * 100}%`,
        width: `${Math.random() * 50 + 10}%`, // 10% to 60% wide
      }));

      setLines(newLines);

      const timeout = setTimeout(() => {
        setLines([]);
      }, 200);

      return () => clearTimeout(timeout);
    }, 2000);

    return () => clearInterval(glitchInterval);
  }, []);

  const glitchElement = document.querySelector('.glitch-image');

  function startGlitchCycle() {
      setInterval(() => {
          // Add glitch effect
          glitchElement.classList.add('glitch-active');

          // Remove it after 2 seconds
          setTimeout(() => {
              glitchElement.classList.remove('glitch-active');
          }, 2000);
      }, 7000); // Repeat every 7 seconds
  }

  startGlitchCycle();

  return (
    <div className={`relative ${width}`}>
      <div className="glitch-image w-full h-full">
        <img src={src} alt="Main" className="w-full h-full object-cover" />
      </div>

      {/* Hacker flicker image */}
      <img
        src={flickersrc}
        alt="Hacker"
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none hacker-image"
      />
      <div className="absolute inset-0 pointer-events-none z-10">
        {lines.map((line, index) => (
          <div
            key={index}
            className="absolute h-[2px] opacity-40 mix-blend-screen transition-opacity"
            style={{
              top: line.top,
              backgroundColor: line.color,
              left: line.left,
              width: line.width,
            }}
          />
        ))}
      </div>
    </div>
  );
};

function getRandomColor() {
  const colors = ['#FF0000', '#00FFFF', '#00FF00', '#FF00FF', '#FFFF00', '#FFFFFF'];
  return colors[Math.floor(Math.random() * colors.length)];
}

export default GlitchImage;
