import { useEffect, useState } from 'react';
import SceneInit from '../utils/SceneInit';
import { renderNewModel } from './BrainRender.js'

export default function Brain() {
    const INTACT_BRAIN = 'src/brain-model/Brain.gltf'
    const PARTED_BRAIN = 'src/brain-model/partedBrain.glb'
    const [buttonText, setButtonText] = useState("Parted View"); 
    const [view, setView] = useState(PARTED_BRAIN)
    const myCanvas = new SceneInit('brainCanvas');

    useEffect(() => {
        renderNewModel(myCanvas, view)
    }, [])
   
    const changeView = () => {
        buttonText != 'Intact View' ? setButtonText('Intact View') : setButtonText("Parted View");
        // swapping views
        view != INTACT_BRAIN ? setView(PARTED_BRAIN) : setView(INTACT_BRAIN) // <-- not working yet
    }

    return (
        <div style={{backgroundColor: '#F5F5F5'}}>
            {/*<button onClick={handleClick}>click to close</button>*/}
            <canvas id="brainCanvas" />
            <button className='btn-ms-2' onClick={() => changeView()}>{buttonText}</button>
        </div>
    );
}
