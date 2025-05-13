'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function StarField() {
  const ref = useRef<THREE.Points>(null);
  const count = 5000;
  
  // 별들의 위치를 직접 생성
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    positions[i3] = (Math.random() - 0.5) * 3;
    positions[i3 + 1] = (Math.random() - 0.5) * 3;
    positions[i3 + 2] = (Math.random() - 0.5) * 3;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.001;
      ref.current.rotation.y += 0.001;
    }
  });

  return (
    <Points ref={ref} geometry={geometry}>
      <PointMaterial
        size={0.01}
        color="#ffffff"
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </Points>
  );
}

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-background">
      <Canvas>
        <StarField />
      </Canvas>
    </div>
  );
} 