import React, { useRef, useEffect, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useNavigate } from 'react-router-dom';
import PopSoundEffect from "../assets/Sounds/PopSoundEffect.mp3"



const RedTent = (props) => {
  const { nodes, materials } = useGLTF('/circus.glb');

  const [hovered, setIsHovered] = useState(false);

  const navigate = useNavigate();

  const audio = new Audio(PopSoundEffect);

  return (
    <group

      dispose={null}
      onPointerOver={(event) => {
        event.stopPropagation();
        setIsHovered(true);
        document.body.style.cursor = 'pointer';
      }}
      onPointerOut={(event) => {
        event.stopPropagation();
        setIsHovered(false);
        document.body.style.cursor = 'default';
      }}
      onClick={() => {audio.play(); navigate('/ball-and-bottle-toss')}}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder1_lambert1_0.geometry}
        material={materials.lambert1}
        rotation={[0, 12, 0]}
        position={[28, 0, -35]}
        scale={hovered ? [9.54, 5.412, 9.54] : [9.54, 5.412, 5.54]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube3_lambert1_0.geometry}
        material={materials.lambert1}
      />
    </group>
  );
};

useGLTF.preload('/circus.glb');

export default RedTent;




