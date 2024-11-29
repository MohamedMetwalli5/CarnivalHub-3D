import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'



const Target = ({postition, rotation}) => {

      const { nodes, materials } = useGLTF('/archery_target.glb')
      return (
        <group dispose={null}>
          <group 
            position={postition}
            rotation={rotation}
            >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_4.geometry}
              material={materials.WoodLegs}
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
              material={materials.Target}
            />
          </group>
        </group>
      )
    }
    
    useGLTF.preload('/archery_target.glb')
    
export default Target;