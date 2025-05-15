
// NOT IN USE

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';

const FaceText = ({ text, position, rotation }) => (
  <Text
    position={position}
    rotation={rotation}
    fontSize={0.4}
    color="white"
    anchorX="center"
    anchorY="middle"
  >
    {text}
  </Text>
);

const GlowingCube = ({ label, href }) => {
  const cubeRef = useRef();
  const colorShiftRef = useRef(0);

  useFrame((state, delta) => {
    if (cubeRef.current) {
      cubeRef.current.rotation.y += 0.01;
      cubeRef.current.rotation.x += 0.005;

      // Cycle through a range of colors, emphasizing a rose hue.
      // We'll lean on rose colors by offsetting the sine wave values.
      const r = Math.sin(colorShiftRef.current * 0.8) * 0.3 + 0.7; // slightly boosted red
      const g = Math.sin(colorShiftRef.current * 0.8 + 3) * 0.3 + 0.3; // lower green
      const b = Math.sin(colorShiftRef.current * 0.8 + 5) * 0.3 + 0.4; // mid blue
      cubeRef.current.children[0].material.emissive.setRGB(r, g, b);

      colorShiftRef.current += delta * 2;
    }
  });

  return (
    <group
      ref={cubeRef}
      onClick={() => (window.location.href = href)}
      scale={[3, 3, 3]}
    >
      <mesh castShadow receiveShadow>
        <boxGeometry args={[2, 2, 2]} />
        <meshPhysicalMaterial
          transmission={1} // glass-like transparency
          thickness={0.5}
          roughness={0.1}
          metalness={0.8}
          clearcoat={1}
          clearcoatRoughness={0.1}
          reflectivity={0.9}
          envMapIntensity={1}
          emissiveIntensity={1.5}
          // Use a rose-inspired base color
          color="#FF66CC"
          emissive="#FF99DD"
        />
      </mesh>
      {/* Adding text on all six faces */}
      <FaceText text={label} position={[0, 0, 1.01]} rotation={[0, 0, 0]}  />
      <FaceText text={label} position={[0, 0, -1.01]} rotation={[0, -Math.PI, 0]} />
      <FaceText text={label} position={[1.01, 0, 0]} rotation={[0, Math.PI / 2, 0]} />
      <FaceText text={label} position={[-1.01, 0, 0]} rotation={[0, -Math.PI / 2, 0]} />
      <FaceText text={label} position={[0, 1.01, 0]} rotation={[-Math.PI / 2, 0, 0]} />
      <FaceText text={label} position={[0, -1.01, 0]} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  );
};

export default function GlowingCubeScene() {
  return (
    <div className="flex items-center justify-center bg-transparent">
      {/* The container is square (max width of 600px) */}
      <div className="w-full max-w-[600px] aspect-square">
        <Canvas
          shadows
          camera={{ position: [10, 10, 10], fov: 50 }}
        >
          <ambientLight intensity={0.5} color="#ffffff" />
          <pointLight position={[5, 5, 5]} intensity={3} color="#FF66CC" castShadow />
          <pointLight position={[-5, -5, 5]} intensity={2} color="#FF99CC" castShadow />
          <spotLight
            position={[0, 10, 10]}
            angle={0.3}
            penumbra={1}
            intensity={2}
            castShadow
            color="#FF66CC"
          />
          <GlowingCube label="Coding" href="/coding" />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>
    </div>
  );
}
