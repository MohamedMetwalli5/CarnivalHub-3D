import React, { useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';



const TargetShooting = () => {

  return (
    <div className="w-full h-screen relative">
      <div className="absolute top-0 w-full h-1/2 bg-blue-200 flex items-center justify-center"></div>
      <div className="absolute bottom-0 w-full h-1/2 bg-green-900"></div>


      <Canvas className="w-full h-screen bg-transparent" shadows>
        <ambientLight intensity={0.6} />
        <directionalLight castShadow position={[-5, 10, 0]} intensity={4} />
        <Physics gravity={[0, -9.8, 0]}>
          
        </Physics>
      </Canvas>
    </div>
  );
};
export default TargetShooting