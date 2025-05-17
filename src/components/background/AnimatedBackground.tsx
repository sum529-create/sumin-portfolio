'use client';

import { useRef, useEffect, useState, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import { CameraRef, ScrollData } from './types';
import { easeOutCubic } from './utils/animations';
import { TechElements } from './components/TechElements';
import { ParticleSystem } from './components/ParticleSystem';
import { GradientBackground } from './components/GradientBackground';
import { Grid } from './components/Grid';
import { GlowEffect } from './components/GlowEffect';
import { CodeEffect } from './components/CodeEffect';
import { StarburstEffect } from './components/StarburstEffect';


// Custom hook for scroll position
function useScrollPosition(): ScrollData {
  const [scrollData, setScrollData] = useState<ScrollData>({
    scrollY: 0,
    scrollVelocity: 0,
    scrollProgress: 0
  });
  
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;
    
    const updateScrollData = () => {
      const currentScrollY = window.scrollY;
      const scrollVelocity = currentScrollY - lastScrollY;
      const scrollProgress = currentScrollY / (document.documentElement.scrollHeight - window.innerHeight);
      
      setScrollData({
        scrollY: currentScrollY,
        scrollVelocity,
        scrollProgress
      });
      
      lastScrollY = currentScrollY;
      ticking = false;
    };
    
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollData);
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', onScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  
  return scrollData;
}

// Main scene composition
function MainScene({ introAnimationProgress }: { introAnimationProgress: number }): JSX.Element {
  const scrollData = useScrollPosition();
  const { camera } = useThree();
  const cameraRef = useRef<CameraRef>({ targetX: 0, targetY: 0 });
  const initialCameraPosition = useRef({ x: 0, y: 10, z: 60 });
  const initialized = useRef<boolean>(false);
  
  useEffect(() => {
    if (!initialized.current) {
      camera.position.set(0, 10, 60);
      camera.rotation.set(0.2, 0, 0);
      initialized.current = true;
    }
  }, [camera]);
  
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
  
  useFrame(() => {
    if (introAnimationProgress === 0) {
      camera.position.set(0, 10, 60);
      camera.rotation.set(0.2, 0, 0);
      return;
    }
    
    if (introAnimationProgress < 1) {
      const easing = easeOutCubic(introAnimationProgress);
      
      camera.position.x = initialCameraPosition.current.x * (1 - easing);
      camera.position.y = initialCameraPosition.current.y * (1 - easing) + cameraRef.current.targetY * easing;
      camera.position.z = initialCameraPosition.current.z * (1 - easing) + 40 * easing;
      
      camera.rotation.x = 0.2 * (1 - easing);
      camera.rotation.y = 0;
      camera.rotation.z = 0;
    } else {
      camera.position.x += (cameraRef.current.targetX - camera.position.x) * 0.05;
      camera.position.y += (cameraRef.current.targetY - camera.position.y) * 0.05;
      
      camera.rotation.x += (cameraRef.current.targetY * 0.1 - camera.rotation.x) * 0.05;
      camera.rotation.y += (-cameraRef.current.targetX * 0.1 - camera.rotation.y) * 0.05;
      
      camera.position.z = 40 + Math.sin(scrollData.scrollProgress * Math.PI) * 1.5;
    }
  });
  
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 10, 60]} />
      
      <GradientBackground introAnimationProgress={introAnimationProgress} />
      <ParticleSystem scrollData={scrollData} introAnimationProgress={introAnimationProgress} />
      <Grid scrollData={scrollData} introAnimationProgress={introAnimationProgress} />
      <TechElements scrollData={scrollData} introAnimationProgress={introAnimationProgress} />
      <GlowEffect scrollData={scrollData} introAnimationProgress={introAnimationProgress} />
      <CodeEffect scrollData={scrollData} introAnimationProgress={introAnimationProgress} />
      <StarburstEffect introAnimationProgress={introAnimationProgress} />
    </>
  );
}

// Main component
export function AnimatedBackground(): JSX.Element {
  const [introAnimationProgress, setIntroAnimationProgress] = useState(0);
  
  useEffect(() => {
    const startTime = Date.now();
    const duration = 2000; // 2 seconds
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      setIntroAnimationProgress(progress);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    animate();
  }, []);
  
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas>
        <MainScene introAnimationProgress={introAnimationProgress} />
      </Canvas>
    </div>
  );
}