import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Group, Color, MeshBasicMaterial, AdditiveBlending } from 'three';
import { ComponentProps, GlowPoint } from '../types';
import { easeOutCubic } from '../utils/animations';

export function GlowEffect({
  scrollData,
  introAnimationProgress,
}: ComponentProps): JSX.Element {
  const glowRef = useRef<Group>(null);
  const { viewport } = useThree();

  const glowPoints = useMemo<GlowPoint[]>(() => {
    return Array.from({ length: 3 }).map((_, i) => {
      const position: [number, number, number] = [
        (Math.random() - 0.5) * viewport.width * 0.8,
        (Math.random() - 0.5) * viewport.height * 0.8,
        -30 - Math.random() * 10,
      ];

      const initialPosition: [number, number, number] = [
        position[0] * 0.2,
        position[1] * 0.2,
        position[2] - 20,
      ];

      return {
        position,
        initialPosition,
        color: new Color(
          0.3 + Math.random() * 0.2,
          0.3 + Math.random() * 0.2,
          0.6 + Math.random() * 0.4
        ),
        scale: 10 + Math.random() * 20,
        initialScale: 0,
        delay: i * 0.2,
      };
    });
  }, [viewport.width, viewport.height]);

  useFrame(({ clock }) => {
    if (!glowRef.current) return;

    const time = clock.getElapsedTime();

    glowRef.current.children.forEach((glow, i) => {
      if (i >= glowPoints.length) return;
      const point = glowPoints[i];

      if (introAnimationProgress < 1) {
        const delayedProgress = Math.max(
          0,
          Math.min((introAnimationProgress - point.delay) * 1.5, 1)
        );
        const easing = easeOutCubic(delayedProgress);

        glow.position.x =
          point.initialPosition[0] +
          (point.position[0] - point.initialPosition[0]) * easing;
        glow.position.y =
          point.initialPosition[1] +
          (point.position[1] - point.initialPosition[1]) * easing;
        glow.position.z =
          point.initialPosition[2] +
          (point.position[2] - point.initialPosition[2]) * easing;

        const burstEffect =
          delayedProgress < 0.3 ? 1.5 - delayedProgress * 1.5 : 0;

        const scaleValue = point.scale * easing * (1 + burstEffect);
        glow.scale.set(scaleValue, scaleValue, 1);

        const material = (glow as any).material as MeshBasicMaterial;
        material.opacity = 0.05 * easing * (1 + burstEffect);
      } else {
        const pulse = Math.sin(time * 0.2 + i) * 0.2 + 0.8;
        glow.scale.set(point.scale * pulse, point.scale * pulse, 1);

        glow.position.x += Math.sin(time * 0.1 + i * 10) * 0.01;
        glow.position.y += Math.cos(time * 0.1 + i * 10) * 0.01;

        glow.position.y -= scrollData.scrollY * 0.00005;
      }
    });
  });

  return (
    <group ref={glowRef}>
      {glowPoints.map((point, i) => (
        <mesh key={i} position={point.initialPosition}>
          <circleGeometry args={[1, 32]} />
          <meshBasicMaterial
            color={point.color}
            transparent
            opacity={0}
            blending={AdditiveBlending}
          />
        </mesh>
      ))}
    </group>
  );
}
