import React, { useRef, useState, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useThree, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Vector3 } from 'three';
import * as THREE from 'three';
import { gsap } from 'gsap';

// Brain model paths
const INTACT_BRAIN = 'src/brain-model/imgs/IntactBrain.glb';
const PARTED_BRAIN = 'src/brain-model/imgs/PartedBrain.glb';

// Facts about brain parts
export const brainPartFacts = {
  "Cerebrum_R": {
    name: "Right Cerebrum",
    fact: "The cerebrum is the largest part of the brain, responsible for higher cognitive functions like thinking, learning, and memory."
  },
  "Cerebrum_L": {
    name: "Left Cerebrum",
    fact: "The left cerebrum typically controls language, logic, and analytical thinking in most people."
  },
  "Cerebellum": {
    name: "Cerebellum",
    fact: "The cerebellum coordinates movement and balance, containing more neurons than the rest of the brain combined."
  },
  "Pons": {
    name: "Pons",
    fact: "The pons connects the cerebellum to the brain stem and helps regulate breathing and sleep."
  },
  "Medulla_Oblongata": {
    name: "Medulla Oblongata",
    fact: "The medulla oblongata controls vital involuntary functions like heart rate, breathing, and blood pressure."
  },
  "Thalamus": {
    name: "Thalamus",
    fact: "The thalamus relays sensory and motor signals to the cerebral cortex and regulates consciousness and sleep."
  },
  "Hypothalamus": {
    name: "Hypothalamus",
    fact: "Though small, the hypothalamus controls body temperature, hunger, thirst, and circadian rhythms."
  },
  "Amygdala": {
    name: "Amygdala",
    fact: "The amygdala processes emotions, particularly fear responses and memory formation."
  },
  "Hyppocampus": {
    name: "Hippocampus",
    fact: "The hippocampus is crucial for forming new memories and spatial navigation."
  },
  "Corpus_callosum": {
    name: "Corpus Callosum",
    fact: "The corpus callosum is a thick band of nerve fibers connecting the two hemispheres of the brain."
  },
  "Pineal_Gland": {
    name: "Pineal Gland",
    fact: "The pineal gland produces melatonin, a hormone that regulates sleep patterns."
  },
  "Pituitary_Gland": {
    name: "Pituitary Gland",
    fact: "Often called the 'master gland', the pituitary controls other endocrine glands and hormone production."
  },
  "Olfactory_Bulb_R": {
    name: "Right Olfactory Bulb",
    fact: "The olfactory bulb processes smell information from the nose to the brain."
  },
  "Olfactory_Bulb_L": {
    name: "Left Olfactory Bulb",
    fact: "Humans can distinguish between approximately 1 trillion different scents through the olfactory system."
  },
};

