import React, { useState } from 'react';
import '../../styles/3dcube.css';

const Cube = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const rotateTo = (x, y) => {
    setRotation({ x, y });
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-black text-white pt-28 justify-center">
      <div className="flex flex-col h-screen justify-center space-y-2 absolute left-4 top-0">
        {[
          { label: 'Overview', rot: { x: 0, y: 0 } },
          { label: 'Languages', rot: { x: 0, y: -90 } },
          { label: 'Leadership', rot: { x: 0, y: 90 } },
          { label: 'Team work', rot: { x: -90, y: 0 } },
          { label: 'Certificates', rot: { x: 90, y: 0 } },
          { label: 'Academia', rot: { x: 180, y: 0 } },
        ].map((item, idx) => (
          <button
            key={idx}
            onClick={() => rotateTo(item.rot.x, item.rot.y)}
            className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-800 transition"
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="cube-container">
        <div
          className="cube"
          style={{
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          }}
        >
          <div className="face front p-2">
            <h1 className="text-xl font-bold">Overview</h1>
          </div>
          <div className="face back">
            <div className="back-content">Academia</div>
          </div>
          <div className="face right">Languages</div>
          <div className="face left">Leadership</div>
          <div className="face top">Team work</div>
          <div className="face bottom">Certificates</div>
        </div>
      </div>
    </div>
  );
};

export default Cube;
