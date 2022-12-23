import React, { useEffect } from 'react';
import { useScene } from '../utils/BrainContext.jsx'
import UserNavBar from "../components/Navbar.jsx";
import './About.css'

export default function AboutUs() {
    const { myCanvas } = useScene()

    // On load, remove brain (this isn't working due to how I currently have clear render
    // Will have to change it to delete scene, rather than delete model.
    useEffect(() => {
        myCanvas.clearRender()
    })

    return (
        <>
            <div style={{padding: 'auto'}}>
                <UserNavBar/>
            </div>
            <div style={{backgroundColor: '#F5F5F5', width: '100%'}}>
                <div style={{width: '100%', textAlign: 'center'}}>
                    <span style={{fontSize: '70px', lineHeight: '70px',
                        color: 'rgba(146, 158, 246, 0.279)'}}>ABOUT</span>
                    <span style={{fontSize: '70px', lineHeight: '70px',
                        fontWeight: 'bold', color: '#1E2D7B'}}>US</span>
                </div>

                {/*<UserNavBar />*/}
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <div style={{display: 'flex', justifySelf: 'center',
                        justifyContent: 'center', marginTop: '10%',
                        margin: 'auto'}}>
                        <span>ABOUT </span><span>US</span>
                    </div>
                    asddfksajgfkfsdkfasddfksajgfkfsdkfasddfksajgfkfsdkfasddfksajgfkfsdkf
                    asddfksajgfkfsdkfasddfksajgfkfsdkfasddfksajgfkfsdkfasddfksajgfkfs
                    dkfasddfksajgfkfsdkfasddfksajgfkfsdkfasddfksajgfkfsdkfasddfksajgf
                    kfsdkfasddfksajgfkfsdkfasddfksajgfkfsdkfasddfksajgfkfsdkf
                    asddfksajgfkfsdkfasddfksajgfkfsdkfasddfksajgfkfsdkfasddfksajgfkfsdkf
                    asddfksajgfkfsdkfasddfksajgfkfsdkfasddfksajgfkfsdkfasddfksajgfkfs
                    dkfasddfksajgfkfsdkfasddfksajgfkfsdkfasddfksajgfkfsdkfasddfksajgf
                    kfsdkfasddfksajgfkfsdkfasddfksajgfkfsdkfasddfksajgfkfsdkf
                    asddfksajgfkfsdkfasddfksajgfkfsdkfasddfksajgfkfsdkfasddfksajgfkfsdkf
                    asddfksajgfkfsdkfasddfksajgfkfsdkfasddfksajgfkfsdkfasddfksajgfkfs
                    dkfasddfksajgfkfsdkfasddfksajgfkfsdkfasddfksajgfkfsdkfasddfksajgf
                    kfsdkfasddfksajgfkfsdkfasddfksajgfkfsdkfasddfksajgfkfsdkf
                    asddfksajgfkfsdkfasddfksajgfkfsdkfasddfksajgfkfsdkfasddfksajgfkfsdkf
                    asddfksajgfkfsdkfasddfksajgfkfsdkfasddfksajgfkfsdkfasddfksajgfkfs
                    dkfasddfksajgfkfsdkfasddfksajgfkfsdkfasddfksajgfkfsdkfasddfksajgf
                    kfsdkfasddfksajgfkfsdkfasddfksajgfkfsdkfasddfksajgfkfsdkf
                    <p>your mom</p>
                </div>
            </div>
        </>
    );
}