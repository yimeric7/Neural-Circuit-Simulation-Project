import React, { useState } from 'react';
import './App.css'
import {Route, Routes} from "react-router";
import Home from "./pages/Home.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import {SceneProvider} from "./utils/BrainContext.jsx";

export default function App() {
    return (
        <SceneProvider>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/about'} element={<AboutUs/>}/>
            </Routes>
        </SceneProvider>
    );
}
