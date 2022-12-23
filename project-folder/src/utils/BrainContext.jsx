import React, { createContext, useContext } from 'react'
import SceneInit from "./SceneInit.js";

const SceneContext = createContext()

export function useScene() {
    return useContext(SceneContext)
}

export function SceneProvider ({ children }) {
    const INTACT_BRAIN = 'src/brain-model/Brain.gltf'
    const PARTED_BRAIN = 'src/brain-model/partedBrain.glb'
    let myCanvas = new SceneInit('brainCanvas');

    const value = {
        myCanvas,
        INTACT_BRAIN,
        PARTED_BRAIN
    }

    return (
        <SceneContext.Provider value={value}>
            {children}
        </SceneContext.Provider>
    )
}