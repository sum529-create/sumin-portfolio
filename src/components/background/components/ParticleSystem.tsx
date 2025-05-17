import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, ShaderMaterial } from 'three';
import { ComponentProps, CustomShaderMaterial, ParticleData } from '../types';
import { particleVertexShader, particleFragmentShader } from '../utils/shaders';

export function ParticleSystem({ scrollData, introAnimationProgress }: ComponentProps): JSX.Element {
  const particlesRef = useRef<Points>(null);
  
  const particles = useMemo<ParticleData>(() => {
    const count = 750;
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = -20 - Math.random() * 50;
      
      sizes[i] = 0.3 + Math.random() * 1.2;
    }
    
    return { positions, sizes };
  }, []);
  
  const shaderMaterial = useMemo<CustomShaderMaterial>(() => {
    return new ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        scrollProgress: { value: 0 },
        scrollVelocity: { value: 0 },
        introProgress: { value: 0 }
      },
      vertexShader: particleVertexShader,
      fragmentShader: particleFragmentShader,
      transparent: true,
      blending: 2, // THREE.AdditiveBlending
      depthWrite: false
    }) as CustomShaderMaterial;
  }, []);
  
  useFrame(({ clock }) => {
    if (!particlesRef.current) return;
    
    const material = particlesRef.current.material as CustomShaderMaterial;
    material.uniforms.time.value = clock.getElapsedTime();
    material.uniforms.introProgress.value = introAnimationProgress;
    
    material.uniforms.scrollProgress.value += 
      (scrollData.scrollProgress - material.uniforms.scrollProgress.value) * 0.03;
    material.uniforms.scrollVelocity.value += 
      (scrollData.scrollVelocity - material.uniforms.scrollVelocity.value) * 0.03;
  });
  
  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.positions.length / 3}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={particles.sizes.length}
          array={particles.sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <primitive object={shaderMaterial} />
    </points>
  );
} 