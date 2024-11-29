import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useNavigate } from 'react-router-dom';
import PopSoundEffect from "../assets/Sounds/PopSoundEffect.mp3"



const BlueTent = (props) => {
    const { nodes, materials } = useGLTF('/central_circus_tent_lowpoly.glb')

    const [hovered, setIsHovered] = useState(false);

    const navigate = useNavigate();

    const audio = new Audio(PopSoundEffect);

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
        onClick={() => {audio.play(); navigate('/target-shooting')}}
        >
        <mesh
        castShadow
        receiveShadow
        geometry={nodes.tent_pirple_tent_pirple_0.geometry}
        material={materials.tent_pirple}
        position={[-700,-50,-800]}
        rotation={[-Math.PI / 2, 0, 0.6]}
        scale={hovered? [1, 1, 1.1] : [1, 1, 1]}
        />
    </group>
    )
}

useGLTF.preload('/central_circus_tent_lowpoly.glb')

export default BlueTent