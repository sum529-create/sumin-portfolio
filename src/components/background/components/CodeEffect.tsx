import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Group, Color, MeshBasicMaterial } from 'three';
import { ComponentProps, CodeLine } from '@/components/background/types';
import { easeOutCubic } from '@/components/background/utils/animations';

export function CodeEffect({
  scrollData,
  introAnimationProgress,
}: ComponentProps): JSX.Element {
  const codeRef = useRef<Group>(null);
  const { viewport } = useThree();

  const codeLines = useMemo<CodeLine[]>(() => {
    const count = 15;
    const lines: CodeLine[] = [];

    for (let i = 0; i < count; i++) {
      const position: [number, number, number] = [
        (Math.random() - 0.5) * viewport.width * 0.6,
        (Math.random() - 0.5) * viewport.height * 1.5,
        -10 - Math.random() * 20,
      ];

      let initialPosition: [number, number, number];
      if (Math.random() > 0.5) {
        initialPosition = [
          position[0] * 0.3,
          viewport.height * 0.8,
          position[2] - 10,
        ];
      } else {
        initialPosition = [
          (Math.random() > 0.5 ? 1 : -1) * viewport.width * 0.8,
          position[1] * 0.3,
          position[2] - 10,
        ];
      }

      lines.push({
        position,
        initialPosition,
        width: 2 + Math.random() * 8,
        height: 0.05 + Math.random() * 0.1,
        color: new Color(
          0.3 + Math.random() * 0.2,
          0.6 + Math.random() * 0.3,
          0.7 + Math.random() * 0.3
        ),
        speed: 0.2 + Math.random() * 0.3,
        opacity: 0.2 + Math.random() * 0.3,
        delay: i * 0.1,
      });
    }

    return lines;
  }, [viewport.width, viewport.height]);

  useFrame(({ clock }) => {
    if (!codeRef.current) return;

    const time = clock.getElapsedTime();

    codeRef.current.children.forEach((line, i) => {
      if (i >= codeLines.length) return;
      const cl = codeLines[i];

      const material = (line as any).material as MeshBasicMaterial;

      if (introAnimationProgress < 1) {
        const delayedProgress = Math.max(
          0,
          Math.min(introAnimationProgress - cl.delay, 1)
        );
        const easing = easeOutCubic(delayedProgress);

        line.position.x =
          cl.initialPosition[0] +
          (cl.position[0] - cl.initialPosition[0]) * easing;
        line.position.y =
          cl.initialPosition[1] +
          (cl.position[1] - cl.initialPosition[1]) * easing;
        line.position.z =
          cl.initialPosition[2] +
          (cl.position[2] - cl.initialPosition[2]) * easing;

        (line as any).scale.x = easing;

        material.opacity = cl.opacity * easing;
      } else {
        line.position.x = cl.position[0];
        line.position.y = cl.position[1];
        line.position.z = cl.position[2];
        (line as any).scale.x = 1;

        material.opacity =
          cl.opacity * (0.7 + 0.3 * Math.sin(time * cl.speed + i * 10));

        line.position.y -= scrollData.scrollY * 0.00003;

        if (line.position.y < -viewport.height) {
          line.position.y = viewport.height;
          line.position.x = (Math.random() - 0.5) * viewport.width * 0.6;
        }
      }
    });
  });

  return (
    <group ref={codeRef}>
      {codeLines.map((line, i) => (
        <mesh
          key={i}
          position={line.initialPosition}
          scale={[0, line.height, 1]}
        >
          <planeGeometry args={[line.width, line.height]} />
          <meshBasicMaterial color={line.color} transparent opacity={0} />
        </mesh>
      ))}
    </group>
  );
}
