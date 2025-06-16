import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Group, MeshBasicMaterial } from 'three';
import { ComponentProps, TechElement } from '../types';
import { easeOutElastic, interpolatePosition } from '../utils/animations';

export function TechElements({
  scrollData,
  introAnimationProgress,
}: ComponentProps): JSX.Element {
  const groupRef = useRef<Group>(null);
  const { viewport } = useThree();

  // Define the tech elements
  const elements = useMemo<TechElement[]>(() => {
    return Array.from({ length: 12 }).map((_, i) => {
      const shapeType = Math.floor(Math.random() * 4);
      const scale = 0.4 + Math.random() * 0.6;

      const colors = [
        '#3B82F6', // Blue
        '#6366F1', // Indigo
        '#8B5CF6', // Violet
        '#A855F7', // Purple
        '#EC4899', // Pink
        '#2563EB', // Darker blue
      ];

      const angle = (i / 12) * Math.PI * 2;
      const radius = 30 + Math.random() * 10;
      const initialPosition: [number, number, number] = [
        Math.cos(angle) * radius,
        Math.sin(angle) * radius,
        -30 - Math.random() * 20,
      ];

      const targetPosition: [number, number, number] = [
        (Math.random() - 0.5) * viewport.width * 0.7,
        (Math.random() - 0.5) * viewport.height * 0.7,
        -5 - Math.random() * 10,
      ];

      return {
        position: initialPosition,
        rotation: [
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI,
        ],
        scale,
        color: colors[Math.floor(Math.random() * colors.length)],
        shapeType,
        speed: 0.2 + Math.random() * 0.3,
        initialPosition,
        targetPosition,
        animationDelay: i * 0.1,
      };
    });
  }, [viewport.width, viewport.height]);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;

    if (introAnimationProgress === 0) {
      groupRef.current.children.forEach((element, i) => {
        if (i >= elements.length) return;

        element.scale.set(0.001, 0.001, 0.001);

        element.children.forEach((child) => {
          const material = (child as any).material as MeshBasicMaterial;
          if (material && material.opacity !== undefined) {
            material.opacity = 0;
          }
        });
      });
      return;
    }

    groupRef.current.children.forEach((element, i) => {
      if (i >= elements.length) return;
      const el = elements[i];

      if (introAnimationProgress < 1) {
        const elementProgress = Math.max(
          0,
          Math.min(introAnimationProgress - el.animationDelay, 1)
        );
        const easing = easeOutElastic(elementProgress);

        const [x, y, z] = interpolatePosition(
          el.initialPosition,
          el.targetPosition,
          easing
        );
        element.position.set(x, y, z);

        const scaleValue = Math.max(0.001, el.scale * easing);
        element.scale.set(scaleValue, scaleValue, scaleValue);

        element.children.forEach((child) => {
          const material = (child as any).material as MeshBasicMaterial;
          if (material && material.opacity !== undefined) {
            material.opacity = easing * 0.5;
          }
        });

        element.rotation.x =
          el.rotation[0] * easing + Math.PI * 2 * (1 - easing);
        element.rotation.y =
          el.rotation[1] * easing + Math.PI * 2 * (1 - easing);
        element.rotation.z =
          el.rotation[2] * easing + Math.PI * 2 * (1 - easing);
      } else {
        element.position.y -= scrollData.scrollY * 0.00002;
        element.rotation.x += el.speed * 0.01;
        element.rotation.y += el.speed * 0.01;
      }
    });
  });

  return (
    <group ref={groupRef}>
      {elements.map((element, i) => (
        <mesh
          key={i}
          position={element.initialPosition}
          rotation={element.rotation}
          scale={[0.001, 0.001, 0.001]}
        >
          {element.shapeType === 0 && <boxGeometry args={[1, 1, 1]} />}
          {element.shapeType === 1 && <sphereGeometry args={[0.5, 16, 16]} />}
          {element.shapeType === 2 && (
            <torusGeometry args={[0.5, 0.2, 16, 32]} />
          )}
          {element.shapeType === 3 && <octahedronGeometry args={[0.5]} />}
          <meshBasicMaterial color={element.color} transparent opacity={0} />
        </mesh>
      ))}
    </group>
  );
}
