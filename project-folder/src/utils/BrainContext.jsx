import React, { createContext, useContext, useEffect } from 'react'
import { proxy } from 'valtio'

const SceneContext = createContext()

export function useScene() {
    return useContext(SceneContext)
}

export function SceneProvider ({ children }) {
    const INTACT_VIEW = "Intact View";
    const PARTED_VIEW = "Parted View";
    const INTACT_BRAIN = 'src/brain-model/imgs/IntactBrain.glb';
    const PARTED_BRAIN = 'src/brain-model/imgs/PartedBrain.glb';

    // depending on what's being selected (description will display)
    const state = proxy({
        current: null,
        items: {
            Olfactory_Bulb_R: '#f002ff',
            Olfactory_Bulb_L: '#f002ff',
            Cerebrum_R: '#f002ff',
            Cerebrum_L: '#f002ff',
            Brain_base: '#ffffff'
        }
    })

    // changes based on what's being selected
    useEffect(() => {

    }, [state])

    const menuItems = [
        'Olfactory_Bulb_R',
        'Olfactory_Bulb_L',
        'Cerebrum_R',
        'Cerebrum_L',
        'Brain_base']

    const value = {
        INTACT_BRAIN,
        PARTED_BRAIN,
        INTACT_VIEW,
        PARTED_VIEW,
        state,
        menuItems
    }

    return (
        <SceneContext.Provider value={value}>
            {children}
        </SceneContext.Provider>
    )
}

