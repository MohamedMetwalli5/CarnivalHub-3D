import React, { useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';



const SkyTarget = ({ timer, sendSkyTargetScore }) => {

    const { nodes, materials } = useGLTF('/GLB_SkyTarget.glb');
    const ref = useRef();
    const [sktTargetIsHit, setSktTargetIsHit] = useState(false);

    useFrame(() => {
        if (sktTargetIsHit && timer > 0) {
            setSktTargetIsHit(false);
            sendSkyTargetScore(); // Sending a notification to the parent to increase the sky score
            ref.current.position.x = Math.round(Math.random() * (10 - (-10)) + (-10));
            ref.current.position.y = Math.round(Math.random() * (4.5 - 2.5) + 2.5);
        }
    });

    return (
        <group ref={ref} dispose={null} position={[0, 3, -2]} rotation={[0, 0, 0]}>
            {/* An invisible Hitbox (for the curosr click improvment) */}
            <mesh
            onClick={(event) => {
                event.stopPropagation();
                console.log('Sky target hit!');
                setSktTargetIsHit(true);
            }}
            scale={[2, 2, 2]}
            visible={false} // Making it invisible
            >
            <boxGeometry args={[1, 1, 1]} />
            <meshBasicMaterial transparent opacity={0} />
            </mesh>


            <group rotation={[0, 0, 0]} scale={[0.5, 0.5, 0.01]}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder_Material018_0.geometry}
                material={materials['Material.018']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder_Material019_0.geometry}
                material={materials['Material.019']}
            />
            </group>
        </group>
    );
};

useGLTF.preload('/GLB_SkyTarget.glb');


export default SkyTarget;
