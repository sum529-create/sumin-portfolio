import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Group, Color, MeshBasicMaterial, AdditiveBlending } from 'three';

interface StarburstProps {
  introAnimationProgress: number;
}

export function StarburstEffect({ introAnimationProgress }: StarburstProps): JSX.Element {
  const burstRef = useRef<Group>(null);
  const { viewport } = useThree();
  
  useFrame(({ clock }) => {
    if (!burstRef.current) return;
    
    const opacity = introAnimationProgress < 0.5 ? (0.5 - introAnimationProgress) * 2 : 0;
    const scale = Math.min(5, 5 * introAnimationProgress * 2);
    
    burstRef.current.scale.set(scale, scale, 1);
    
    burstRef.current.children.forEach((child) => {
      const material = (child as any).material as MeshBasicMaterial;
      material.opacity = opacity;
    });
  });
  
  const rays = useMemo(() => {
    const count = 12;
    const result = [];
    
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const length = 1 + Math.random() * 0.5;
      
      result.push({
        id: i,
        angle,
        length,
        width: 0.05 + Math.random() * 0.1,
        color: new Color(
          0.5 + Math.random() * 0.5,
          0.7 + Math.random() * 0.3,
          0.9 + Math.random() * 0.1
        )
      });
    }
    
    return result;
  }, []);
  
  return (
    <group ref={burstRef} position={[0, 0, -5]}>
      <mesh>
        <circleGeometry args={[0.5, 32]} />
        <meshBasicMaterial 
          color={new Color(0.5, 0.7, 1.0)} 
          transparent 
          opacity={0.5} 
          blending={AdditiveBlending} 
        />
      </mesh>
      
      {rays.map(ray => (
        <mesh 
          key={ray.id} 
          position={[Math.cos(ray.angle) * ray.length / 2, Math.sin(ray.angle) * ray.length / 2, 0]}
          rotation={[0, 0, ray.angle]}
        >
          <planeGeometry args={[ray.length, ray.width]} />
          <meshBasicMaterial 
            color={ray.color} 
            transparent 
            opacity={0.5} 
            blending={AdditiveBlending} 
          />
        </mesh>
      ))}
    </group>
  );
} 