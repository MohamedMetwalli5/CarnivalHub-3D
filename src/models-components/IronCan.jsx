import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useBox } from '@react-three/cannon';
import { useFrame } from '@react-three/fiber';



const IronCan = forwardRef(({shootTheBall, ballCurrentPosition}, ref) => {
  const { nodes, materials } = useGLTF('/GLB_IronCan.glb');

  // The positions of the cans
  const cans = [
    [1.1, 0, -7],
    [3.3, 0, -7],
    [-1.2, 0, -7],
    [-3.4, 0, -7],
    [0.1, 2, -7],
    [2.3, 2, -7],
    [-2.2, 2, -7],
    [-1.1, 4, -7],
    [1.1, 4, -7],
    [0.1, 6, -7],
  ];

  const canRefs = [];
  const canAPIs = [];
  

  const MIN_Y = -1; // Acting as the ground

  // Initialize physics bodies for each can
  cans.forEach((position, index) => {
    const [canRef, api] = useBox(() => ({
      mass: 1,
      type: "Dynamic",
      position,
      material: { friction: 0.5 }, 
      rotation: [-Math.PI / 2, 0, 0],
    }));

    canRefs.push(canRef);
    canAPIs.push(api);

    api.position.subscribe(([x, y, z]) => {
      if (y < MIN_Y) {
        // Stoping the downward motion by setting velocity to zero
        api.velocity.set(0, 0, 0);
        api.position.set(x, MIN_Y, z);
      }
    });
  });

  
  const scatterAll = () => {
    canAPIs.forEach((api) => {
      const impulse = [
        (Math.random() - 0.5) * 5, // X direction
        Math.random() * 5,        // Y direction
        -5,                       // Z direction (as when the can is hit it is difinetly will move backward)
      ];
      api.applyImpulse(impulse, [0, 0, 0]); // Applying impulse to the center of mass
    });
  };

  

const scatterSpecificBalls = () => {
    canAPIs.forEach((api, index) => {
      api.position.subscribe((currentPos) => {
        const [canX, canY, canZ] = currentPos;
        const [ballX, ballY, ballZ] = ballCurrentPosition;
        const distance = Math.sqrt((ballX-canX)**2 + (ballY-canY)**2 + (ballZ-canZ)**2); // The distance between the ball and the center of the can
  
        // If the distance is less than or equal to 2  (1 for ball + 1 for the can)
        if (distance <= 2) {
          const impulse = [
            (Math.random() - 0.5) * 4,
            Math.random() * 4,
            -4,
          ];
          api.applyImpulse(impulse, [0, 0, 0]);
  
          // For the other cans above the current can
          cans.forEach((otherPosition, otherIndex) => {
            const [otherCanX, otherCanY, otherCanZ] = otherPosition;
            if (Math.floor(otherCanY) > Math.floor(canY)) {
            // console.log(Math.floor(otherCanY));
              const otherCanAPI = canAPIs[otherIndex]; // Getting the API for the other can
              const impulse = [
                (Math.random() - 0.5) * 4,
                Math.random() * 4,
                -4,
              ];
              otherCanAPI.applyImpulse(impulse, [0, 0, 0]);
            }
          });
        }
      });
    });
  };
  
  scatterSpecificBalls();

  useImperativeHandle(ref, () => ({
    // scatterAll,
    shoot: () => {
        if(!shootTheBall){
            console.log("Shoot the ball!", shootTheBall); 
        }
    },
  }));



  return (
    <group>
      {cans.map((position, index) => (
        <mesh
          key={index}
          ref={canRefs[index]}
          castShadow
          receiveShadow
          geometry={nodes['����������������-material'].geometry}
          material={materials.material}
        />
      ))}
    </group>
  );
});

useGLTF.preload('/GLB_IronCan.glb');

export default IronCan;
