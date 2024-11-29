import React from 'react';
import { Canvas } from '@react-three/fiber';
import RedTent from '../models/RedTent';
import MagicalDuo from '../models/MagicalDuo';
import BlueTent from '../models/BlueTent';
import Character1 from '../models/Character1';


const Home = () => {
  return (
    <div className="w-full h-screen relative">
      <div className="absolute top-0 w-full h-1/2 bg-blue-200 flex items-center justify-center">
        <h1 className="font-bold text-4xl text-amber-700 relative top-[-100px]">Welcome to the Carnival!</h1>
      </div>

      <div className="absolute bottom-0 w-full h-1/2 bg-green-900"></div>
      <Canvas className="w-full h-screen bg-transparent" shadows>
        <ambientLight intensity={0.6} />
        <directionalLight castShadow position={[-5, 10, 0]} intensity={4} />
        <BlueTent />
        <Character1 />
        <MagicalDuo />
        <RedTent />
      </Canvas>
    </div>
  );
};

export default Home;
