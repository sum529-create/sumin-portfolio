'use client';

import { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import { useIntroProgressStore } from '@/store/introProgressStore';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { CameraRef } from '@/components/background/types';
import { easeOutCubic } from '@/components/background/utils/animations';
import { GradientBackground } from '@/components/background/components/GradientBackground';
import { ParticleSystem } from '@/components/background/components/ParticleSystem';
import { Grid } from '@/components/background/components/Grid';
import { GlowEffect } from '@/components/background/components/GlowEffect';
import { GlowPoint } from '@/components/background/types';

const MainScene = () => {
  const scrollData = useScrollPosition();
  const { camera } = useThree();
  const cameraRef = useRef<CameraRef>({ targetX: 0, targetY: 0 });
  const initialCameraPosition = useRef({ x: 0, y: 10, z: 60 });
  const initialized = useRef<boolean>(false);
  const introAnimationProgress = useIntroProgressStore(
    (state) => state.introAnimationProgress
  );

  // 초기 카메라 위치 설정
  useEffect(() => {
    if (!initialized.current) {
      camera.position.set(0, 10, 60);
      camera.rotation.set(0.2, 0, 0);
      initialized.current = true;
    }
  }, [camera]);

  // 마우스 움직임에 따른 카메라 효과
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent): void => {
      const x = (event.clientX / window.innerWidth - 0.5) * 0.1;
      const y = (event.clientY / window.innerHeight - 0.5) * 0.1;

      cameraRef.current.targetX = x;
      cameraRef.current.targetY = y;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // 카메라 애니메이션
  useFrame(() => {
    if (introAnimationProgress === 0) {
      // 초기 위치 유지
      camera.position.set(0, 10, 60);
      camera.rotation.set(0.2, 0, 0);
      return;
    }

    if (introAnimationProgress < 1) {
      // 인트로 애니메이션
      const easing = easeOutCubic(introAnimationProgress);

      // 카메라가 위에서 아래로 이동하며 줌인
      camera.position.x = initialCameraPosition.current.x * (1 - easing);
      camera.position.y =
        initialCameraPosition.current.y * (1 - easing) +
        cameraRef.current.targetY * easing;
      camera.position.z =
        initialCameraPosition.current.z * (1 - easing) + 40 * easing;

      // 카메라 회전 애니메이션
      camera.rotation.x = 0.2 * (1 - easing);
      camera.rotation.y = 0;
      camera.rotation.z = 0;
    } else {
      // 일반 카메라 애니메이션
      // 마우스에 따른 미세한 움직임
      camera.position.x +=
        (cameraRef.current.targetX - camera.position.x) * 0.05;
      camera.position.y +=
        (cameraRef.current.targetY - camera.position.y) * 0.05;

      // 마우스 위치에 따른 미세한 기울기 효과
      camera.rotation.x +=
        (cameraRef.current.targetY * 0.1 - camera.rotation.x) * 0.05;
      camera.rotation.y +=
        (-cameraRef.current.targetX * 0.1 - camera.rotation.y) * 0.05;

      // 스크롤에 따른 미세한 줌 효과
      camera.position.z =
        40 + Math.sin(scrollData.scrollProgress * Math.PI) * 1.5;
    }
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 10, 60]} />

      {/* 배경 그라데이션 */}
      <GradientBackground introAnimationProgress={introAnimationProgress} />
      {/* 파티클 시스템 */}
      <ParticleSystem
        scrollData={scrollData}
        introAnimationProgress={introAnimationProgress}
      />
      {/* 그리드 */}
      <Grid
        scrollData={scrollData}
        introAnimationProgress={introAnimationProgress}
      />
      {/* 글로우 효과 */}
      <GlowEffect
        scrollData={scrollData}
        introAnimationProgress={introAnimationProgress}
      />
    </>
  );
};

export default MainScene;
