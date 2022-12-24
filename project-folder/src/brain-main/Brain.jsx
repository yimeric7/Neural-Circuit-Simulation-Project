import { useEffect, useState } from 'react';
import { renderNewModel, createNewPartedBrain, createNewIntactBrain } from './BrainRender.js'
import { useScene } from '../utils/BrainContext.jsx'

export default function Brain() {
    const { myCanvas, PARTED_BRAIN, INTACT_BRAIN } = useScene();
    const [buttonText, setButtonText] = useState("Intact View");

    // Initial Render of intact brain model
    useEffect(() => {
        renderNewModel(myCanvas, INTACT_BRAIN)
    }, [])

    const changeView = () => {
        if (buttonText !== 'Intact View') {
            setButtonText('Intact View')
            createNewIntactBrain(myCanvas, INTACT_BRAIN)
        } else {
            setButtonText("Parted View")
            createNewPartedBrain(myCanvas, PARTED_BRAIN)
        }
    }

    return (
        <div style={{backgroundColor: '#F5F5F5', width: '100%', margin: 'auto'}}>
            <canvas id='brainCanvas' />
            <button className='btn-ms-2' onClick={() => changeView()}>{buttonText}</button>
        </div>
    );
}
