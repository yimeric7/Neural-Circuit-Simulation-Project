import React from 'react';

export default function BrainControlPanel({ 
  expansionValue, 
  setExpansionValue, 
  zoomLevel, 
  setZoomLevel 
}) {
  return (
    <div className="brain-control-panel">
      <div className="slider-container">
        <label>Expansion</label>
        <input 
          type="range" 
          min="0" 
          max="1" 
          step="0.01" 
          value={expansionValue} 
          onChange={(e) => setExpansionValue(parseFloat(e.target.value))} 
          className="slider"
        />
      </div>
      
      <div className="slider-container">
        <label>Zoom</label>
        <input 
          type="range" 
          min="5" 
          max="20" 
          step="0.5" 
          value={zoomLevel} 
          onChange={(e) => setZoomLevel(parseFloat(e.target.value))} 
          className="slider"
        />
      </div>
    </div>
  );
} 