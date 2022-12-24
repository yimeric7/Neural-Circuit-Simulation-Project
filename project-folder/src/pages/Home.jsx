import React from 'react'
import UserNavbar from '../components/Navbar.jsx'
import Brain from '../brain-main/Brain.jsx'
import Footer from "../components/Footer.jsx";
import AboutUs from "./AboutUs.jsx";

export default function Home() {

    return (
        <>
            <UserNavbar />
            <Brain />
            {/*<AboutUs/>*/}
            <Footer />
        </>
    )
}