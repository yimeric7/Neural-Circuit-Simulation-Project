import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Mesh } from "three";
import UserNavbar from "../components/Navbar";
import Footer from "../components/Footer.jsx";

function Cube() {
    const meshRef = useRef();

    useFrame(() => {
        if (!meshRef.current) {
            return;
        }

        meshRef.current.rotation.x += 0.01;
        meshRef.current.rotation.y += 0.01;
    });

    return (
        <mesh ref={meshRef}>
            <boxGeometry/>
            <meshStandardMaterial />
        </mesh>
    )
}

export default function Test() {
    return (
        <div style={{backgroundColor: '#F5F5F5', width: '100%', margin: 'auto'}}>
            <UserNavbar />
            <div style={{width: '100%', height: '900px'}}>
                <Canvas>
                    <Cube />
                </Canvas>
            </div>
            <Footer/>
        </div>
    )
}