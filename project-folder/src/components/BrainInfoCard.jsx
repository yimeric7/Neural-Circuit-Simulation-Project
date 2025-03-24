import React from 'react';

export default function BrainInfoCard({ selectedPart }) {
  if (!selectedPart) return null;
  
  return (
    <div className="brain-info-card">
      <h2>{selectedPart.name}</h2>
      <p>{selectedPart.fact}</p>
    </div>
  );
} 