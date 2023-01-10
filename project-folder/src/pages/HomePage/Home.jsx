import React, { useEffect } from 'react'
import UserNavbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";
import { IntactBrain } from '../../brain-model/IntactBrain.jsx';
import renderBrain from '../../utils/BrainRender.jsx';
import DropDownMenu from "../../components/DropDownMenu.jsx";
import Pointer from '../../components/Pointer.jsx';

export default function Home() {
    return (
        <div style={{ backgroundColor: '#F5F5F5', width: '100%', margin: 'auto' }}>
            <UserNavbar />
            <Pointer />
            <div style={{ width: '100%', height: '900px'}}>
                <DropDownMenu />
                {renderBrain(IntactBrain, [10, 1, 27])}
            </div>
            <Footer />
        </div>
    )
}