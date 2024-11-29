import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';



const MagicalDuo = (props) => {
  const { nodes, materials } = useGLTF('/magical_duo.glb')


  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1} position={[-5,-5,-5]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[4.957, -0.146, -0.266]} rotation={[0, -0.281, 0]}>
            <group
              position={[-0.924, -0.018, 0.194]}
              rotation={[-0.017, 0.122, -0.22]}
              scale={[1, 1, 0.945]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cabeca_lambert2_0.geometry}
                material={materials.lambert2}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cabeca_CircoApresentador1lambert6_0.geometry}
                material={materials.CircoApresentador1lambert6}
              />
            </group>
            <group rotation={[0, 0.165, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Corpo_lambert2_0.geometry}
                material={materials.lambert2}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Corpo_CircoApresentador1lambert4_0.geometry}
                material={materials.CircoApresentador1lambert4}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Corpo_Scarf_0.geometry}
                material={materials.Scarf}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Chapeu_lambert2_0.geometry}
              material={materials.lambert2}
              position={[-2.015, 0.902, 1.284]}
              rotation={[-0.182, 0.082, -0.39]}
              scale={[0.961, 0.961, 0.909]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.D_Olho_lambert2_0.geometry}
              material={materials.lambert2}
              position={[-0.733, -0.036, -0.142]}
              rotation={[0, 0, -0.198]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.E_Olho_lambert2_0.geometry}
              material={materials.lambert2}
              position={[-1.173, 0.062, -0.177]}
              rotation={[0.013, 0.05, -0.255]}
            />
          </group>
          <group position={[2.31, 0, -0.133]} rotation={[0, 0.486, 0]} scale={[-1, 1, 1]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.L_Eyebrow_lambert3_0.geometry}
              material={materials.lambert3}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.L_Eyebrow_lambert4_0.geometry}
              material={materials.lambert4}
            />
            <group position={[-0.052, -0.021, -0.212]} rotation={[0.06, 0.069, -0.015]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Saia_lambert3_0.geometry}
                material={materials.lambert3}
                position={[-0.198, 0.049, -0.465]}
                rotation={[0.099, -0.003, -0.048]}
              />
            </group>
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCylinder1_lambert1_0.geometry}
            material={materials.lambert1}
            position={[3.761, -0.1, 0.023]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface1_lambert1_0.geometry}
            material={materials.lambert1}
            position={[0, 0.036, 0]}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/magical_duo.glb')

export default MagicalDuo;