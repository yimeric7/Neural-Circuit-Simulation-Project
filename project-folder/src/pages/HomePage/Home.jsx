import React, { useState, useEffect } from 'react';
import UserNavbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";
import { useScene } from "../../utils/BrainContext.jsx";
import renderBrain from '../../utils/BrainRender.jsx';
import DropDownMenu from "../../components/DropDownMenu.jsx";
import BrainControlPanel from "../../components/BrainControlPanel.jsx";
import BrainInfoCard from "../../components/BrainInfoCard.jsx";
import { BrainModel, brainPartFacts } from '../../brain-model/BrainModel.jsx';

export default function Home() {
    // Get context values and state setters
    const { 
        expansionValue, 
        setExpansionValue, 
        zoomLevel, 
        setZoomLevel, 
        selectBrainPart 
    } = useScene();
    
    // Local state for the selected brain part
    const [selectedPart, setSelectedPart] = useState(null);
    
    // Render the brain model with current parameters
    const brainView = renderBrain(
        BrainModel, 
        [0, 0, 30], 
        { 
            expansionValue, 
            zoomLevel,
            selectedPart,
            onSelectPart: (partInfo) => {
                setSelectedPart(partInfo);
                selectBrainPart(partInfo);
            }
        }
    );
    
    // Handle selecting a brain part from the dropdown
    const handleSelectPartFromDropdown = (partId) => {
        if (brainPartFacts[partId]) {
            setSelectedPart(brainPartFacts[partId]);
        }
    };

    return (
        <div style={{ backgroundColor: '#F5F5F5', width: '100%', margin: 'auto' }}>
            <UserNavbar />
            <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
                <div className="canvas-container">
                    {brainView}
                </div>
                
                <DropDownMenu onSelectPart={handleSelectPartFromDropdown} />
                
                <BrainControlPanel 
                    expansionValue={expansionValue}
                    setExpansionValue={setExpansionValue}
                    zoomLevel={zoomLevel}
                    setZoomLevel={setZoomLevel}
                />
                
                {selectedPart && <BrainInfoCard selectedPart={selectedPart} />}
            </div>
            <Footer />
        </div>
    );
}