import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { OrbitControls, ContactShadows, Environment, Stage } from '@react-three/drei'

export default function renderBrain(TYPE_BRAIN, coordinates = new Array[3]) {
    return (
        <Canvas camera={{ position: coordinates }} style={{ marginLeft: '25%', width:'50%', height:'50%'}}>
            <ambientLight intensity={1.5} />
            <spotLight intensity={1} angle={[5,20,20]}/>
            <Suspense fallback={null}>
            <Stage intensity={.5} contactShadowOpacity={5} /> 

                <TYPE_BRAIN />
                <Environment files='src/assets/rustig.hdr'/>
                <ContactShadows rotation-x={Math.PI / 2} position={[0, -0.8, 0]} opacity={0.25} width={10} height={10} blur={2} far={1} />
            </Suspense>
            <OrbitControls enableZoom={false}/>
        </Canvas>
    )
}