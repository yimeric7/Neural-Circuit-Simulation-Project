import { useEffect } from 'react';
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
            gltfScene.scene.rotation.x = Math.PI / 8;
            gltfScene.scene.position.y = 0;
            gltfScene.scene.scale.set(1, 1, 1);
            test.scene.add(gltfScene.scene);
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
