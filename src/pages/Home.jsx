import React from 'react';
import { Canvas } from '@react-three/fiber';
import Tent from '../models/tent';
import MagicalDuo from '../models/MagicalDuo';

const Home = () => {
  return (
    <div className="w-full h-screen relative">
      <div className="absolute top-0 w-full h-1/2 bg-blue-200 flex items-center justify-center">
        <h1 className="font-bold text-4xl text-amber-700 relative top-[-100px]">Welcome to the Carnival!</h1>
      </div>

      <div className="absolute bottom-0 w-full h-1/2 bg-green-900"></div>
      <Canvas className="w-full h-screen bg-transparent" shadows>
        <ambientLight intensity={0.7} />
        <directionalLight castShadow position={[-5, 10, 0]} intensity={4} />
        <Tent />
        <MagicalDuo />
      </Canvas>
    </div>
  );
};

export default Home;
