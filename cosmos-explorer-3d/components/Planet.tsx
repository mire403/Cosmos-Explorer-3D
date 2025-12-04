import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, Text } from '@react-three/drei';
import * as THREE from 'three';
import { PlanetProps } from '../types';

export const Planet: React.FC<PlanetProps> = ({ data, isSelected, onSelect }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const orbitRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  // Random starting angle so planets aren't all aligned
  const initialAngle = useRef(Math.random() * Math.PI * 2);

  useFrame(({ clock }) => {
    if (orbitRef.current && meshRef.current) {
      const t = clock.getElapsedTime() * data.speed * 0.2 + initialAngle.current;
      
      // Calculate position
      const x = Math.cos(t) * data.distance;
      const z = Math.sin(t) * data.distance;
      
      meshRef.current.position.set(x, 0, z);
      
      // Self rotation
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={orbitRef}>
      {/* Orbit Path Visual */}
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[data.distance - 0.1, data.distance + 0.1, 128]} />
        <meshBasicMaterial color="#333" opacity={0.3} transparent side={THREE.DoubleSide} />
      </mesh>

      {/* The Planet */}
      <mesh
        ref={meshRef}
        onClick={(e) => {
          e.stopPropagation();
          onSelect(data);
        }}
        onPointerOver={() => {
            document.body.style.cursor = 'pointer';
            setHovered(true);
        }}
        onPointerOut={() => {
            document.body.style.cursor = 'auto';
            setHovered(false);
        }}
      >
        <sphereGeometry args={[data.size, 64, 64]} />
        <meshStandardMaterial 
            color={data.color} 
            emissive={isSelected ? data.color : '#000'}
            emissiveIntensity={isSelected ? 0.5 : 0}
            roughness={0.7}
        />

        {/* Optional Ring for Saturn-like planets */}
        {data.ring && (
            <mesh rotation={[-Math.PI / 2, 0, 0]}>
                <ringGeometry args={[data.ring.innerRadius, data.ring.outerRadius, 64]} />
                <meshStandardMaterial color={data.ring.color} side={THREE.DoubleSide} opacity={0.8} transparent />
            </mesh>
        )}
        
        {/* Label on Hover */}
        {(hovered || isSelected) && (
            <Html position={[0, data.size + 1.5, 0]} center distanceFactor={15}>
                <div className={`px-2 py-1 rounded text-xs font-bold pointer-events-none whitespace-nowrap transition-all duration-200 ${isSelected ? 'bg-white text-black' : 'bg-black/50 text-white border border-white/20'}`}>
                    {data.name}
                </div>
            </Html>
        )}
      </mesh>
    </group>
  );
};