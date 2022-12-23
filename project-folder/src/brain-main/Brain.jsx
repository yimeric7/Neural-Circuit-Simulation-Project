import { Children, useEffect, useState } from 'react';
import { MeshDistanceMaterial } from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import SceneInit from '../utils/SceneInit';
const INTACT_BRAIN = 'src/brain-model/Brain.gltf'
const PARTED_BRAIN = 'src/brain-model/partedBrain.glb'

export default function Brain() {
    const myCanvas = new SceneInit('brainCanvas');



    const render = (canvas, BRAIN) => {
        useEffect(() => {
            canvas.initialize();
            canvas.animate();

            let loadedModel;
            const brainLoader = new GLTFLoader();

            //brainLoader.load('src/brain-model/brain.gltf', (gltfScene) => {
            brainLoader.load(BRAIN, (gltfScene) => {


                loadedModel = gltfScene;
                const model = loadedModel.scene;
                const meshArr = model.children;

                model.rotation.x = Math.PI / 8;
                model.position.y = 0;
                model.scale.set(1, 1, 1);
                canvas.scene.add(model);
                console.log(model)
                //  model.getObjectByName("Cerebellum").material.color.setHex(0x00ff00)
                meshArr.forEach(object => {
                    //  object.material.color.setHex(Math.random()*0xffffff)

                })

            });

            const animate = () => {
                if (loadedModel) {
                    loadedModel.scene.rotation.y += 0.01;
                }
                requestAnimationFrame(animate);
            };

            animate();

        }, []);


    }
    //
    // const handleClick = () => {
    //     test.scene.clear()
    // }

    
    const [buttonText, setButtonText] = useState("Parted View"); 
    const [view, setView] = useState(INTACT_BRAIN)
   
    const changeView = () => {
        buttonText != 'Intact View' ? setButtonText('Intact View') : setButtonText("Parted View");
        // swapping views
        view != INTACT_BRAIN ? setView(PARTED_BRAIN) : setView(INTACT_BRAIN) // <-- not working yet
    }



    return (
        <div>
            {/*<button onClick={handleClick}>click to close</button>*/}
            <canvas id="brainCanvas" />
            <button className='btn-ms-2' onClick={() => changeView()}>{buttonText}</button>
            {render(myCanvas, view)}
        </div>
    );
}
