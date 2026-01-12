import React, { useRef, useState, useEffect, useMemo } from 'react';
import { useGLTF, OrbitControls } from '@react-three/drei';
import { useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Import models using Vite's asset handling
import intactBrainUrl from './imgs/IntactBrain.glb?url';
import partedBrainUrl from './imgs/partedBrain.glb?url';

// Model URLs for useGLTF
const INTACT_BRAIN = intactBrainUrl;
const PARTED_BRAIN = partedBrainUrl;

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
  },
  "Cerebral_Peduncle": {
    name: "Cerebral Peduncle",
    fact: "The cerebral peduncles are paired structures containing motor pathways connecting the cerebrum to the brainstem, crucial for voluntary movement control."
  },
  "Fourth_Ventricle_Wall": {
    name: "Fourth Ventricle",
    fact: "The fourth ventricle is a cavity filled with cerebrospinal fluid, located between the brainstem and cerebellum, connected to the central canal of the spinal cord."
  },
  "Tuber_Cinereum": {
    name: "Tuber Cinereum",
    fact: "The tuber cinereum is a hollow gray eminence between the mammillary bodies and optic chiasm, forming part of the floor of the third ventricle."
  },
  "Inferior_Colliculus_R": {
    name: "Right Inferior Colliculus",
    fact: "The inferior colliculus is the principal midbrain nucleus of the auditory pathway, processing sound localization and frequency discrimination."
  },
  "Superior_Colliculus_R": {
    name: "Right Superior Colliculus",
    fact: "The superior colliculus receives visual input and coordinates eye movements, playing a key role in directing attention to visual stimuli."
  },
  "Optic_Tract_R": {
    name: "Right Optic Tract",
    fact: "The optic tract carries visual information from the optic chiasm to the lateral geniculate nucleus, continuing the visual pathway to the brain."
  },
  "Optic_Tract_L": {
    name: "Left Optic Tract",
    fact: "Each optic tract contains nerve fibers from both eyes, carrying visual information from the opposite visual field to the thalamus."
  },
  "Superior_Colliculus_L": {
    name: "Left Superior Colliculus",
    fact: "The superior colliculi work together to generate saccadic eye movements and orient the head and eyes toward visual stimuli."
  },
  "Inferior_Colliculus_L": {
    name: "Left Inferior Colliculus",
    fact: "The inferior colliculi integrate auditory information from multiple brainstem nuclei before relaying it to the auditory cortex."
  },
  "Indusium_griseum": {
    name: "Indusium Griseum",
    fact: "The indusium griseum is a thin layer of gray matter on the upper surface of the corpus callosum, part of the limbic system's olfactory pathway."
  },
  "Medial_olfactory_striae": {
    name: "Medial Olfactory Striae",
    fact: "The medial olfactory striae carry olfactory information to the septal area and are involved in emotional responses to odors."
  },
  "Olfactory_bulb": {
    name: "Olfactory Bulb",
    fact: "The olfactory bulb is the first relay station for smell processing, containing complex neural circuits that begin odor discrimination."
  },
  "Cingulate_gyrus": {
    name: "Cingulate Gyrus",
    fact: "The cingulate gyrus is part of the limbic system involved in emotion formation, learning, memory, and executive function."
  },
  "Commissura_fornicics": {
    name: "Commissure of Fornix",
    fact: "The commissure of the fornix connects the two hippocampi, allowing communication between the memory centers of both hemispheres."
  },
  "Dentate_gyrus": {
    name: "Dentate Gyrus",
    fact: "The dentate gyrus is one of the few brain regions where neurogenesis occurs in adults, playing a key role in memory formation."
  },
  "Septal_nucleus": {
    name: "Septal Nuclei",
    fact: "The septal nuclei are involved in reward, reinforcement, and pleasure, with connections to the hippocampus and hypothalamus."
  }
};

