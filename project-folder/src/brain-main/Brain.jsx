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
            gltfScene.scene.rotation.x = Math.PI / 8;
            gltfScene.scene.position.y = -5;
            gltfScene.scene.scale.set(50, 50, 50);
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

    return (
        <div>
            <canvas id="brainCanvas"/>
        </div>
    );
}
