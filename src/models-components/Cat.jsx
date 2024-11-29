import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import CatSound from "../assets/Sounds/CatSound.mp3"


const Cat = () => {

  const { nodes, materials } = useGLTF('/3d_modelling_my_cat_fripouille.glb')

  const [hovered, setIsHovered] = useState(false);

  const audio = new Audio(CatSound);

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
        onClick={() => {audio.play();}}
    >
        <group position={[5, -2, 0]} rotation={[Math.PI / 2, 0, -0.1]} scale={0.001}>
            <primitive object={nodes._rootJoint} />
                <skinnedMesh
                    geometry={nodes.Object_7.geometry}
                    material={materials.SHD_eye}
                    skeleton={nodes.Object_7.skeleton}
                />
                <skinnedMesh
                    geometry={nodes.Object_9.geometry}
                    material={materials.SHD_frip}
                    skeleton={nodes.Object_9.skeleton}
                />
                <skinnedMesh
                    geometry={nodes.Object_44.geometry}
                    material={materials.whiskers}
                    skeleton={nodes.Object_44.skeleton}
                />
        </group>
    </group>
  )
}

useGLTF.preload('/3d_modelling_my_cat_fripouille.glb')

export default Cat