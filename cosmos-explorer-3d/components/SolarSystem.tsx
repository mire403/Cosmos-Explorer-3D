import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, PerspectiveCamera } from '@react-three/drei';
import { PlanetData } from '../types';
import { PLANET_DATA } from '../constants';
import { Planet } from './Planet';
import * as THREE from 'three';

interface SolarSystemProps {
  selectedPlanet: PlanetData | null;
  onPlanetSelect: (planet: PlanetData) => void;
}

export const SolarSystem: React.FC<SolarSystemProps> = ({ selectedPlanet, onPlanetSelect }) => {
  return (
    <div className="w-full h-full absolute inset-0 bg-black">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 40, 60]} fov={60} />
        <color attach="background" args={['#050505']} />
        
        <ambientLight intensity={0.1} />
        {/* Sun Light */}
        <pointLight position={[0, 0, 0]} intensity={2.5} distance={200} decay={1} color="#FFF8E7" />
        
        <Stars radius={300} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

        {/* The Sun */}
        <mesh position={[0, 0, 0]} onClick={(e) => { e.stopPropagation(); /* Maybe select sun? */ }}>
            <sphereGeometry args={[5, 64, 64]} />
            <meshBasicMaterial color="#FFD700" />
            {/* Sun Glow simulation */}
            <mesh scale={[1.2, 1.2, 1.2]}>
                <sphereGeometry args={[5, 64, 64]} />
                <meshBasicMaterial color="#FF8C00" transparent opacity={0.2} side={THREE.BackSide} />
            </mesh>
        </mesh>

        {PLANET_DATA.map((planet) => (
          <Planet 
            key={planet.id} 
            data={planet} 
            isSelected={selectedPlanet?.id === planet.id}
            onSelect={onPlanetSelect}
          />
        ))}

        <OrbitControls 
            enablePan={true} 
            enableZoom={true} 
            minDistance={20} 
            maxDistance={200}
            autoRotate={!selectedPlanet} // Stop rotation if looking at a planet
            autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};