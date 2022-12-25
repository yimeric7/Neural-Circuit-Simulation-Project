import { useScene } from "../utils/BrainContext.jsx";
import { useSnapshot } from "valtio";
import React from "react";

export default function Pointer() {
    const { state } = useScene()
    const snap = useSnapshot(state);
    return (
        <div style={{ position: 'absolute', top: '85%', left: '40%',
            transform: 'transform: translate(-85%, -40%)',
            fontSize: '60px', fontWeight: 'bold', lineHeight: '60px'}}>
            {snap.current}
        </div>
    )
}