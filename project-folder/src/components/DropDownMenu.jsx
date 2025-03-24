import React, { useState } from "react";

// Brain part facts
const brainParts = [
  { id: "Cerebrum_R", name: "Right Cerebrum" },
  { id: "Cerebrum_L", name: "Left Cerebrum" },
  { id: "Cerebellum", name: "Cerebellum" },
  { id: "Pons", name: "Pons" },
  { id: "Medulla_Oblongata", name: "Medulla Oblongata" },
  { id: "Thalamus", name: "Thalamus" },
  { id: "Hypothalamus", name: "Hypothalamus" },
  { id: "Amygdala", name: "Amygdala" },
  { id: "Hyppocampus", name: "Hippocampus" },
  { id: "Corpus_callosum", name: "Corpus Callosum" },
  { id: "Pineal_Gland", name: "Pineal Gland" },
  { id: "Pituitary_Gland", name: "Pituitary Gland" },
  { id: "Olfactory_Bulb_R", name: "Right Olfactory Bulb" },
  { id: "Olfactory_Bulb_L", name: "Left Olfactory Bulb" },
];

export default function DropDownMenu({ onSelectPart }) {
    const [open, setOpen] = useState(false);
    
    const handleOpen = () => {
        setOpen(!open);
    };
    
    const handleSelect = (part) => {
        if (onSelectPart) {
            // Get the brain part facts from BrainModel.jsx
            onSelectPart(part.id);
        }
        setOpen(false);
    };
    
    return (
        <div className="dropdown">
            <button className="dropdown-btn" onClick={handleOpen}>
                <span className='btnText'>Select Brain Part</span>
            </button>
            
            {open ? (
                <div className="menu">
                    {brainParts.map((part) => (
                        <button 
                            key={part.id} 
                            onClick={() => handleSelect(part)}
                        >
                            <span className='menuOption'>{part.name}</span>
                        </button>
                    ))}
                </div>
            ) : null}
        </div>
    );
}