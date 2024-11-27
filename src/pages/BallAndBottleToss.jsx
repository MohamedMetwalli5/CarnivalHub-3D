import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import IronCan from '../models/IronCan';
import Ball from '../models/Ball';
import BallVerticalSliderContoller from '../components/BallVerticalSliderContoller';

const BallAndBottleToss = () => {
  const [ballStrengthValue, setBallStrengthValue] = useState(50);

  const handleBallStrengthValue = (value) => {
    setBallStrengthValue(value);
  };

  return (
    <div className="w-full h-screen relative">
      <div className="absolute top-0 w-full h-1/2 bg-blue-200 flex items-center justify-center"></div>
      <div className="absolute bottom-0 w-full h-1/2 bg-green-900"></div>

      <BallVerticalSliderContoller onBallStrengthValueChange={handleBallStrengthValue} />

      <Canvas className="w-full h-screen bg-transparent" shadows>
        <ambientLight intensity={0.7} />
        <directionalLight castShadow position={[-5, 10, 0]} intensity={4} />
        <IronCan />
        <Ball ballStrengthValue={ballStrengthValue} />
      </Canvas>
    </div>
  );
};

export default BallAndBottleToss;
