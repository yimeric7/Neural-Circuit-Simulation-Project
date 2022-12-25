import React, { createContext, useContext, useEffect } from 'react'
import { proxy } from 'valtio'

const SceneContext = createContext()

export function useScene() {
    return useContext(SceneContext)
}

export function SceneProvider ({ children }) {
    const INTACT_BRAIN = 'src/brain-model/imgs/IntactBrain.glb';
    let menuItems = [];

    // depending on what's being selected (description will display)
    const state = proxy({
        current: null,
        items: {
            Olfactory_Bulb_R: '#ffffff',
            Olfactory_Bulb_L: '#ffffff',
            Cerebrum_R: '#ffffff',
            Cerebrum_L: '#ffffff',
            Brain_base: '#ffffff'
        }
    })

    // changes based on what's being selected
    useEffect(() => {

    }, [state])

    const value = {
        INTACT_BRAIN,
        state,
        menuItems
    }

    return (
        <SceneContext.Provider value={value}>
            {children}
        </SceneContext.Provider>
    )
}

