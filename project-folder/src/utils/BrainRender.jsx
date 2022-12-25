import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { OrbitControls, ContactShadows, Environment } from '@react-three/drei'

export default function renderBrain(TYPE_BRAIN, coordinates = new Array[3]) {
    return (
        <Canvas camera={{ position: coordinates }}>
            <ambientLight intensity={0.3} />
            <spotLight intensity={0.1} angle={[5,20,20]}/>
            <Suspense fallback={null}>
                <TYPE_BRAIN />
                <Environment files='src/assets/env.hdr'/>
                <ContactShadows rotation-x={Math.PI / 2} position={[0, -0.8, 0]} opacity={0.25} width={10} height={10} blur={2} far={1} />
            </Suspense>
            <OrbitControls enableZoom={false} />
        </Canvas>
    )
}