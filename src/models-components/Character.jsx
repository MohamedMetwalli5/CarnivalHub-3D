import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'


const Character = (props) => {
  const { nodes, materials } = useGLTF('/GLB_Character.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.alexey_MNND68_alexey_MNND68}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        position={[9, -2, -8]}
      />
    </group>
  )
}

useGLTF.preload('/GLB_Character.glb')

export default Character;
