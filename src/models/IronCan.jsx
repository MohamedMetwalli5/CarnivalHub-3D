import React, { useRef, useEffect, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useNavigate } from 'react-router-dom';

const IronCan = (props) => {
  const { nodes, materials } = useGLTF('/iron_can.glb')

  const [hovered, setIsHovered] = useState(false);

  return (
    <group 
    {...props} dispose={null}
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
    >
        <group rotation={[-Math.PI / 2, 0, 0]}>

            {/* 5th row */}
            <mesh
            castShadow
            receiveShadow
            geometry={nodes['����������������-material'].geometry}
            material={materials.material}
            position={[0, 12, -3]}
            scale={[1, 1, 1]}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes['����������������-material'].geometry}
            material={materials.material}
            position={[2.1, 12, -3]}
            scale={[1, 1, 1]}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes['����������������-material'].geometry}
            material={materials.material}
            position={[4.2, 12, -3]}
            scale={[1, 1, 1]}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes['����������������-material'].geometry}
            material={materials.material}
            position={[-2.1, 12, -3]}
            scale={[1, 1, 1]}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes['����������������-material'].geometry}
            material={materials.material}
            position={[-4.2, 12, -3]}
            scale={[1, 1, 1]}
            />

            {/* 4th row */}
            <mesh
            castShadow
            receiveShadow
            geometry={nodes['����������������-material'].geometry}
            material={materials.material}
            position={[-3, 12, -1]}
            scale={[1, 1, 1]}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes['����������������-material'].geometry}
            material={materials.material}
            position={[-0.8, 12, -1]}
            scale={[1, 1, 1]}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes['����������������-material'].geometry}
            material={materials.material}
            position={[1.4, 12, -1]}
            scale={[1, 1, 1]}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes['����������������-material'].geometry}
            material={materials.material}
            position={[3.6, 12, -1]}
            scale={[1, 1, 1]}
            />

            {/* 3rd row */}
            <mesh
            castShadow
            receiveShadow
            geometry={nodes['����������������-material'].geometry}
            material={materials.material}
            position={[-1.9, 12, 1]}
            scale={[1, 1, 1]}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes['����������������-material'].geometry}
            material={materials.material}
            position={[0.5, 12, 1]}
            scale={[1, 1, 1]}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes['����������������-material'].geometry}
            material={materials.material}
            position={[2.8, 12, 1]}
            scale={[1, 1, 1]}
            />

            {/* 2nd row */}
            <mesh
            castShadow
            receiveShadow
            geometry={nodes['����������������-material'].geometry}
            material={materials.material}
            position={[-0.8, 12, 3]}
            scale={[1, 1, 1]}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes['����������������-material'].geometry}
            material={materials.material}
            position={[1.5, 12, 3]}
            scale={[1, 1, 1]}
            />

            {/* 1st row */}
            <mesh
            castShadow
            receiveShadow
            geometry={nodes['����������������-material'].geometry}
            material={materials.material}
            position={[0.3, 12, 5]}
            scale={[1, 1, 1]}
            />

        </group>
    </group>
  )
}

useGLTF.preload('/iron_can.glb')

export default IronCan;




