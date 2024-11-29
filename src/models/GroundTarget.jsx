import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'



const GroundTarget = ({position, rotation, timer}) => {

    const { nodes, materials } = useGLTF('/archery_target.glb')
    const ref = useRef();
    const [targetIsHit, setTargetIsHit] = useState(false);

    useFrame ((state, delta) => {
        if(targetIsHit && timer > 0){
            setTargetIsHit(false);
            ref.current.position.x = Math.round(Math.random() * (17 - (-17)) + (-17));
            ref.current.position.y = Math.round(Math.random() * (1.5 - 0.5) + 0.5);
        }
    });


    return (
    <group 
        ref={ref} 
        dispose={null}
        onClick={(event) => {
            event.stopPropagation();
            console.log("A ground target hit!");
            setTargetIsHit(true);
        }}
    >
        <group 
        position={position}
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
    
export default GroundTarget;