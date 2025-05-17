import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { ShaderMaterial } from 'three';
import { GradientMaterial } from '../types';
import { gradientVertexShader, gradientFragmentShader } from '../utils/shaders';

interface GradientBackgroundProps {
  introAnimationProgress: number;
}

export function GradientBackground({ introAnimationProgress }: GradientBackgroundProps): JSX.Element {
  const materialRef = useRef<GradientMaterial | null>(null);
  
  const shaderMaterial = useMemo<GradientMaterial>(() => {
    return new ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        introProgress: { value: 0 },
      },
      vertexShader: gradientVertexShader,
      fragmentShader: gradientFragmentShader,
      transparent: true
    }) as GradientMaterial;
  }, []);
  
  useFrame(({ clock }) => {
    if (!materialRef.current) return;
    
    materialRef.current.uniforms.time.value = clock.getElapsedTime();
    materialRef.current.uniforms.introProgress.value = introAnimationProgress;
  });
  
  return (
    <mesh position={[0, 0, -100]}>
      <planeGeometry args={[500, 500]} />
      <primitive object={shaderMaterial} ref={materialRef} />
    </mesh>
  );
} 