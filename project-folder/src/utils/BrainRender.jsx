import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";

export default function renderBrain(
  BrainComponent,
  cameraPosition = [0, 7, 25],
  props = {}
) {
    return (
        <Canvas camera={{ position: cameraPosition, fov: 50 }}>
            <Suspense fallback={null}>
                <BrainComponent {...props} />
            </Suspense>
        </Canvas>
    );
}