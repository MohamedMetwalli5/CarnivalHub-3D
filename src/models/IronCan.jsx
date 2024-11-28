import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useBox } from '@react-three/cannon';

const IronCan = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF('/iron_can.glb');

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

  
  useImperativeHandle(ref, () => ({
    scatterAll,
    shoot: () => {scatterAll();},
  }));

  return (
    <group {...props}>
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

useGLTF.preload('/iron_can.glb');

export default IronCan;
