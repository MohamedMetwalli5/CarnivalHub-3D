import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';



const Ball = ({ballAngleValue, ballSpeedValue, shootTheBall, onBallCurrentPositionChange}) => {
    const { nodes, materials } = useGLTF('/GLB_Ball.glb')
    const [hovered, setIsHovered] = useState(false);
    const [time, setTime] = useState(0); // tracking the elapsed time
    const ref = useRef();

    const g = 9.8; // the gravitational constant
    const angle = ballAngleValue * (Math.PI / 180); // the angle in radians (in range here from 0 to 90)
    let initialYVelocity = ballSpeedValue;
    let initialZVelocity = ballSpeedValue;


    useFrame((state, delta) => {
            if(shootTheBall){
                onBallCurrentPositionChange([ref.current.position.x, ref.current.position.y, ref.current.position.z]);
                setTime((prevTime) => prevTime + delta); // incrementing the time by delta each frame
                const yPosition = initialYVelocity * time - 0.5 * g * time * time;
                const zPosition = initialZVelocity * time;
                ref.current.position.y += yPosition;
                ref.current.position.y /= 10;
                ref.current.position.z -= zPosition;
                ref.current.position.z /= 10;
            }

            if(ref.current.position.z <= -8){
                console.log("The cannon ball/balls passed the iron cans!");
                setTime(0);
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
            position={[0, -1.5, 4]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={2}
            />
        </group>
    )
}
useGLTF.preload('/GLB_Ball.glb')

export default Ball;