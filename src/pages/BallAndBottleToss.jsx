import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import IronCan from '../models/IronCan';
import Ball from '../models/Ball';
import BallAngleContoller from '../components/BallAngleContoller';
import BallSpeedContoller from '../components/BallSpeedContoller';



const BallAndBottleToss = () => {
  const [ballAngleValue, setballAngleValue] = useState(30);

  const handleballAngleValue = (value) => {
    setballAngleValue(value);
  };

  return (
    <div className="w-full h-screen relative">
      <div className="absolute top-0 w-full h-1/2 bg-blue-200 flex items-center justify-center"></div>
      <div className="absolute bottom-0 w-full h-1/2 bg-green-900"></div>

      {/* <BallSpeedContoller /> */}
      <BallAngleContoller onBallAngleValueChange={handleballAngleValue} />

      <Canvas className="w-full h-screen bg-transparent" shadows>
        <ambientLight intensity={0.7} />
        <directionalLight castShadow position={[-5, 10, 0]} intensity={4} />
        <IronCan />
        <Ball ballAngleValue={ballAngleValue} />
      </Canvas>
    </div>
  );
};

export default BallAndBottleToss;
