import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";

export default function renderBrain(
  BrainComponent, 
  cameraPosition = [0, 0, 20], 
  props = {}
) {
    return (
        <Canvas camera={{ position: cameraPosition }}>
            <ambientLight intensity={1.2} />
            <Suspense fallback={null}>
                <BrainComponent {...props} />
            </Suspense>
        </Canvas>
    );
}