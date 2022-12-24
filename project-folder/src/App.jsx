import React, { useEffect, useState } from 'react';
import './App.css'
import { Route, Routes } from "react-router";
import AboutUs from "./pages/AboutPage/AboutUs.jsx";
import { SceneProvider } from "./utils/BrainContext.jsx";
import Home from "./pages/HomePage/Home.jsx";
import { RingLoader } from "react-spinners";

export default function App() {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000) // <- Set loading screen animation time
    }, [])

    return (
        <SceneProvider>
            {loading ? (<RingLoader
                color="#36d7b7"
                size={333}
                speedMultiplier={0.5}
                cssOverride={{position: 'absolute', top: '32%', left: '38%',
                    transform: 'transform: translate(-32%, -38%)'}}
            />) : (
            <Routes>
                <Route path={'/'} element={<Home />}/>
                <Route path={'/about'} element={<AboutUs />}/>
            </Routes>)}
        </SceneProvider>
    );
}
