import React, { useState } from "react";

// this will take in the mesh arr & go map it or we have another comp.
export default function DropDownMenu () {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(!open);
    };
    return (
        <div className="dropdown" >
            <button  className="dropdown-btn" onClick={handleOpen}><span className='btnText'>Select Component ⮛</span></button>
            {open ? (
                <div className="menu" >
                    <button><span className='menuOption'>Menu 1</span></button>
                    <button><span className='menuOption'>Menu 2</span></button>
                    <button><span className='menuOption'>Menu 1</span></button>
                    <button><span className='menuOption'>Menu 2</span></button>
                    <button><span className='menuOption'>Menu 1</span></button>
                    <button><span className='menuOption'>Menu 2</span></button>
                    <button><span className='menuOption'>Menu 1</span></button>
                    <button><span className='menuOption'>Menu 2</span></button>
                    <button><span className='menuOption'>Menu 1</span></button>
                    <button><span className='menuOption'>Menu 2</span></button>
                </div>
            ) : null}
        </div>
    )
}