// Complete brain part mapping with correct positions and scales from gltfjsx output
// Each part has: intactNode, partedNode, intactPos, partedPos, scale, materialName
const brainParts = {
  "Olfactory_Bulb_R": {
    intactNode: "Olfactory_Bulb_R",
    partedNode: "Olfactory_Bulb_R",
    intactPos: [2.74, 8.48, 1.12],
    partedPos: [2, 14, 5],
    scale: 0.01,
    materialName: "Olfactory_bulb"
  },
  "Olfactory_Bulb_L": {
    intactNode: "Olfactory_Bulb_L",
    partedNode: "Olfactory_Bulb_L",
    intactPos: [-0.02, 6.74, -3.13],
    partedPos: [-2, 14, 5],
    scale: 0.01,
    materialName: "Olfactory_bulb.001"
  },
  "Cerebrum_R": {
    intactNode: "Cerebrum_R",
    partedNode: "Cerebrum_R001",
    intactPos: [2.74468, 8.48406, 1.12119],
    partedPos: [8, 13, 0],
    scale: 0.01,
    materialName: "Cerebrum_R"
  },
  "Cerebrum_L": {
    intactNode: "Cerebrum_L",
    partedNode: "Cerebrum_L001",
    intactPos: [-2.78684, 8.5577, 1.11275],
    partedPos: [-8, 13, 0],
    scale: 0.01,
    materialName: "Cerebrum_L"
  },
  "Pons": {
    intactNode: "Pons",
    partedNode: "Pons001",
    intactPos: [-0.02, -161.81, 0.84],
    partedPos: [0, -164.56, 3],
    scale: 2.54,
    materialName: "Brain_base"
  },
  "Cerebral_Peduncle": {
    intactNode: "Cerebral_Peduncle",
    partedNode: "Cerebral_Peduncle001",
    intactPos: [-0.02, 2.88, 1.91],
    partedPos: [0, 15, 5],
    scale: 0.01,
    materialName: "Brain_base.001"
  },
  "Pituitary_Gland": {
    intactNode: "Pituitary_Gland",
    partedNode: "Pituitary_Gland001",
    intactPos: [-0.02, 6.81, 0.98],
    partedPos: [-0.2, 10.21, 0.82],
    scale: 0.01,
    materialName: "Brain_base.002"
  },
  "Fourth_Ventricle_Wall": {
    intactNode: "Fourth_Ventricle_Wall",
    partedNode: "Fourth_Ventricle_Wall001",
    intactPos: [-0.02, 6.81, 0.98],
    partedPos: [0, 8.61, 1],
    scale: 0.01,
    materialName: "Brain_base.003"
  },
  "Tuber_Cinereum": {
    intactNode: "Tuber_Cinereum",
    partedNode: "Tuber_Cinereum001",
    intactPos: [-0.02, 6.81, 0.98],
    partedPos: [0.07, 10.91, 0.71],
    scale: 0.01,
    materialName: "Brain_base.004"
  },
  "Mammillary_Body_R": {
    intactNode: "Mammillary_Body_R",
    partedNode: "Mammillary_Body_R001",
    intactPos: [-0.02, 6.81, 0.98],
    partedPos: [0.07, 10.91, 0.71],
    scale: 0.01,
    materialName: "Brain_base.005"
  },
  "Optic_Chiasm": {
    intactNode: "Optic_Chiasm",
    partedNode: "Optic_Chiasm001",
    intactPos: [-0.02, 6.81, 0.98],
    partedPos: [0, 16, 7],
    scale: 0.01,
    materialName: "Brain_base.006"
  },
  "Inferior_Colliculus_R": {
    intactNode: "Inferior_Colliculus_R",
    partedNode: "Inferior_Colliculus_R001",
    intactPos: [-0.02, 6.81, 0.98],
    partedPos: [1.33, 9.72, 0.76],
    scale: 0.01,
    materialName: "Brain_base.007"
  },
  "Superior_Colliculus_R": {
    intactNode: "Superior_Colliculus_R",
    partedNode: "Superior_Colliculus_R001",
    intactPos: [-0.02, 6.81, 0.98],
    partedPos: [0.07, 10.91, 0.71],
    scale: 0.01,
    materialName: "Brain_base.008"
  },
  "Pineal_Gland": {
    intactNode: "Pineal_Gland",
    partedNode: "Pineal_Gland001",
    intactPos: [-0.02, 6.81, 0.98],
    partedPos: [0, 16, 10],
    scale: 0.01,
    materialName: "Brain_base.009"
  },
  "Medulla_Oblongata": {
    intactNode: "Medulla_Oblongata",
    partedNode: "Medulla_Oblongata001",
    intactPos: [-0.02, 2.88, 1.91],
    partedPos: [0, 6, 3],
    scale: 0.01,
    materialName: "Brain_base.010"
  },
  "Optic_Tract_R": {
    intactNode: "Optic_Tract_R",
    partedNode: "Optic_Tract_R001",
    intactPos: [-0.02, 6.81, 0.98],
    partedPos: [2.52, 10.51, 0.86],
    scale: 0.01,
    materialName: "Brain_base.011"
  },
  "Mammillary_Body_L": {
    intactNode: "Mammillary_Body_L",
    partedNode: "Mammillary_Body_L001",
    intactPos: [-0.02, 6.81, 0.98],
    partedPos: [0.07, 10.91, 0.71],
    scale: 0.01,
    materialName: "Brain_base.012"
  },
  "Optic_Tract_L": {
    intactNode: "Optic_Tract_L",
    partedNode: "Optic_Tract_L001",
    intactPos: [-0.02, 6.81, 0.98],
    partedPos: [-2.47, 10.78, 0.32],
    scale: 0.01,
    materialName: "Brain_base.013"
  },
  "Superior_Colliculus_L": {
    intactNode: "Superior_Colliculus_L",
    partedNode: "Superior_Colliculus_L001",
    intactPos: [-0.02, 6.81, 0.98],
    partedPos: [0.07, 10.91, 0.71],
    scale: 0.01,
    materialName: "Brain_base.014"
  },
  "Inferior_Colliculus_L": {
    intactNode: "Inferior_Colliculus_L",
    partedNode: "Inferior_Colliculus_L001",
    intactPos: [-0.02, 6.81, 0.98],
    partedPos: [-1.38, 9.68, 0.98],
    scale: 0.01,
    materialName: "Brain_base.015"
  },
  "Fornix": {
    intactNode: "Fornix",
    partedNode: "Fornix001",
    intactPos: [-0.02, 7.28, -0.05],
    partedPos: [0, 18, 7],
    scale: 0.302,
    materialName: "Brain_internal_alt"
  },
  "Indusium_griseum": {
    intactNode: "Indusium_griseum",
    partedNode: "Indusium_griseum001",
    intactPos: [-0.02, 7.28, -0.05],
    partedPos: [0, 19, 7],
    scale: 0.302,
    materialName: "Brain_internal_alt.001"
  },
  "Medial_olfactory_striae": {
    intactNode: "Medial_olfactory_striae",
    partedNode: "Medial_olfactory_striae001",
    intactPos: [-0.02, 7.28, -0.05],
    partedPos: [0, 13, 4],
    scale: 0.302,
    materialName: "Brain_internal_alt.002"
  },
  "Olfactory_bulb": {
    intactNode: "Olfactory_bulb",
    partedNode: "Olfactory_bulb001",
    intactPos: [-0.02, 7.28, -0.05],
    partedPos: [0, 13.13, 1.2],
    scale: 0.302,
    materialName: "Brain_internal_alt.003"
  },
  "Cingulate_gyrus": {
    intactNode: "Cingulate_gyrus",
    partedNode: "Cingulate_gyrus001",
    intactPos: [-0.02, 7.28, -0.05],
    partedPos: [0, 25, 10],
    scale: 0.302,
    materialName: "Brain_internal_alt.004"
  },
  "Commissura_fornicics": {
    intactNode: "Commissura_fornicics",
    partedNode: "Commissura_fornicics001",
    intactPos: [-0.02, 7.28, -0.05],
    partedPos: [0, 17, 7],
    scale: 0.302,
    materialName: "Brain_internal_alt.005"
  },
  "Corpus_callosum": {
    intactNode: "Corpus_callosum",
    partedNode: "Corpus_callosum001",
    intactPos: [-0.02, 7.28, -0.05],
    partedPos: [0, 23, 10],
    scale: 0.302,
    materialName: "Brain_internal_alt.006"
  },
  "Dentate_gyrus": {
    intactNode: "Dentate_gyrus",
    partedNode: "Dentate_gyrus001",
    intactPos: [-0.02, 7.28, -0.05],
    partedPos: [0, 15, 5],
    scale: 0.302,
    materialName: "Brain_internal_alt.007"
  },
  "Hyppocampus": {
    intactNode: "Hyppocampus",
    partedNode: "Hyppocampus001",
    intactPos: [-0.02, 7.28, -0.05],
    partedPos: [0, 17, 7],
    scale: 0.302,
    materialName: "Brain_internal_alt.008"
  },
  "Amygdala": {
    intactNode: "Amygdala",
    partedNode: "Amygdala001",
    intactPos: [-0.02, 7.28, -0.05],
    partedPos: [0.07, 11.38, -0.32],
    scale: 0.302,
    materialName: "Brain_internal_alt.009"
  },
  "Hypothalamus": {
    intactNode: "Hypothalamus",
    partedNode: "Hypothalamus001",
    intactPos: [-0.02, 7.28, -0.05],
    partedPos: [0, 17, 7],
    scale: 0.302,
    materialName: "Brain_internal_alt.010"
  },
  "Putamen": {
    intactNode: "Putamen",
    partedNode: "Putamen001",
    intactPos: [-0.02, 7.28, -0.05],
    partedPos: [0, 22, 7],
    scale: 0.302,
    materialName: "Brain_internal_alt.011"
  },
  "Septal_nucleus": {
    intactNode: "Septal_nucleus",
    partedNode: "Septal_nucleus001",
    intactPos: [-0.02, 7.28, -0.05],
    partedPos: [0.07, 11.38, -0.32],
    scale: 0.302,
    materialName: "Brain_internal_alt.012"
  },
  "Thalamus": {
    intactNode: "Thalamus",
    partedNode: "Thalamus001",
    intactPos: [-0.02, 7.28, -0.05],
    partedPos: [0, 19, 7],
    scale: 0.302,
    materialName: "Brain_internal_alt.013"
  },
  "Arteries": {
    intactNode: "Arteries",
    partedNode: "Arteries001",
    intactPos: [-0.022049, -161.81, 0.841417],
    partedPos: [-8, -170, 0],
    scale: 0.01098,
    materialName: "Arteries"
  },
  "Veins": {
    intactNode: "Veins",
    partedNode: "Veins001",
    intactPos: [-0.022049, -161.81, 0.841417],
    partedPos: [8, -170, 0],
    scale: 0.01098,
    materialName: "Veins"
  },
  "Cerebellum": {
    intactNode: "Cerebellum",
    partedNode: "Cerebellum001",
    intactPos: [-0.035252, 0.222725, 0.828896],
    partedPos: [0, 13, 0],
    scale: 2.2,
    materialName: "Cerebellum"
  }
};

