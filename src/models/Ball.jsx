import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

const Ball = ({ballStrengthValue}) => {
    const { nodes, materials } = useGLTF('/ball_-_shooting_area.glb')
    const [hovered, setIsHovered] = useState(false);
    const [time, setTime] = useState(0); // tracking the elapsed time
    const ref = useRef();



    const g = 9.8; // the gravitational constant
    const angle = (((ballStrengthValue - 0) / (100 - 0)) * (90 - 0) + 0)  *  (Math.PI / 180); // the angle in radians
    let initialYVelocity = 30; // ToDo: needs a new slider
    let initialZVelocity = 30; // ToDo: needs a new slide


    useFrame((state, delta) => {
        // if(ref.current.position.y < 15){
            setTime((prevTime) => prevTime + delta); // incrementing the time by delta each frame

            const yPosition = initialYVelocity * time - 0.5 * g * time * time;
            const zPosition = initialZVelocity * time;
    
            ref.current.position.y += yPosition;
            ref.current.position.y /= 10;
    
            ref.current.position.z -= zPosition;
            ref.current.position.z /= 10;

            if(ref.current.position.z < -15 && ref.current.position.z > -18){
                console.log("The ball passed the iron cans!");
                setTime(0); // which means stopping the ball from moving further
            }

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
        position={[0, (((ballStrengthValue - 0) / (100 - 0)) * (-10 - -7.5) + -7.5), 4]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={2}
        />
    </group>
    )
}
useGLTF.preload('/ball_-_shooting_area.glb')

export default Ball;