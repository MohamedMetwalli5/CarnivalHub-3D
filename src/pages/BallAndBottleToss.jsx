import React, { useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import IronCan from '../models-components/IronCan';
import Ball from '../models-components/Ball';
import Spaceship from '../models-components/Spaceship';
import BallAngleContoller from '../ball-controllers/BallAngleContoller';
import BallSpeedContoller from '../ball-controllers/BallSpeedContoller';



const BallAndBottleToss = () => {
  
  const [ballAngleValue, setBallAngleValue] = useState(0);
  const [ballSpeedValue, setBallSpeedValue] = useState(0);
  const [shootTheBall, setShootTheBall] = useState(false);
  const [ballCurrentPosition, setBallCurrentPosition] = useState([0, -1.5, 4]);

  const canRef = useRef();

  const handleBallAngleValue = (value) => setBallAngleValue(value);
  const handleBallSpeedValue = (value) => setBallSpeedValue(value);


  const handleShoot = () => {
    setShootTheBall(true);
    canRef.current.shoot(); // shooting the ball
    // setTimeout(() => {
    //   canRef.current.scatterAll();
    // }, 100);
  };

  const handleBallCurrentPositionChange = (value) => {
    setBallCurrentPosition(value);
  };

  return (
    <div className="w-full h-screen relative">
      <div className="absolute top-0 w-full h-1/2 bg-blue-200 flex items-center justify-center"></div>
      <div className="absolute bottom-0 w-full h-1/2 bg-green-900"></div>

      <BallSpeedContoller onBallSpeedValueChange={handleBallSpeedValue} />
      <BallAngleContoller onBallAngleValueChange={handleBallAngleValue} />

      <button
        onClick={handleShoot}
        className="absolute bottom-48 right-6 p-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md z-50 hover:bg-blue-700 hover:cursor-pointer"
      >
        Start
      </button>

      <Canvas className="w-full h-screen bg-transparent" shadows>
        <ambientLight intensity={0.7} />
        <directionalLight castShadow position={[-5, 10, 0]} intensity={4} />
        <Spaceship />
        {/* To keep the cans static while maintaining their dynamic behavior for a cool scattering effect, I set their gravitational constant to a small value of 0.000001 :) */}
        <Physics gravity={[0, -0.000001, 0]}>
          <IronCan ref={canRef} shootTheBall={shootTheBall} ballCurrentPosition={ballCurrentPosition}/>
          <Ball ballAngleValue={ballAngleValue} ballSpeedValue={ballSpeedValue} shootTheBall={shootTheBall} onBallCurrentPositionChange={handleBallCurrentPositionChange}/>
        </Physics>
      </Canvas>
    </div>
  );
};

export default BallAndBottleToss;
