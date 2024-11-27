import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

const Ball = ({ballStrengthValue}) => {
    const { nodes, materials } = useGLTF('/ball_-_shooting_area.glb')
    const [hovered, setIsHovered] = useState(false);
    const ref = useRef();



    const g = 9.8; // the gravitational constant
    const angle = 45 * (Math.PI / 180); // the angle in radians
    const initialVelocity = ballStrengthValue*5; // initial velocity

    let initialYVelocity = 0; // initial vertical velocity
    let initialZVelocity = 0; // initial horizontal velocity

    const [time, setTime] = useState(0); // tracking the elapsed time

    useFrame((state, delta) => {
        setTime((prevTime) => prevTime + delta); // incrementing the time by delta each frame

        const zPosition = initialZVelocity * time - (0.5 * g * time * time);
        
        ref.current.position.z = zPosition/20;
    });

    return (
    <group 
        ref={ref}
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
    >
        <mesh
        castShadow
        receiveShadow
        geometry={nodes['01_Props004_PropsMat001_0'].geometry}
        material={materials['PropsMat.001']}
        position={[0, (((ballStrengthValue - 0) / (100 - 0)) * (-14 - -2.5) + -2.5), 4]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={2}
        />
    </group>
    )
}
useGLTF.preload('/ball_-_shooting_area.glb')

export default Ball;