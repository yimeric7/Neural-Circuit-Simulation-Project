import React, { createContext, useContext, useState } from 'react'
import { brainPartFacts } from '../brain-model/BrainModel.jsx'

const SceneContext = createContext()

export function useScene() {
    return useContext(SceneContext)
}

export function SceneProvider({ children }) {
    // State for brain model controls
    const [expansionValue, setExpansionValue] = useState(0); // 0 = intact, 1 = fully parted
    const [zoomLevel, setZoomLevel] = useState(15); // Controls camera zoom level
    const [selectedPart, setSelectedPart] = useState(null);
    
    // Function to handle selecting a brain part
    const selectBrainPart = (partInfo) => {
        setSelectedPart(partInfo);
    };
    
    // Function to handle selecting a brain part by ID from the dropdown
    const selectBrainPartById = (partId) => {
        if (brainPartFacts[partId]) {
            setSelectedPart(brainPartFacts[partId]);
        }
    };

    const value = {
        expansionValue,
        setExpansionValue,
        zoomLevel,
        setZoomLevel,
        selectedPart,
        selectBrainPart,
        selectBrainPartById
    }

    return (
        <SceneContext.Provider value={value}>
            {children}
        </SceneContext.Provider>
    )
}

