import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useScene } from "../utils/BrainContext.jsx";

export function PartedBrain(props) {
  const { PARTED_BRAIN } = useScene()
  const { nodes, materials } = useGLTF(PARTED_BRAIN)
  const meshRef = useRef();

  useFrame(() => {
    if (!meshRef.current) {
      return;
    }
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <group ref={meshRef} {...props} dispose={null}>
      <mesh geometry={nodes.Olfactory_Bulb_L.geometry} material={materials['Olfactory_bulb.001']} position={[-2, 14, 5]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.01} />
      <mesh geometry={nodes.Cerebrum_R001.geometry} material={materials.Cerebrum_R} position={[8, 13, 0]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.01} />
      <mesh geometry={nodes.Cerebrum_L001.geometry} material={materials.Cerebrum_L} position={[-8, 13, 0]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.01} />
      <mesh geometry={nodes.Pons001.geometry} material={materials.Brain_base} position={[0, -164.56, 3]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={2.54} />
      <mesh geometry={nodes.Cerebral_Peduncle001.geometry} material={materials['Brain_base.001']} position={[0, 15, 5]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.01} />
      <mesh geometry={nodes.Pituitary_Gland001.geometry} material={materials['Brain_base.002']} position={[-0.2, 10.21, 0.82]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.01} />
      <mesh geometry={nodes.Fourth_Ventricle_Wall001.geometry} material={materials['Brain_base.003']} position={[0, 8.61, 1]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.01} />
      <mesh geometry={nodes.Tuber_Cinereum001.geometry} material={materials['Brain_base.004']} position={[0.07, 10.91, 0.71]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.01} />
      <mesh geometry={nodes.Mammillary_Body_R001.geometry} material={materials['Brain_base.005']} position={[0.07, 10.91, 0.71]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.01} />
      <mesh geometry={nodes.Optic_Chiasm001.geometry} material={materials['Brain_base.006']} position={[0, 16, 7]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.01} />
      <mesh geometry={nodes.Inferior_Colliculus_R001.geometry} material={materials['Brain_base.007']} position={[1.33, 9.72, 0.76]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.01} />
      <mesh geometry={nodes.Superior_Colliculus_R001.geometry} material={materials['Brain_base.008']} position={[0.07, 10.91, 0.71]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.01} />
      <mesh geometry={nodes.Pineal_Gland001.geometry} material={materials['Brain_base.009']} position={[0, 16, 10]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.01} />
      <mesh geometry={nodes.Medulla_Oblongata001.geometry} material={materials['Brain_base.010']} position={[0, 6, 3]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.01} />
      <mesh geometry={nodes.Optic_Tract_R001.geometry} material={materials['Brain_base.011']} position={[2.52, 10.51, 0.86]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.01} />
      <mesh geometry={nodes.Mammillary_Body_L001.geometry} material={materials['Brain_base.012']} position={[0.07, 10.91, 0.71]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.01} />
      <mesh geometry={nodes.Optic_Tract_L001.geometry} material={materials['Brain_base.013']} position={[-2.47, 10.78, 0.32]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.01} />
      <mesh geometry={nodes.Superior_Colliculus_L001.geometry} material={materials['Brain_base.014']} position={[0.07, 10.91, 0.71]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.01} />
      <mesh geometry={nodes.Inferior_Colliculus_L001.geometry} material={materials['Brain_base.015']} position={[-1.38, 9.68, 0.98]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.01} />
      <mesh geometry={nodes.Fornix001.geometry} material={materials.Brain_internal_alt} position={[0, 18, 7]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.3} />
      <mesh geometry={nodes.Indusium_griseum001.geometry} material={materials['Brain_internal_alt.001']} position={[0, 19, 7]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.3} />
      <mesh geometry={nodes.Medial_olfactory_striae001.geometry} material={materials['Brain_internal_alt.002']} position={[0, 13, 4]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.3} />
      <mesh geometry={nodes.Olfactory_bulb001.geometry} material={materials['Brain_internal_alt.003']} position={[0, 13.13, 1.2]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.3} />
      <mesh geometry={nodes.Cingulate_gyrus001.geometry} material={materials['Brain_internal_alt.004']} position={[0, 25, 10]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.3} />
      <mesh geometry={nodes.Commissura_fornicics001.geometry} material={materials['Brain_internal_alt.005']} position={[0, 17, 7]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.3} />
      <mesh geometry={nodes.Corpus_callosum001.geometry} material={materials['Brain_internal_alt.006']} position={[0, 23, 10]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.3} />
      <mesh geometry={nodes.Dentate_gyrus001.geometry} material={materials['Brain_internal_alt.007']} position={[0, 15, 5]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.3} />
      <mesh geometry={nodes.Hyppocampus001.geometry} material={materials['Brain_internal_alt.008']} position={[0, 17, 7]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.3} />
      <mesh geometry={nodes.Amygdala001.geometry} material={materials['Brain_internal_alt.009']} position={[0.07, 11.38, -0.32]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.3} />
      <mesh geometry={nodes.Hypothalamus001.geometry} material={materials['Brain_internal_alt.010']} position={[0, 17, 7]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.3} />
      <mesh geometry={nodes.Putamen001.geometry} material={materials['Brain_internal_alt.011']} position={[0, 22, 7]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.3} />
      <mesh geometry={nodes.Septal_nucleus001.geometry} material={materials['Brain_internal_alt.012']} position={[0.07, 11.38, -0.32]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.3} />
      <mesh geometry={nodes.Thalamus001.geometry} material={materials['Brain_internal_alt.013']} position={[0, 19, 7]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.3} />
      <mesh geometry={nodes.Arteries001.geometry} material={materials.Arteries} position={[-8, -170, 0]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.01} />
      <mesh geometry={nodes.Veins001.geometry} material={materials.Veins} position={[8, -170, 0]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.01} />
      <mesh geometry={nodes.Cerebellum001.geometry} material={materials.Cerebellum} position={[0, 13, 0]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={2.2} />
      <mesh geometry={nodes.Inferior_Colliculus_L002.geometry} material={materials['Brain_base.015']} position={[-1.38, 9.68, 0.98]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.01} />
      <mesh geometry={nodes.Olfactory_Bulb_R.geometry} material={materials['Olfactory_bulb.003']} position={[2, 14, 5]} rotation={[Math.PI / 2, 0, Math.PI]} scale={-0.01} />
    </group>
  )
}

useGLTF.preload('src/brain-model/imgs/PartedBrain.glb')
