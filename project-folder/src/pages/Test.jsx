import React, { useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei';
import { AmbientLight, Mesh } from "three";
import UserNavbar from "../components/Navbar";
import Footer from "../components/Footer.jsx";
const PARTED_BRAIN = 'src/brain-model/partedBrain.glb';
import { IntactBrain } from '../brain-model/IntactBrain';
import { PartedBrain } from '../brain-model/PartedBrain';

const renderBrain = (TYPE_BRAIN, coordinates = new Array[3]) => {
    return (
        <Canvas camera={{ position: coordinates }}>
            <ambientLight intensity={1.2} />
            <Suspense fallback={null}>
                <TYPE_BRAIN />
            </Suspense>
        </Canvas>
    )
}


export default function Test() {
    return (
        <div style={{ backgroundColor: '#F5F5F5', width: '100%', margin: 'auto' }}>
            <UserNavbar />
            <div style={{ width: '100%', height: '900px' }}>
                {renderBrain(IntactBrain, [20, 0, 20])}
            </div>
            <Footer />
        </div>
    )
}