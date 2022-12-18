import { useEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import SceneInit from '../utils/SceneInit';

export default function Brain() {
    useEffect(() => {
        const test = new SceneInit('brainCanvas');
        test.initialize();
        test.animate();

        let loadedModel;
        const brainLoader = new GLTFLoader();
        brainLoader.load('src/brain-model/scene.gltf', (gltfScene) => {
            loadedModel = gltfScene;
            gltfScene.scene.rotation.y = Math.PI / 8;
            gltfScene.scene.position.y = 0;
            gltfScene.scene.scale.set(35, 35, 35);
            test.scene.add(gltfScene.scene);
        });

        const animate = () => {
            if (loadedModel) {
                loadedModel.scene.rotation.x += 0.01;
                loadedModel.scene.rotation.y += 0.01;
                loadedModel.scene.rotation.z += 0.01;
            }
            requestAnimationFrame(animate);
        };
        animate();
    }, []);

    return (
        <div>
            <canvas id="brainCanvas"/>
        </div>
    );
}
