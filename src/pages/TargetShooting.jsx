import React, { useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import SkyTarget from '../models/SkyTarget';
import GroundTarget from '../models/GroundTarget';
import Gun from '../models/Gun';


const TargetShooting = () => {

  const [timer, setTimer] = useState(15);
  const [shootingTargetTotalScore, setShootingTargetTotalScore] = useState(0);
  const [gunPosition, setGunPosition] = useState([2,-3,1]);
  const [gunRotation, setGunRotation] = useState([0,0,0]);

  const handleGroundTargetScore = () => {
    setShootingTargetTotalScore(shootingTargetTotalScore+1);
  };

  const handleSkyTargetScore = () => {
    setShootingTargetTotalScore(shootingTargetTotalScore+1);
  };

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      return () => clearInterval(interval); // Clearing the interval when component the timer reaches 0
    }
  }, [timer]);

  

  return (
    <div className="w-full h-screen relative"  style={{cursor: 'url("src/assets/WeaponSight.png"), auto'}}>
      <div className="absolute top-0 w-full h-1/2 bg-blue-300 flex items-center justify-center"></div>
      <div className="absolute bottom-0 w-full h-1/2 bg-green-900"></div>
      
      <div className="absolute bottom-60 left-6 p-2 m-1 text-2xl bg-blue-700 text-white font-semibold rounded-lg shadow-md z-50">
        Score: {shootingTargetTotalScore}
      </div>
      <div className="absolute bottom-48 left-6 p-2 text-2xl bg-blue-700 text-white font-semibold rounded-lg shadow-md z-50">
        Seconds: {timer}
      </div>

      <Canvas className="w-full h-screen bg-transparent" shadows>
        <ambientLight intensity={0.6} />
        <directionalLight castShadow position={[-5, 10, 0]} intensity={4} />
          <SkyTarget timer={timer} sendSkyTargetScore={handleSkyTargetScore}/>
          <GroundTarget position={[0, 0.5,-8]} rotation={[0, 3.1, 0]} timer={timer} sendGroundTargetScore={handleGroundTargetScore}/>
          <Gun position={gunPosition} rotation={gunRotation} />
      </Canvas>
    </div>
  );
};
export default TargetShooting