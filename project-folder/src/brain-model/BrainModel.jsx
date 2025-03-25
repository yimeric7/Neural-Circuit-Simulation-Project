import React, { useRef, useState, useEffect } from 'react';
import { useGLTF, OrbitControls } from '@react-three/drei';
import { useThree } from '@react-three/fiber';

// Exact model paths
const INTACT_BRAIN = 'src/brain-model/imgs/IntactBrain.glb';
const PARTED_BRAIN = 'src/brain-model/imgs/PartedBrain.glb';

// Brain part facts
export const brainPartFacts = {
  "Cerebrum_R": {
    name: "Right Cerebrum",
    fact: "The right cerebrum is responsible for creativity, spatial ability, artistic and musical skills, and controls the left side of the body."
  },
  "Cerebrum_L": {
    name: "Left Cerebrum",
    fact: "The left cerebrum houses language centers like Broca's and Wernicke's areas, logical reasoning, and controls the right side of the body."
  },
  "Cerebellum": {
    name: "Cerebellum",
    fact: "The cerebellum, though only 10% of brain volume, contains over 50% of total neurons. It coordinates voluntary movement, posture, balance, and motor learning."
  },
  "Pons": {
    name: "Pons",
    fact: "The pons relays signals from the forebrain to the cerebellum, regulates breathing, controls arousal and sleep, and transmits sensory information."
  },
  "Medulla_Oblongata": {
    name: "Medulla Oblongata",
    fact: "The medulla oblongata controls autonomic functions including breathing, heart rate, blood pressure, swallowing, and vomiting reflexes."
  },
  "Thalamus": {
    name: "Thalamus",
    fact: "The thalamus acts as a relay station, processing sensory information before sending it to the cerebral cortex. It regulates consciousness, sleep, and alertness."
  },
  "Hypothalamus": {
    name: "Hypothalamus",
    fact: "The hypothalamus links the endocrine and nervous systems, regulating homeostasis including body temperature, hunger, thirst, fatigue, and circadian rhythms."
  },
  "Amygdala": {
    name: "Amygdala",
    fact: "The amygdala processes emotional responses, particularly fear conditioning, memory consolidation, and decision-making based on emotional context."
  },
  "Hyppocampus": {
    name: "Hippocampus",
    fact: "The hippocampus is crucial for forming explicit long-term memories and spatial navigation. Damage can lead to anterograde amnesia."
  },
  "Corpus_callosum": {
    name: "Corpus Callosum",
    fact: "The corpus callosum is the largest white matter structure with 200-250 million axonal projections connecting the hemispheres and enabling interhemispheric communication."
  },
  "Pineal_Gland": {
    name: "Pineal Gland",
    fact: "The pineal gland secretes melatonin in response to darkness, regulating the sleep-wake cycle. It contains light-sensitive cells similar to those in the retina."
  },
  "Pituitary_Gland": {
    name: "Pituitary Gland",
    fact: "The pituitary gland produces nine hormones that regulate growth, reproduction, and stress response. It has anterior and posterior lobes with distinct functions."
  },
  "Olfactory_Bulb_R": {
    name: "Right Olfactory Bulb",
    fact: "The olfactory bulb processes smell information, with each bulb containing approximately 8,000 glomeruli that sort incoming odor signals."
  },
  "Olfactory_Bulb_L": {
    name: "Left Olfactory Bulb",
    fact: "The olfactory system is the only sensory system that bypasses the thalamus, sending signals directly to the limbic system and cortex."
  },
  "Fornix": {
    name: "Fornix",
    fact: "The fornix is a C-shaped bundle of nerve fibers that connects the hippocampus to the hypothalamus, crucial for memory consolidation and recall."
  },
  "Putamen": {
    name: "Putamen",
    fact: "The putamen works with the caudate nucleus as part of the basal ganglia to regulate movement and influence various types of learning."
  },
  "Optic_Chiasm": {
    name: "Optic Chiasm",
    fact: "The optic chiasm is where optic nerves partially cross, allowing information from both eyes to be processed by both hemispheres for binocular vision."
  },
  "Mammillary_Body_R": {
    name: "Right Mammillary Body",
    fact: "The mammillary bodies are part of the limbic system and play a role in recollective memory. Damage can cause Korsakoff's syndrome."
  },
  "Mammillary_Body_L": {
    name: "Left Mammillary Body",
    fact: "The mammillary bodies receive information from the hippocampus via the fornix and project to the thalamus through the mammillothalamic tract."
  },
  "Arteries": {
    name: "Cerebral Arteries",
    fact: "The brain receives blood from two pairs of arteries: the internal carotid arteries and the vertebral arteries. These form the Circle of Willis at the base of the brain."
  },
  "Veins": {
    name: "Cerebral Veins",
    fact: "Cerebral veins drain into sinuses within the dura mater, which ultimately empty into the internal jugular veins. They don't have valves like other veins in the body."
  }
};

