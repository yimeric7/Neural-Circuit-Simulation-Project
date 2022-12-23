import { Children, useEffect } from 'react';
import { MeshDistanceMaterial } from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import SceneInit from '../utils/SceneInit';

export default function Brain() {
    const test = new SceneInit('brainCanvas');
    useEffect(() => {
        test.initialize();
        test.animate();
        

        let loadedModel;
        const brainLoader = new GLTFLoader();
        brainLoader.load('src/brain-model/brain.gltf', (gltfScene) => {


            loadedModel = gltfScene;
            const model = loadedModel.scene;
            const meshArr = model.children;

            model.rotation.x = Math.PI / 8;
            model.position.y = 0;
            model.scale.set(1, 1, 1);
           // model.MeshDistanceMaterial = 10
            test.scene.add(model);
            console.log(model)

          //  model.getObjectByName("Cerebellum").material.color.setHex(0x00ff00)
          meshArr.forEach(object => {
          // object.material.color.setHex(Math.random()*0xffffff)
           // object.position.y = 10
           //object.customDistanceMaterial.polygonOffsetUnits(10)
           //object.customDistanceMaterial.polygonOffset(10)
          // object.customDistanceMaterial.polygonOffsetFactor(10)
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
    //
    // const handleClick = () => {
    //     test.scene.clear()
    // }

    return (
        <div>
            {/*<button onClick={handleClick}>click to close</button>*/}
            <canvas id="brainCanvas"/>
        </div>
    );
}
