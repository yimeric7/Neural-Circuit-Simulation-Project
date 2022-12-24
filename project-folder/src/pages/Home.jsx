import React, { useState, Suspense, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei';
import UserNavbar from "../components/Navbar";
import Footer from "../components/Footer.jsx";
import { IntactBrain } from '../brain-model/IntactBrain';
import { PartedBrain } from '../brain-model/PartedBrain';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { MDBBtn } from 'mdb-react-ui-kit';
const INTACT_VIEW = "Intact View"; const PARTED_VIEW = "Parted View"

const DropDownMenu = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(!open);
    };
    return (
        <div className="dropdown" >
      <button  className="dropdown-btn" onClick={handleOpen}><span className='btnText'>Select Component ⮛</span></button>
      {open ? (
        <div className="menu" >
            <button><span className='menuOption'>Menu 1</span></button>
            <button><span className='menuOption'>Menu 2</span></button>
            <button><span className='menuOption'>Menu 1</span></button>
            <button><span className='menuOption'>Menu 2</span></button>
            <button><span className='menuOption'>Menu 1</span></button>
            <button><span className='menuOption'>Menu 2</span></button>
            <button><span className='menuOption'>Menu 1</span></button>
            <button><span className='menuOption'>Menu 2</span></button>
            <button><span className='menuOption'>Menu 1</span></button>
            <button><span className='menuOption'>Menu 2</span></button>
        </div>
      ) : null}
    </div>
    )
}

const renderBrain = (TYPE_BRAIN, coordinates = new Array[3]) => {
    return (
        <Canvas camera={{ position: coordinates }}>
            <ambientLight intensity={1.2} />
            <Suspense fallback={null}>
                <TYPE_BRAIN />
            </Suspense>
        </Canvas>
    )
}

export default function Home() {

    const [buttonText, setButtonText] = useState(PARTED_VIEW);
    //const [view, setView] = useState(IntactBrain)

    const changeView = () => {
        buttonText != INTACT_VIEW ? setButtonText(INTACT_VIEW) : setButtonText(PARTED_VIEW)
    }



    return (
        <div style={{ backgroundColor: '#F5F5F5', width: '100%', margin: 'auto' }}>
            <UserNavbar />
            <div style={{ width: '100%', height: '900px' }}>
                <DropDownMenu />
                <button className='view-button' position='center' onClick={() => changeView()}><span className='btnText' >{buttonText}</span></button>
                {renderBrain(IntactBrain, [20, 0, 20])}
            </div>
            <Footer />
        </div>
    )
}