import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import IronCan from '../models/IronCan';
import Ball from '../models/Ball';
import BallAngleContoller from '../components/BallAngleContoller';
import BallSpeedContoller from '../components/BallSpeedContoller';



const BallAndBottleToss = () => {
  const [ballAngleValue, setballAngleValue] = useState(0);
  const [ballSpeedValue, setballSpeedValuee] = useState(0);

  const handleBallAngleValue = (value) => {
    setballAngleValue(value);
  };

  const handleBallSpeedValue = (value) => {
    setballSpeedValuee(value);
  };

  return (
    <div className="w-full h-screen relative">
      <div className="absolute top-0 w-full h-1/2 bg-blue-200 flex items-center justify-center"></div>
      <div className="absolute bottom-0 w-full h-1/2 bg-green-900"></div>

      <BallSpeedContoller onBallSpeedValueChange={handleBallSpeedValue}/>
      <BallAngleContoller onBallAngleValueChange={handleBallAngleValue} />

      <Canvas className="w-full h-screen bg-transparent" shadows>
        <ambientLight intensity={0.7} />
        <directionalLight castShadow position={[-5, 10, 0]} intensity={4} />
        <IronCan />
        <Ball ballAngleValue={ballAngleValue} ballSpeedValue={ballSpeedValue} />
      </Canvas>
    </div>
  );
};

export default BallAndBottleToss;