export function BrainModel({ expansionValue = 0, zoomLevel = 20, selectedPart = null, onSelectPart }) {
  // Reference to the group containing all brain parts
  const groupRef = useRef();
  // Reference to the orbit controls
  const controlsRef = useRef();
  
  // Load both brain models
  const intactBrain = useGLTF(INTACT_BRAIN);
  const partedBrain = useGLTF(PARTED_BRAIN);
  
  // State for position interpolation
  const [meshPositions, setMeshPositions] = useState({});
  
  // State to track previous selected part for animation
  const [prevSelectedPart, setPrevSelectedPart] = useState(null);
  
  // Track which model's nodes and materials to use based on expansion
  const { nodes, materials } = expansionValue < 0.5 ? intactBrain : partedBrain;
  
  // Setup camera zoom
  const { camera } = useThree();
  
  useEffect(() => {
    camera.position.set(0, 0, 40 - zoomLevel);
  }, [camera, zoomLevel]);
  
  // Focus camera on selected part with animation
  useEffect(() => {
    if (selectedPart && controlsRef.current) {
      // Find the mesh name that corresponds to this selected part
      const meshName = Object.keys(brainPartFacts).find(
        key => brainPartFacts[key].name === selectedPart.name
      );
      
      if (meshName && meshPositions[meshName]) {
        const [x, y, z] = meshPositions[meshName];
        
        // Create animation for camera position
        const cameraPosition = new Vector3(x, y, z + 10);
        
        // Animate the camera position
        gsap.to(camera.position, {
          x: cameraPosition.x,
          y: cameraPosition.y,
          z: cameraPosition.z,
          duration: 1.5,
          ease: "power2.inOut"
        });
        
        // Animate the controls target
        gsap.to(controlsRef.current.target, {
          x: x,
          y: y,
          z: z,
          duration: 1.5,
          ease: "power2.inOut",
          onUpdate: () => controlsRef.current.update()
        });
        
        // Remember this part for future animations
        setPrevSelectedPart(selectedPart);
      }
    }
  }, [selectedPart, meshPositions, camera]);
  
  // Handle mesh positions based on expansion value
  useEffect(() => {
    const newPositions = {};
    
    // Get all mesh names from both brain models to ensure we capture everything
    const intactMeshNames = Object.keys(intactBrain.nodes).filter(name => 
      name !== 'Scene' && !name.includes('001') && name !== '__root__');
    
    const partedMeshNames = Object.keys(partedBrain.nodes).filter(name => 
      name !== 'Scene' && !name.includes('__root__'));
    
    // Use a Set to eliminate duplicates
    const allMeshNames = new Set([...intactMeshNames]);
    partedMeshNames.forEach(name => {
      // Remove the 001 suffix if present for comparison
      const baseName = name.replace('001', '');
      allMeshNames.add(baseName);
    });
    
    // Calculate interpolated positions for each mesh
    Array.from(allMeshNames).forEach(name => {
      // Find corresponding parts in both models
      const intactNode = intactBrain.nodes[name];
      const partedNode = partedBrain.nodes[name] || partedBrain.nodes[`${name}001`];
      
      if (intactNode && partedNode) {
        // Interpolate between intact and parted positions
        const x = intactNode.position.x + (partedNode.position.x - intactNode.position.x) * expansionValue;
        const y = intactNode.position.y + (partedNode.position.y - intactNode.position.y) * expansionValue;
        const z = intactNode.position.z + (partedNode.position.z - intactNode.position.z) * expansionValue;
        
        newPositions[name] = [x, y, z];
      } else if (intactNode) {
        // If only intact node exists, use its position
        newPositions[name] = [intactNode.position.x, intactNode.position.y, intactNode.position.z];
      } else if (partedNode) {
        // If only parted node exists, use its position
        const baseName = name.replace('001', '');
        newPositions[baseName] = [partedNode.position.x, partedNode.position.y, partedNode.position.z];
      }
    });
    
    setMeshPositions(newPositions);
  }, [expansionValue, intactBrain.nodes, partedBrain.nodes]);

  // Handle mesh click
  const handleMeshClick = (e, partName) => {
    e.stopPropagation();
    
    // If this part has facts, pass it to the parent component
    if (brainPartFacts[partName]) {
      onSelectPart(brainPartFacts[partName]);
    }
  };
  
  // Determine which meshes to render
  const meshesToRender = [];
  Object.keys(nodes).forEach(name => {
    if (name !== 'Scene' && !name.includes('001') && name !== '__root__' && nodes[name].geometry) {
      meshesToRender.push(name);
    }
  });
  
  return (
    <>
      <OrbitControls 
        ref={controlsRef} 
        enablePan={false} 
        minPolarAngle={0.1} 
        maxPolarAngle={Math.PI - 0.1} 
        enableDamping={true}
        dampingFactor={0.1}
        zoomSpeed={0.5}
        rotateSpeed={0.5}
        enableZoom={false} // Disable zoom on scroll
      />
      <ambientLight intensity={1.2} />
      <directionalLight position={[5, 10, 5]} intensity={0.8} />
      <directionalLight position={[-5, -10, -5]} intensity={0.4} />
      
      <group ref={groupRef} dispose={null} rotation={[0, 0, 0]}>
        {meshesToRender.map(name => {
          // Find material
          const materialName = name.includes('_') ? name.split('_')[0] : name;
          const material = materials[materialName] || 
                         materials[`${materialName}.001`] || 
                         materials[name] || 
                         materials[Object.keys(materials)[0]];
          
          // Get position
          const position = meshPositions[name] || [0, 0, 0];
          
          // Determine if this part is selected
          const isSelected = selectedPart && selectedPart.name === brainPartFacts[name]?.name;
          
          return (
            <mesh 
              key={name}
              geometry={nodes[name].geometry}
              material={isSelected ? undefined : material}
              position={position}
              rotation={[-Math.PI / 2, 0, Math.PI]}
              scale={0.01}
              onClick={(e) => handleMeshClick(e, name)}
              onPointerOver={(e) => { e.stopPropagation(); document.body.style.cursor = 'pointer'; }}
              onPointerOut={(e) => { e.stopPropagation(); document.body.style.cursor = 'auto'; }}
            >
              {isSelected && (
                <meshStandardMaterial
                  attach="material"
                  color="#FFD700"
                  emissive="#FF8C00"
                  emissiveIntensity={0.5}
                  transparent
                  opacity={0.9}
                  metalness={0.5}
                  roughness={0.2}
                />
              )}
            </mesh>
          );
        })}
      </group>
    </>
  );
}

// Preload the models
useGLTF.preload(INTACT_BRAIN);
useGLTF.preload(PARTED_BRAIN); 