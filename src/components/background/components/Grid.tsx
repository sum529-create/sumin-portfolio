import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group, Color, LineBasicMaterial, GridHelper } from 'three';
import { ComponentProps } from '@/components/background/types';
import { easeOutCubic } from '@/components/background/utils/animations';

export function Grid({
  scrollData,
  introAnimationProgress,
}: ComponentProps): JSX.Element {
  const gridRef = useRef<Group>(null);
  const gridHelperRef = useRef<GridHelper>(null);

  const gridSize = 50;
  const gridDivisions = 20;
  const baseColor = new Color('#1E293B');
  const highlightColor = new Color('#3B82F6');

  // 그리드 머티리얼 생성
  const gridMaterial = useMemo(() => {
    return new LineBasicMaterial({
      color: baseColor,
      transparent: true,
      opacity: 0.3,
      depthWrite: false, // 깊이 버퍼 쓰기 비활성화
      depthTest: true, // 깊이 테스트 활성화
      toneMapped: false, // 톤 매핑 비활성화
    });
  }, [baseColor]);

  const glowPoints = useMemo(() => {
    return Array.from({ length: 5 }).map((_, i) => ({
      position: [
        (Math.random() - 0.5) * gridSize * 0.8,
        0.05,
        (Math.random() - 0.5) * gridSize * 0.8,
      ] as [number, number, number],
      id: i,
    }));
  }, [gridSize]);

  useFrame(({ clock }) => {
    if (!gridRef.current || !gridHelperRef.current) return;

    const time = clock.getElapsedTime();

    if (introAnimationProgress === 0) {
      gridRef.current.scale.set(0.001, 0.001, 0.001);
      gridRef.current.position.y = -20;
      gridMaterial.opacity = 0;
      return;
    }

    if (introAnimationProgress < 1) {
      const easing = easeOutCubic(introAnimationProgress);

      const introScale = Math.max(0.001, easing);
      gridRef.current.scale.set(introScale, introScale, introScale);
      gridRef.current.position.y = -20 + 15 * easing;

      // 부드러운 회전 애니메이션
      gridRef.current.rotation.x =
        Math.PI / 2 - Math.sin(time * 0.3) * 0.2 * (1 - easing);
      gridRef.current.rotation.z = Math.sin(time * 0.2) * 0.2 * (1 - easing);

      // 그리드 투명도 조정
      gridMaterial.opacity = easing * 0.3;
    } else {
      gridRef.current.scale.set(1, 1, 1);
      gridRef.current.rotation.x = Math.PI / 2 - Math.sin(time * 0.1) * 0.05;
      gridRef.current.rotation.z = Math.sin(time * 0.05) * 0.05;
      gridRef.current.position.y = -5 - scrollData.scrollY * 0.00002;
      gridMaterial.opacity = 0.3;
    }
  });

  return (
    <group ref={gridRef} position={[0, -20, -10]}>
      <gridHelper
        ref={gridHelperRef}
        args={[gridSize, gridDivisions, baseColor, baseColor]}
        material={gridMaterial}
        position={[0, 0, 0]}
      />

      {glowPoints.map((point) => (
        <mesh key={`glow-${point.id}`} position={point.position}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshBasicMaterial
            color={highlightColor}
            transparent
            opacity={0}
            depthWrite={false}
            toneMapped={false}
          />
        </mesh>
      ))}
    </group>
  );
}
