import React, { useState } from 'react'
import UserNavbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";
import { IntactBrain } from '../../brain-model/IntactBrain.jsx';
import { PartedBrain } from '../../brain-model/PartedBrain.jsx';
import { useScene } from "../../utils/BrainContext.jsx";
import renderBrain from '../../utils/BrainRender.jsx';
import DropDownMenu from "../../components/DropDownMenu.jsx";
import {useSnapshot} from "valtio";

export default function Home() {
    const { INTACT_VIEW, PARTED_VIEW } = useScene();
    const [buttonText, setButtonText] = useState(INTACT_VIEW);
    const [view, setView] = useState(renderBrain(IntactBrain, [20, 0, 20]))

    const changeView = () => {
        if (buttonText !== INTACT_VIEW) {
            setButtonText(INTACT_VIEW)
            setView(renderBrain(IntactBrain, [20, 0, 20]))
        } else {
            setButtonText(PARTED_VIEW)
            setView(renderBrain(PartedBrain, [20, 0, 50]))
        }
    }

    function PickerTest() {
        const { state } = useScene()
        const snap = useSnapshot(state);
        return (
            <div style={{ position: 'absolute', top: '85%', left: '40%',
                transform: 'transform: translate(-85%, -40%)',
                fontSize: '60px', fontWeight: 'bold', lineHeight: '60px'}}>
                {snap.current}
            </div>
        )
    }

    return (
        <div style={{ backgroundColor: '#F5F5F5', width: '100%', margin: 'auto' }}>
            <UserNavbar />
            <PickerTest/>
            <div style={{ width: '100%', height: '900px' }}>
                <DropDownMenu />
                <button className='view-button' position='center' onClick={() => changeView()}>
                    <span className='btnText' >{buttonText}</span></button>
                {view}
            </div>
            <Footer />
        </div>
    )
}