// Highlighted material for selected parts
const highlightMaterial = new THREE.MeshStandardMaterial({
  color: 0xFFD700,
  emissive: 0xFF8C00,
  emissiveIntensity: 0.6,
  transparent: false,
  opacity: 1.0,
});

// Hover material for parts when mouse is over them
const hoverMaterial = new THREE.MeshStandardMaterial({
  color: 0x88CCFF,
  emissive: 0x4488FF,
  emissiveIntensity: 0.3,
  transparent: false,
  opacity: 1.0,
});

// Individual brain part component for better performance and material handling
function BrainPart({ baseName, geometry, originalMaterial, position, scale, isSelected, onSelectPart }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  // Create a cloned material once for this part
  const normalMaterial = useMemo(() => {
    return originalMaterial ? originalMaterial.clone() : new THREE.MeshStandardMaterial({ color: 0xcccccc });
  }, [originalMaterial]);

  // Update cursor on hover
  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto';
  }, [hovered]);

  // Determine which material to use
  const getMaterial = () => {
    if (isSelected) return highlightMaterial;
    if (hovered && brainPartFacts[baseName]) return hoverMaterial;
    return normalMaterial;
  };

  return (
    <mesh
      ref={meshRef}
      geometry={geometry}
      material={getMaterial()}
      position={position}
      rotation={[-Math.PI / 2, 0, Math.PI]}
      scale={scale}
      userData={{ brainPartName: baseName }}
      onClick={(e) => {
        e.stopPropagation();
        if (brainPartFacts[baseName]) {
          onSelectPart(brainPartFacts[baseName]);
        }
      }}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        setHovered(false);
      }}
    />
  );
}

