import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";

export default function renderBrain(TYPE_BRAIN, coordinates = new Array[3]) {
    return (
        <Canvas camera={{ position: coordinates }}>
            <ambientLight intensity={1.2} />
            <Suspense fallback={null}>
                <TYPE_BRAIN />
            </Suspense>
        </Canvas>
    )
}