// Direct mapping from intact to parted nodes based on screenshot
const nodeMapping = {
  "Olfactory_Bulb_R": { intact: [2.74, 8.48, 1.12], parted: [2, 14, 5] },
  "Olfactory_Bulb_L": { intact: [-0.02, 6.74, -3.13], parted: [-2, 14, 5] },
  "Cerebrum_R": { intact: [2.74468, 8.48406, 1.12119], parted: [8, 13, 0] },
  "Cerebrum_L": { intact: [-2.78684, 8.5577, 1.11275], parted: [-8, 13, 0] },
  "Pons": { intact: [-0.02, -161.81, 0.84], parted: [0, -164.56, 3] },
  "Cerebral_Peduncle": { intact: [-0.02, 2.88, 1.91], parted: [0, 15, 5] },
  "Pituitary_Gland": { intact: [-0.02, 6.81, 0.98], parted: [-0.2, 10.21, 0.82] },
  "Fourth_Ventricle_Wall": { intact: [-0.02, 6.81, 0.98], parted: [0, 8.61, 1] },
  "Tuber_Cinereum": { intact: [-0.02, 6.81, 0.98], parted: [0.07, 10.91, 0.71] },
  "Mammillary_Body_R": { intact: [-0.02, 6.81, 0.98], parted: [0.07, 10.91, 0.71] },
  "Optic_Chiasm": { intact: [-0.02, 6.81, 0.98], parted: [0, 16, 7] },
  "Inferior_Colliculus_R": { intact: [-0.02, 6.81, 0.98], parted: [1.33, 9.72, 0.76] },
  "Superior_Colliculus_R": { intact: [-0.02, 6.81, 0.98], parted: [0.07, 10.91, 0.71] },
  "Pineal_Gland": { intact: [-0.02, 6.81, 0.98], parted: [0, 16, 10] },
  "Medulla_Oblongata": { intact: [-0.02, 2.88, 1.91], parted: [0, 6, 3] },
  "Optic_Tract_R": { intact: [-0.02, 6.81, 0.98], parted: [2.52, 10.51, 0.86] },
  "Mammillary_Body_L": { intact: [-0.02, 6.81, 0.98], parted: [0.07, 10.91, 0.71] },
  "Optic_Tract_L": { intact: [-0.02, 6.81, 0.98], parted: [-2.47, 10.78, 0.32] },
  "Superior_Colliculus_L": { intact: [-0.02, 6.81, 0.98], parted: [0.07, 10.91, 0.71] },
  "Inferior_Colliculus_L": { intact: [-0.02, 6.81, 0.98], parted: [-1.38, 9.68, 0.98] },
  "Fornix": { intact: [-0.02, 7.28, -0.05], parted: [0, 18, 7] },
  "Indusium_griseum": { intact: [-0.02, 7.28, -0.05], parted: [0, 19, 7] },
  "Medial_olfactory_striae": { intact: [-0.02, 7.28, -0.05], parted: [0, 13, 4] },
  "Olfactory_bulb": { intact: [-0.02, 7.28, -0.05], parted: [0, 13.13, 1.2] },
  "Cingulate_gyrus": { intact: [-0.02, 7.28, -0.05], parted: [0, 25, 10] },
  "Commissura_fornicics": { intact: [-0.02, 7.28, -0.05], parted: [0, 17, 7] },
  "Corpus_callosum": { intact: [-0.02, 7.28, -0.05], parted: [0, 23, 10] },
  "Dentate_gyrus": { intact: [-0.02, 7.28, -0.05], parted: [0, 15, 5] },
  "Hyppocampus": { intact: [-0.02, 7.28, -0.05], parted: [0, 17, 7] },
  "Amygdala": { intact: [-0.02, 7.28, -0.05], parted: [0.07, 11.38, -0.32] },
  "Hypothalamus": { intact: [-0.02, 7.28, -0.05], parted: [0, 17, 7] },
  "Putamen": { intact: [-0.02, 7.28, -0.05], parted: [0, 22, 7] },
  "Septal_nucleus": { intact: [-0.02, 7.28, -0.05], parted: [0.07, 11.38, -0.32] },
  "Thalamus": { intact: [-0.02, 7.28, -0.05], parted: [0, 19, 7] },
  "Arteries": { intact: [-0.022049, -161.81, 0.841417], parted: [-8, -170, 0] },
  "Veins": { intact: [-0.022049, -161.81, 0.841417], parted: [8, -170, 0] },
  "Cerebellum": { intact: [-0.035252, 0.222725, 0.828896], parted: [0, 13, 0] }
};

