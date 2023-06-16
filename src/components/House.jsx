/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 house.gltf
Author: nickqd (https://sketchfab.com/nickqd)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/house-0241efa57bac448c8bf350b53e020bbf
Title: house
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/house.gltf')
  return (
    <group {...props} dispose={null}>
      <group scale={0.0034}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes['house_Material_#27_0'].geometry} material={materials.Material_27} position={[-384.199, 66.043, -650]} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/house.gltf')
