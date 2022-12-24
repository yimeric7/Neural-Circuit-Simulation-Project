import React, { createContext, useContext } from 'react'

const SceneContext = createContext()

export function useScene() {
    return useContext(SceneContext)
}

export function SceneProvider ({ children }) {
    const INTACT_VIEW = "Intact View";
    const PARTED_VIEW = "Parted View";
    const INTACT_BRAIN = 'src/brain-model/Brain.gltf';
    const PARTED_BRAIN = 'src/brain-model/partedBrain.glb';

    const value = {
        INTACT_BRAIN,
        PARTED_BRAIN,
        INTACT_VIEW,
        PARTED_VIEW
    }

    return (
        <SceneContext.Provider value={value}>
            {children}
        </SceneContext.Provider>
    )
}