// Scales and rotations from screenshots
const nodeScales = {
  "Cerebellum": 2.2,
  "Pons": 2.54,
  "Arteries": 0.01098,
  "Veins": 0.01098,
  "Fornix": 0.302,
  "Indusium_griseum": 0.302,
  "Medial_olfactory_striae": 0.302,
  "Olfactory_bulb": 0.302,
  "Cingulate_gyrus": 0.302,
  "Commissura_fornicics": 0.302,
  "Corpus_callosum": 0.302,
  "Dentate_gyrus": 0.302,
  "Hyppocampus": 0.302,
  "Amygdala": 0.302,
  "Hypothalamus": 0.302,
  "Putamen": 0.302,
  "Septal_nucleus": 0.302,
  "Thalamus": 0.302
};

export function BrainModel({ expansionValue = 0, zoomLevel = 20, selectedPart = null, onSelectPart }) {
  // References
  const groupRef = useRef();
  const controlsRef = useRef();
  
  // State for tracking loading
  const [loading, setLoading] = useState(true);
  
  // Three.js hooks
  const { camera } = useThree();
  
  // Load both models
  const intactBrain = useGLTF(INTACT_BRAIN);
  const partedBrain = useGLTF(PARTED_BRAIN);
  
  // Set loading state when models are loaded
  useEffect(() => {
    if (intactBrain && partedBrain) {
      setLoading(false);
    }
  }, [intactBrain, partedBrain]);
  
  // Apply zoom level changes
  useEffect(() => {
    if (!camera) return;
    camera.position.z = 20 - zoomLevel;
  }, [camera, zoomLevel]);
  
  // Simple loading indicator
  if (loading) {
    return (
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshBasicMaterial color="#8888ff" wireframe />
      </mesh>
    );
  }
  
  // Handle click on a brain part
  const handlePartClick = (e, partName) => {
    e.stopPropagation();
    if (brainPartFacts[partName]) {
      onSelectPart(brainPartFacts[partName]);
    }
  };
  
  return (
    <>
      <OrbitControls 
        ref={controlsRef}
        enableZoom={false}
        enablePan={false}
        minPolarAngle={0.1}
        maxPolarAngle={Math.PI - 0.1}
      />
      
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 10, 5]} intensity={0.7} />
      
      <group ref={groupRef} rotation={[-Math.PI / 2, 0, Math.PI]} dispose={null}>
        {Object.keys(nodeMapping).map(nodeName => {
          // Only render if we have this node in intact brain and its mapping
          if (!intactBrain.nodes[nodeName] || !nodeMapping[nodeName]) return null;
          
          // Get the node and its geometry
          const node = intactBrain.nodes[nodeName];
          if (!node.geometry) return null;
          
          // Get the exact intact and parted positions from our mapping
          const intactPos = nodeMapping[nodeName].intact;
          const partedPos = nodeMapping[nodeName].parted;
          
          // Linear interpolation between positions
          const x = intactPos[0] + (partedPos[0] - intactPos[0]) * expansionValue;
          const y = intactPos[1] + (partedPos[1] - intactPos[1]) * expansionValue;
          const z = intactPos[2] + (partedPos[2] - intactPos[2]) * expansionValue;
          
          // Get material based on the node name
          const materialName = nodeName.includes('_') ? nodeName.split('_')[0] : nodeName;
          const material = intactBrain.materials[materialName] || 
                         intactBrain.materials[`${materialName}.001`] || 
                         intactBrain.materials[nodeName] || 
                         intactBrain.materials[Object.keys(intactBrain.materials)[0]];
          
          // Get scale (default to 0.01 if not specified)
          const scale = nodeScales[nodeName] || 0.01;
          
          // Check if this part is selected
          const isSelected = selectedPart && selectedPart.name === brainPartFacts[nodeName]?.name;
          
          return (
            <mesh
              key={nodeName}
              geometry={node.geometry}
              material={isSelected ? undefined : material.clone()}
              position={[x, y, z]}
              scale={scale}
              userData={{ brainPartName: nodeName }}
              onClick={(e) => handlePartClick(e, nodeName)}
              onPointerOver={(e) => {
                e.stopPropagation();
                document.body.style.cursor = 'pointer';
              }}
              onPointerOut={(e) => {
                e.stopPropagation();
                document.body.style.cursor = 'auto';
              }}
            >
              {isSelected && (
                <meshStandardMaterial
                  attach="material"
                  color="#FFD700"
                  emissive="#FF8C00"
                  emissiveIntensity={0.6}
                  transparent
                  opacity={1.0}
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