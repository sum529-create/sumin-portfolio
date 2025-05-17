import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group, Color } from 'three';
import { ComponentProps } from '../types';
import { easeOutCubic } from '../utils/animations';

export function Grid({ scrollData, introAnimationProgress }: ComponentProps): JSX.Element {
  const gridRef = useRef<Group>(null);
  
  const gridSize = 50;
  const gridDivisions = 20;
  const baseColor = new Color('#1E293B');
  const highlightColor = new Color('#3B82F6');
  
  const glowPoints = useMemo(() => {
    return Array.from({ length: 5 }).map((_, i) => ({
      position: [
        (Math.random() - 0.5) * gridSize * 0.8,
        0.05,
        (Math.random() - 0.5) * gridSize * 0.8
      ] as [number, number, number],
      id: i,
    }));
  }, [gridSize]);
  
  useFrame(({ clock }) => {
    if (!gridRef.current) return;
    
    const time = clock.getElapsedTime();
    
    if (introAnimationProgress === 0) {
      gridRef.current.scale.set(0.001, 0.001, 0.001);
      gridRef.current.position.y = -20;
      
      gridRef.current.children.forEach((child) => {
        const anyChild = child as any;
        if (anyChild.material && anyChild.material.opacity !== undefined) {
          anyChild.material.opacity = 0;
        }
      });
      return;
    }
    
    if (introAnimationProgress < 1) {
      const easing = easeOutCubic(introAnimationProgress);
      
      const introScale = Math.max(0.001, easing);
      gridRef.current.scale.set(introScale, introScale, introScale);
      
      gridRef.current.position.y = -20 + (15 * easing);
      
      gridRef.current.rotation.x = Math.PI / 2 - Math.sin(time * 0.3) * 0.2 * (1 - easing);
      gridRef.current.rotation.z = Math.sin(time * 0.2) * 0.2 * (1 - easing);
      
      gridRef.current.children.forEach((child) => {
        const anyChild = child as any;
        if (anyChild.material && anyChild.material.opacity !== undefined) {
          anyChild.material.opacity = easing * 0.3;
        }
        
        if (anyChild.type === 'LineSegments' && anyChild.material) {
          anyChild.material.opacity = easing * 0.3;
        }
      });
    } else {
      gridRef.current.scale.set(1, 1, 1);
      gridRef.current.rotation.x = Math.PI / 2 - Math.sin(time * 0.1) * 0.05;
      gridRef.current.rotation.z = Math.sin(time * 0.05) * 0.05;
      
      gridRef.current.position.y = -5 - scrollData.scrollY * 0.00002;
    }
  });
  
  return (
    <group ref={gridRef} position={[0, -20, -10]}>
      <gridHelper 
        args={[gridSize, gridDivisions, baseColor, baseColor]} 
        position={[0, 0, 0]}
      />
      
      {glowPoints.map((point) => (
        <mesh 
          key={`glow-${point.id}`} 
          position={point.position}
        >
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshBasicMaterial 
            color={highlightColor} 
            transparent 
            opacity={0}
          />
        </mesh>
      ))}
    </group>
  );
} 