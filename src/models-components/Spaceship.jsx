import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'



const Spaceship = (props) => {
  const { nodes, materials } = useGLTF('/GLB_Spaceship.glb')
  return (
    <group {...props} dispose={null}>
      <group 
        rotation={[-Math.PI / 2, -3, 0]}
        position={[-5.8, 2.5, 0]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.Metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.Black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.Red_Light}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/GLB_Spaceship.glb')

export default Spaceship;