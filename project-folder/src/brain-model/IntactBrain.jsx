import React, { useEffect, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useScene } from "../utils/BrainContext.jsx";
import { useSnapshot } from "valtio";

export function IntactBrain(props) {
  const { INTACT_BRAIN, state, menuItems, setMenuItems } = useScene()
  const { nodes, materials } = useGLTF(INTACT_BRAIN)
  const [hovered, setHovered] = useState(null)
  const meshRef = useRef();
  const snap = useSnapshot(state);

  // Sets menu items
  useEffect(() => {
    meshRef.current.children.map(mesh => {
      menuItems.push(mesh.material.name)
    })
  }, [])

  return (
    <group ref={meshRef} {...props} dispose={null}
           // Pointer events
           onPointerOver = {(e) => {e.stopPropagation(), setHovered(e.object.material.name)}}
           onPointerOut = {(e) => {e.intersections.length === 0 && setHovered(null)}}
           onPointerDown = {(e) => {e.stopPropagation(); state.current = e.object.material.name}}
           onPointerMissed = {() => {state.current = null}}
    >
      <mesh material-color={snap.items.Olfactory_Bulb_R} geometry={nodes.Olfactory_Bulb_R.geometry} material={materials.Olfactory_bulb} position={[2.74, 8.48, 1.12]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.01} />
      <mesh material-color={snap.items.Olfactory_Bulb_L} geometry={nodes.Olfactory_Bulb_L.geometry} material={materials['Olfactory_bulb.001']} position={[-0.02, 6.74, -3.13]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.01} />
      <mesh material-color={snap.items.Cerebrum_R} geometry={nodes.Cerebrum_R.geometry} material={materials.Cerebrum_R} position={[4.74468, 8.48406, 1.12119]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.01} />
      <mesh material-color={snap.items.Cerebrum_L} geometry={nodes.Cerebrum_L.geometry} material={materials.Cerebrum_L} position={[-4.78684, 8.5577, 1.11275]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.01} />
      <mesh geometry={nodes.Pons.geometry} material={materials.Brain_base} position={[-0.02, -161.81, 0.84]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={2.54} />
      <mesh geometry={nodes.Cerebral_Peduncle.geometry} material={materials['Brain_base.001']} position={[-0.02, 2.88, 1.91]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.01} />
      <mesh geometry={nodes.Pituitary_Gland.geometry} material={materials['Brain_base.002']} position={[-0.02, 6.81, 0.98]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.01} />
      <mesh geometry={nodes.Fourth_Ventricle_Wall.geometry} material={materials['Brain_base.003']} position={[-0.02, 6.81, 0.98]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.01} />
      <mesh geometry={nodes.Tuber_Cinereum.geometry} material={materials['Brain_base.004']} position={[-0.02, 6.81, 0.98]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.01} />
      <mesh geometry={nodes.Mammillary_Body_R.geometry} material={materials['Brain_base.005']} position={[-0.02, 6.81, 0.98]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.01} />
      <mesh geometry={nodes.Optic_Chiasm.geometry} material={materials['Brain_base.006']} position={[-0.02, 6.81, 0.98]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.01} />
      <mesh geometry={nodes.Inferior_Colliculus_R.geometry} material={materials['Brain_base.007']} position={[-0.02, 6.81, 0.98]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.01} />
      <mesh geometry={nodes.Superior_Colliculus_R.geometry} material={materials['Brain_base.008']} position={[-0.02, 6.81, 0.98]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.01} />
      <mesh geometry={nodes.Pineal_Gland.geometry} material={materials['Brain_base.009']} position={[-0.02, 6.81, 0.98]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.01} />
      <mesh geometry={nodes.Medulla_Oblongata.geometry} material={materials['Brain_base.010']} position={[-0.02, 2.88, 1.91]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.01} />
      <mesh geometry={nodes.Optic_Tract_R.geometry} material={materials['Brain_base.011']} position={[-0.02, 6.81, 0.98]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.01} />
      <mesh geometry={nodes.Mammillary_Body_L.geometry} material={materials['Brain_base.012']} position={[-0.02, 6.81, 0.98]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.01} />
      <mesh geometry={nodes.Optic_Tract_L.geometry} material={materials['Brain_base.013']} position={[-0.02, 6.81, 0.98]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.01} />
      <mesh geometry={nodes.Superior_Colliculus_L.geometry} material={materials['Brain_base.014']} position={[-0.02, 6.81, 0.98]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.01} />
      <mesh geometry={nodes.Inferior_Colliculus_L.geometry} material={materials['Brain_base.015']} position={[-0.02, 6.81, 0.98]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.01} />
      <mesh geometry={nodes.Fornix.geometry} material={materials.Brain_internal_alt} position={[-0.02, 7.28, -0.05]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.302} />
      <mesh geometry={nodes.Indusium_griseum.geometry} material={materials['Brain_internal_alt.001']} position={[-0.02, 7.28, -0.05]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.302} />
      <mesh geometry={nodes.Medial_olfactory_striae.geometry} material={materials['Brain_internal_alt.002']} position={[-0.02, 7.28, -0.05]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.302} />
      <mesh geometry={nodes.Olfactory_bulb.geometry} material={materials['Brain_internal_alt.003']} position={[-0.02, 7.28, -0.05]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.302} />
      <mesh geometry={nodes.Cingulate_gyrus.geometry} material={materials['Brain_internal_alt.004']} position={[-0.02, 7.28, -0.05]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.302} />
      <mesh geometry={nodes.Commissura_fornicics.geometry} material={materials['Brain_internal_alt.005']} position={[-0.02, 7.28, -0.05]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.302} />
      <mesh geometry={nodes.Corpus_callosum.geometry} material={materials['Brain_internal_alt.006']} position={[-0.02, 7.28, -0.05]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.302} />
      <mesh geometry={nodes.Dentate_gyrus.geometry} material={materials['Brain_internal_alt.007']} position={[-0.02, 7.28, -0.05]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.302} />
      <mesh geometry={nodes.Hyppocampus.geometry} material={materials['Brain_internal_alt.008']} position={[-0.02, 7.28, -0.05]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.302} />
      <mesh geometry={nodes.Amygdala.geometry} material={materials['Brain_internal_alt.009']} position={[-0.02, 7.28, -0.05]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.302} />
      <mesh geometry={nodes.Hypothalamus.geometry} material={materials['Brain_internal_alt.010']} position={[-0.02, 7.28, -0.05]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.302} />
      <mesh geometry={nodes.Putamen.geometry} material={materials['Brain_internal_alt.011']} position={[-0.02, 7.28, -0.05]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.302} />
      <mesh geometry={nodes.Septal_nucleus.geometry} material={materials['Brain_internal_alt.012']} position={[-0.02, 7.28, -0.05]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.302} />
      <mesh geometry={nodes.Thalamus.geometry} material={materials['Brain_internal_alt.013']} position={[-0.02, 7.28, -0.05]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.302} />
      <mesh geometry={nodes.Arteries.geometry} material={materials.Arteries} position={[-0.022049, -161.81, 0.841417]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.01098} />
      <mesh geometry={nodes.Veins.geometry} material={materials.Veins} position={[-0.022049, -161.81, 0.841417]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.01098} />
      <mesh geometry={nodes.Cerebellum.geometry} material={materials.Cerebellum} position={[-0.035252, 0.222725, 0.828896]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={2.2} />
    </group>
  )
}
useGLTF.preload('src/brain-model/imgs/IntactBrain.glb')
