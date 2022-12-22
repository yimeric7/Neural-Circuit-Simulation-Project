import React, { useState } from 'react';
import Brain from './brain-main/Brain.jsx'
import Navbar from './components/Navbar.jsx'
import Header from './components/Header.jsx'
import './App.css'
import {Route, Routes} from "react-router";
import Home from "./pages/Home.jsx";
import AboutUs from "./pages/AboutUs.jsx";

export default function App() {
    return (
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/about'} element={<AboutUs/>}/>

            {/*<Navbar/>*/}
             {/*<Header/>*/}
             {/*<Brain />*/}
        </Routes>
    );
}