export function BrainModel({ expansionValue = 0, zoomLevel = 20, selectedPart = null, onSelectPart }) {
  // References
  const groupRef = useRef();
  const controlsRef = useRef();

  // State for tracking loading
  const [loading, setLoading] = useState(true);

  // Target position for camera to look at (for smooth panning)
  // Default target centers the main brain mass
  const defaultTarget = new THREE.Vector3(0, 7, 0);
  const targetPosition = useRef(defaultTarget.clone());
  const currentTarget = useRef(defaultTarget.clone());

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

  // Update target position when a part is selected
  useEffect(() => {
    if (selectedPart) {
      // Find the selected part's position
      const partKey = Object.keys(brainPartFacts).find(
        key => brainPartFacts[key].name === selectedPart.name
      );

      if (partKey && brainParts[partKey]) {
        const partConfig = brainParts[partKey];
        const intactPos = partConfig.intactPos;
        const partedPos = partConfig.partedPos;

        // Calculate interpolated position based on expansion
        const x = intactPos[0] + (partedPos[0] - intactPos[0]) * expansionValue;
        let y = intactPos[1] + (partedPos[1] - intactPos[1]) * expansionValue;
        const z = intactPos[2] + (partedPos[2] - intactPos[2]) * expansionValue;

        // Clamp y to keep camera from going too far down (for Veins/Arteries/Pons)
        y = Math.max(y, -5);

        targetPosition.current.set(x, y, z);
      }
    } else {
      // Reset to default position when no part is selected
      targetPosition.current.copy(defaultTarget);
    }
  }, [selectedPart, expansionValue]);

  // Smooth camera panning animation
  useFrame(() => {
    if (controlsRef.current) {
      // Smoothly interpolate the controls target to the target position
      const lerpFactor = 0.05; // Adjust for smoother or faster panning

      currentTarget.current.lerp(targetPosition.current, lerpFactor);
      controlsRef.current.target.copy(currentTarget.current);
      controlsRef.current.update();
    }
  });

  // Apply zoom level changes
  // zoomLevel: 5 (zoomed out) to 20 (zoomed in)
  // Map to camera z: 45 (far) to 12 (close)
  useEffect(() => {
    if (!camera) return;
    // Invert the relationship: higher zoomLevel = closer camera
    const minZ = 12;  // Closest zoom position
    const maxZ = 45;  // Farthest zoom position (more breathability)
    const normalizedZoom = (zoomLevel - 5) / (20 - 5); // 0 to 1
    camera.position.z = maxZ - normalizedZoom * (maxZ - minZ);
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

      <group ref={groupRef} dispose={null}>
        {Object.keys(brainParts).map(baseName => {
          const partConfig = brainParts[baseName];

          // Get geometry from intact model
          const intactNode = intactBrain.nodes[partConfig.intactNode];

          // Skip if node is missing
          if (!intactNode || !intactNode.geometry) {
            return null;
          }

          // Get material from intact model
          const material = intactBrain.materials[partConfig.materialName];

          // Linear interpolation between positions
          const intactPos = partConfig.intactPos;
          const partedPos = partConfig.partedPos;

          const x = intactPos[0] + (partedPos[0] - intactPos[0]) * expansionValue;
          const y = intactPos[1] + (partedPos[1] - intactPos[1]) * expansionValue;
          const z = intactPos[2] + (partedPos[2] - intactPos[2]) * expansionValue;

          // Check if this part is selected
          const isSelected = selectedPart && selectedPart.name === brainPartFacts[baseName]?.name;

          return (
            <BrainPart
              key={baseName}
              baseName={baseName}
              geometry={intactNode.geometry}
              originalMaterial={material}
              position={[x, y, z]}
              scale={partConfig.scale}
              isSelected={isSelected}
              onSelectPart={onSelectPart}
            />
          );
        })}
      </group>
    </>
  );
}

// Preload the models
useGLTF.preload(INTACT_BRAIN);
useGLTF.preload(PARTED_BRAIN);
