import React, { useRef, useEffect, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useNavigate } from 'react-router-dom';

const Tent = (props) => {
  const { nodes, materials } = useGLTF('/circus.glb');

  const [hovered, setIsHovered] = useState(false);

  const navigate = useNavigate();

  return (
    <group
      {...props}
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
      onClick={() => navigate('/ball-and-bottle-toss')}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder1_lambert1_0.geometry}
        material={materials.lambert1}
        position={[0, 0, -30]}
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

export default Tent;




