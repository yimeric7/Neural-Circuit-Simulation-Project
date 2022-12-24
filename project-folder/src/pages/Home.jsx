import React from 'react'
import UserNavbar from '../components/Navbar.jsx'
import Brain from '../brain-main/Brain.jsx'
import Test from '../pages/Test'
import Footer from "../components/Footer.jsx";
import AboutUs from "./AboutUs.jsx";

export default function Home() {

    return (
        <>
            <Test />
            {/* <Brain /> */}
            {/*<AboutUs/>*/}
            <Footer />
        </>
    )
}