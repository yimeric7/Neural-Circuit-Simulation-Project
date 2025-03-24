import React from 'react';
import UserNavBar from "../../components/Navbar.jsx";
import './About.css'
import Footer from "../../components/Footer.jsx";

export default function AboutUs() {
    return (
        <div style={{backgroundColor: '#F5F5F5'}}>
            <UserNavBar/>
            <div style={{backgroundColor: '#F5F5F5', width: '100%'}}>
                <div style={{width: '100%', textAlign: 'center'}}>
                    <span style={{fontSize: '70px', lineHeight: '70px',
                        color: 'rgba(146, 158, 246, 0.279)'}}>ABOUT</span>
                    <span style={{fontSize: '70px', lineHeight: '70px',
                        fontWeight: 'bold', color: '#1E2D7B'}}>US</span>
                </div>

                {/*<UserNavBar />*/}
                <div style={{width: '100%', textAlign: 'center', padding: '2rem', maxWidth: '800px', margin: 'auto'}}>
                    Zen Lin - tried to build this tool like 3-4 years ago but failed miserably. He came back in 2025 equipped with cursor and claude 3.7 sonnet to finish the job. It is like someone grew up to beat the level they could never beat as a kid.
                </div>
            </div>
            <Footer/>
        </div>
    );
}