
import React, { useRef, useState, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'


const Gun = ({position, rotation}) => {
  
    const { nodes, materials } = useGLTF('/colt_m1911.glb')

    const ref = useRef();
    const [mouseX, setMouseX] = useState()
    const [mouseY, setMouseY] = useState()

    useFrame((state, delta) => {

        if(mouseX > 930){ // right
            if(mouseY > 200){ // bottom
                ref.current.rotation.x = 0;
                ref.current.rotation.y = -0.5;
            }else{ // top
                ref.current.rotation.x = 0.5;
                ref.current.rotation.y = -0.5;
            }
        }else if(mouseX < 330){ // left
            if(mouseY > 200){ // bottom
                ref.current.rotation.x = 0;
                ref.current.rotation.y = 0.5;
            }else{ // top
                ref.current.rotation.x = 0.5;
                ref.current.rotation.y = 0.5;
            }
        }else{ // center
            if(mouseY > 200){ // bottom
                ref.current.rotation.x = 0;
                ref.current.rotation.y = 0;
            }else{ // top
                ref.current.rotation.x = 0.5;
                ref.current.rotation.y = 0;
            }
        }
        // console.log(mouseX, mouseY);
    });

    // for the mouse position tracking
    useEffect(
        () => {
          const update = (e) => {
            setMouseX(e.x)
            setMouseY(e.y)
          }
          window.addEventListener('mousemove', update)
          window.addEventListener('touchmove', update)
          return () => {
            window.removeEventListener('mousemove', update)
            window.removeEventListener('touchmove', update)
          }
        },
        [setMouseX, setMouseY]
      )



    return (
        <group dispose={null} ref={ref}>
            <group 
                scale={0.2} 
                position={position} 
                rotation={rotation}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.grip_cover_high_Material_0.geometry}
                    material={materials.Material}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.trigger_high_Material_0.geometry}
                    material={materials.Material}
                    position={[0, 1.594, 2.316]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.grip_hold_high_Material_0.geometry}
                    material={materials.Material}
                    position={[0, 4.697, -4.857]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.grip_back_high_Material_0.geometry}
                    material={materials.Material}
                    position={[0, 4.649, -5.067]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.hammer_high_Material_0.geometry}
                    material={materials.Material}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle_high_Material_0.geometry}
                    material={materials.Material}
                    position={[-0.003, 4.974, 6.96]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle001_high_Material_0.geometry}
                    material={materials.Material}
                    position={[-0.003, 4.825, 1.538]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={124.711}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.maguzin_high_Material_0.geometry}
                    material={materials.Material}
                    position={[0, -4.029, 6.54]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.bolt4_high_Material_0.geometry}
                    material={materials.Material}
                    position={[0, 2.616, 6.12]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane_high_Material_0.geometry}
                    material={materials.Material}
                    position={[-0.947, 3.447, 6.164]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.left_high_Material_0.geometry}
                    material={materials.Material}
                    position={[0, 3.277, 0.32]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.left2_high_Material_0.geometry}
                    material={materials.Material}
                    position={[-0.029, 3.25, 0.224]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.slid_high_Material_0.geometry}
                    material={materials.Material}
                    position={[0, 4.702, -10.622]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.bolt_high_Material_0.geometry}
                    material={materials.Material}
                    position={[0, 3.227, 6.974]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.bolt2_high_Material_0.geometry}
                    material={materials.Material}
                    position={[0, 0.669, 2.757]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.bolt3_high_Material_0.geometry}
                    material={materials.Material}
                    position={[0, 2.719, 7.912]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.bolt5_high_Material_0.geometry}
                    material={materials.Material}
                    position={[0, 3.183, 0.176]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.bolt6_high_Material_0.geometry}
                    material={materials.Material}
                    position={[0, -5.011, 9.083]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.bolt7_high_Material_0.geometry}
                    material={materials.Material}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.bolt8_high_Material_0.geometry}
                    material={materials.Material}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.meguzin_botten_high_Material_0.geometry}
                    material={materials.Material}
                    position={[0.985, 0.639, 3.027]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.body_high001_Material_0.geometry}
                    material={materials.Material}
                    position={[0, 4.718, -4.912]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}
                />
            </group>
        </group>
    )
}

useGLTF.preload('/colt_m1911.glb')


export default Gun;