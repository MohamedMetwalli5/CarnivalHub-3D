import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'


const Character1 = (props) => {
  const { nodes, materials } = useGLTF('/young_guy_keeps_his_hands_in_pockets.glb')
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

useGLTF.preload('/young_guy_keeps_his_hands_in_pockets.glb')

export default Character1
