import React, { useState } from "react";
import { useScene } from "../utils/BrainContext.jsx";

// this will take in the mesh arr & go map it or we have another comp.
export default function DropDownMenu () {
    const { menuItems } = useScene()
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <div className="dropdown" >
            <button  className="dropdown-btn" onClick={handleOpen}><span className='btnText'>Select Component ↓</span></button>
            {open ? (
                <div className="menu" >
                    {menuItems.map(item => {
                        return (
                            <button><span className='menuOption'>{item}</span></button>
                        )
                    })}
                </div>
            ) : null}
        </div>
    )
}