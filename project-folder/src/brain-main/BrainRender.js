import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

export const renderNewModel = (canvas, BRAIN) => {
    canvas.initialize();
    canvas.animate();
    let loadedModel;

    const brainLoader = new GLTFLoader();
    brainLoader.load(BRAIN, (gltfScene) => {
        loadedModel = gltfScene;
        const model = loadedModel.scene;
        model.rotation.x = Math.PI / 8;
        model.position.y = 0;
        model.scale.set(1, 1, 1);
        canvas.scene.add(model);
    });

    const animate = () => {
        if (loadedModel) {
            loadedModel.scene.rotation.y += 0.01;
        }
        requestAnimationFrame(animate);
    };

    animate();
}

export const createNewPartedBrain = (canvas, BRAIN) => {
    canvas.clearRender()
    renderNewModel(canvas, BRAIN)
}

export const createNewIntactBrain = (canvas, BRAIN) => {
    canvas.clearRender()
    renderNewModel(canvas, BRAIN)
}
