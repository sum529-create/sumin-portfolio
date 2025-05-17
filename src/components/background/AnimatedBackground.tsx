'use client';

import { useRef, useEffect, useState, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

// Define types for scroll data
interface ScrollData {
  scrollY: number;
  scrollVelocity: number;
  scrollProgress: number;
}

// Hook to track scroll position
function useScrollPosition(): ScrollData {
  const [scrollY, setScrollY] = useState<number>(0);
  const [scrollVelocity, setScrollVelocity] = useState<number>(0);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const lastScrollY = useRef<number>(0);
  const lastScrollTime = useRef<number>(Date.now());
  
  useEffect(() => {
    const handleScroll = (): void => {
      const currentScrollY = window.scrollY;
      const currentTime = Date.now();
      const timeDelta = currentTime - lastScrollTime.current;
      
      // Calculate scroll progress (0 ~ 1)
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(currentScrollY / maxScroll, 1);
      setScrollProgress(progress);
      
      if (timeDelta > 0) {
        const rawVelocity = Math.abs(currentScrollY - lastScrollY.current) / timeDelta;
        setScrollVelocity(prev => prev * 0.9 + rawVelocity * 0.1);
      }
      
      setScrollY(currentScrollY);
      lastScrollY.current = currentScrollY;
      lastScrollTime.current = currentTime;
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return { scrollY, scrollVelocity, scrollProgress };
}

// Utility functions for easing animations
function easeOutCubic(x: number): number {
  return 1 - Math.pow(1 - x, 3);
}

function easeOutElastic(x: number): number {
  const c4 = (2 * Math.PI) / 3;
  return x === 0
    ? 0
    : x === 1
    ? 1
    : Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1;
}

// Tech element definition
interface TechElement {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
  color: string;
  shapeType: number;
  speed: number;
  // Properties for intro animation
  initialPosition: [number, number, number];
  targetPosition: [number, number, number];
  animationDelay: number;
}

// Tech elements props interface
interface TechElementsProps {
  scrollData: ScrollData;
  introAnimationProgress: number;
}

// Floating shapes that represent code/technology concepts
function TechElements({ scrollData, introAnimationProgress }: TechElementsProps): JSX.Element {
  const groupRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();
  
  // Define the tech elements
  const elements = useMemo<TechElement[]>(() => {
    return Array.from({ length: 12 }).map((_, i) => {
      // Choose from different tech-inspired shapes
      const shapeType = Math.floor(Math.random() * 4); // 0, 1, 2, 3
      const scale = 0.4 + Math.random() * 0.6;
      
      // Modern tech color palette
      const colors = [
        '#3B82F6', // Blue
        '#6366F1', // Indigo
        '#8B5CF6', // Violet
        '#A855F7', // Purple
        '#EC4899', // Pink
        '#2563EB', // Darker blue
      ];
      
      // Initial position for intro animation (outside the view)
      const angle = (i / 12) * Math.PI * 2;
      const radius = 30 + Math.random() * 10;
      const initialPosition: [number, number, number] = [
        Math.cos(angle) * radius,
        Math.sin(angle) * radius,
        -30 - Math.random() * 20
      ];
      
      // Final position after intro
      const targetPosition: [number, number, number] = [
        (Math.random() - 0.5) * viewport.width * 0.7,
        (Math.random() - 0.5) * viewport.height * 0.7, 
        -5 - Math.random() * 10
      ];
      
      return {
        position: initialPosition, // Start from initial position
        rotation: [
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI
        ],
        scale,
        color: colors[Math.floor(Math.random() * colors.length)],
        shapeType,
        speed: 0.2 + Math.random() * 0.3,
        initialPosition,
        targetPosition,
        animationDelay: i * 0.1 // Staggered animation
      };
    });
  }, [viewport.width, viewport.height]);
  
  // Animation
  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    
    const time = clock.getElapsedTime();
    
    // Safety check to prevent jumps
    if (introAnimationProgress === 0) {
      // Keep all elements completely invisible until animation starts
      groupRef.current.children.forEach((element, i) => {
        if (i >= elements.length) return;
        
        // Set scale to zero
        element.scale.set(0.001, 0.001, 0.001);
        
        // Make sure materials are invisible
        element.children.forEach((child) => {
          const material = (child as THREE.Mesh).material as THREE.MeshBasicMaterial;
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
      
      // Intro animation
      if (introAnimationProgress < 1) {
        // Consider the element's delay in the animation
        const elementProgress = Math.max(0, Math.min((introAnimationProgress - el.animationDelay), 1));
        const easing = easeOutElastic(elementProgress);
        
        // Interpolate position from initial to target
        element.position.x = el.initialPosition[0] + (el.targetPosition[0] - el.initialPosition[0]) * easing;
        element.position.y = el.initialPosition[1] + (el.targetPosition[1] - el.initialPosition[1]) * easing;
        element.position.z = el.initialPosition[2] + (el.targetPosition[2] - el.initialPosition[2]) * easing;
        
        // Scale up from zero
        const scaleValue = Math.max(0.001, el.scale * easing);
        element.scale.set(scaleValue, scaleValue, scaleValue);
        
        // Apply opacity
        element.children.forEach((child) => {
          const material = (child as THREE.Mesh).material as THREE.MeshBasicMaterial;
          if (material && material.opacity !== undefined) {
            material.opacity = easing * 0.5;
          }
        });
        
        // Add some rotation during intro
        element.rotation.x = el.rotation[0] * easing + Math.PI * 2 * (1 - easing);
        element.rotation.y = el.rotation[1] * easing + Math.PI * 2 * (1 - easing);
        element.rotation.z = el.rotation[2] * easing + Math.PI * 2 * (1 - easing);
      } else {
        // Normal animation after intro
        // Subtle floating animation
        element.position.y += Math.sin(time * el.speed + i) * 0.001;
        element.position.x += Math.cos(time * el.speed + i) * 0.001;
        
        // Slow rotation
        element.rotation.x += 0.001;
        element.rotation.y += 0.001;
        
        // Scroll influence
        element.position.y -= scrollData.scrollY * 0.00004;
        
        // Reset if out of view
        if (element.position.y < -viewport.height * 0.5) {
          element.position.y = viewport.height * 0.5;
          element.position.x = (Math.random() - 0.5) * viewport.width * 0.7;
        }
      }
    });
  });
  
  // Render each tech element
  return (
    <group ref={groupRef}>
      {elements.map((el, i) => (
        <group key={i} position={el.initialPosition} rotation={el.rotation as any} scale={[0.001, 0.001, 0.001]}>
          {el.shapeType === 0 && (
            // Code bracket shape
            <mesh>
              <torusGeometry args={[1, 0.2, 16, 32, Math.PI * 0.8]} />
              <meshBasicMaterial color={el.color} transparent opacity={0} />
            </mesh>
          )}
          
          {el.shapeType === 1 && (
            // Component/module representation
            <mesh>
              <boxGeometry args={[1.5, 1.5, 0.1]} />
              <meshBasicMaterial color={el.color} transparent opacity={0} />
            </mesh>
          )}
          
          {el.shapeType === 2 && (
            // Data flow connector
            <mesh>
              <cylinderGeometry args={[0.1, 0.1, 2, 16]} />
              <meshBasicMaterial color={el.color} transparent opacity={0} />
            </mesh>
          )}
          
          {el.shapeType === 3 && (
            // Abstract tech shape
            <mesh>
              <octahedronGeometry args={[1, 0]} />
              <meshBasicMaterial 
                color={el.color} 
                transparent 
                opacity={0} 
                wireframe={true}
              />
            </mesh>
          )}
        </group>
      ))}
    </group>
  );
}

// Particle system props
interface ParticleSystemProps {
  scrollData: ScrollData;
  introAnimationProgress: number;
}

// Particle data structure
interface ParticleData {
  positions: Float32Array;
  sizes: Float32Array;
}

// Custom shader material extension
interface CustomShaderMaterial extends THREE.ShaderMaterial {
  uniforms: {
    time: { value: number };
    scrollProgress: { value: number };
    scrollVelocity: { value: number };
    introProgress: { value: number };
  };
}

// Modern background particle system
function ParticleSystem({ scrollData, introAnimationProgress }: ParticleSystemProps): JSX.Element {
  const particlesRef = useRef<THREE.Points>(null);
  const { size, viewport } = useThree();
  
  // Particle settings
  const particles = useMemo<ParticleData>(() => {
    const count = 750; // Reduced count for better performance and cleaner look
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    
    for (let i = 0; i < count; i++) {
      // Distribute particles in 3D space with more depth variation
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = -20 - Math.random() * 50;
      
      // Various particle sizes for depth effect
      sizes[i] = 0.3 + Math.random() * 1.2;
    }
    
    return { positions, sizes };
  }, []);
  
  // Shader material for advanced particle effects
  const shaderMaterial = useMemo<CustomShaderMaterial>(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        scrollProgress: { value: 0 },
        scrollVelocity: { value: 0 },
        introProgress: { value: 0 } // Added for intro animation
      },
      vertexShader: `
        attribute float size;
        varying vec3 vPosition;
        uniform float time;
        uniform float scrollProgress;
        uniform float scrollVelocity;
        uniform float introProgress;
        
        void main() {
          vPosition = position;
          
          // Intro animation - particles start from far away and move to their positions
          vec3 startPos = position * 3.0; // Start further away
          startPos.z -= 30.0; // Even further in z direction
          
          // Interpolate based on intro progress (with easing)
          float easedProgress = introProgress * introProgress * (3.0 - 2.0 * introProgress); // Smoothstep
          vec3 pos = mix(startPos, position, easedProgress);
          
          // Subtle movement based on time and position
          pos.y += sin(time * 0.2 + position.x * 0.05) * 0.5 * mix(0.0, 1.0, introProgress);
          pos.x += cos(time * 0.2 + position.y * 0.05) * 0.5 * mix(0.0, 1.0, introProgress);
          
          // Scroll influence - more subtle
          pos.y -= scrollProgress * 1.5 * mix(0.0, 1.0, introProgress);
          
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          // Size also grows during intro
          gl_PointSize = size * (300.0 / -mvPosition.z) * mix(0.3, 1.0, introProgress);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vPosition;
        uniform float time;
        uniform float introProgress;
        
        // Function to create a smooth, circular particle
        float circle(vec2 uv, float blur) {
          return smoothstep(0.5 + blur, 0.5 - blur, length(uv - 0.5) * 2.0);
        }
        
        void main() {
          // Dynamic color based on position and time
          float depth = (vPosition.z + 70.0) / 100.0; // Normalized depth (0-1)
          vec3 color = mix(
            vec3(0.3, 0.4, 0.9), // Deep color (distant)
            vec3(0.5, 0.7, 1.0), // Foreground color (close)
            depth
          );
          
          // Add subtle color variation with time
          color += vec3(sin(time * 0.2) * 0.1, cos(time * 0.1) * 0.1, sin(time * 0.3) * 0.1);
          
          // During intro, add some color pops
          if (introProgress < 1.0) {
            float flashEffect = (1.0 - introProgress) * 0.3 * (0.5 + 0.5 * sin(time * 10.0 + vPosition.x + vPosition.y));
            color += vec3(flashEffect);
          }
          
          // Circular particle with soft edge
          float alpha = circle(gl_PointCoord, 0.1) * (0.3 + depth * 0.7);
          
          // Fade in during intro
          alpha *= introProgress;
          
          gl_FragColor = vec4(color, alpha);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    }) as CustomShaderMaterial;
  }, []);
  
  // Animation
  useFrame(({ clock }) => {
    if (!particlesRef.current) return;
    
    const material = particlesRef.current.material as CustomShaderMaterial;
    material.uniforms.time.value = clock.getElapsedTime();
    material.uniforms.introProgress.value = introAnimationProgress;
    
    // Smooth scroll data updates
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

// Gradient material extension
interface GradientMaterial extends THREE.ShaderMaterial {
  uniforms: {
    time: { value: number };
    introProgress: { value: number }; // Added for intro animation
  };
}

// Subtle background gradient plane
function GradientBackground({ introAnimationProgress }: { introAnimationProgress: number }): JSX.Element {
  const materialRef = useRef<GradientMaterial | null>(null);
  const { viewport } = useThree();
  
  // Dynamic background shader
  const shaderMaterial = useMemo<GradientMaterial>(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        introProgress: { value: 0 },
      },
      vertexShader: `
        varying vec2 vUv;
        
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        uniform float time;
        uniform float introProgress;
        
        void main() {
          // Dynamic gradient based on position and time
          vec2 uv = vUv;
          
          // Create slow-moving gradient
          float noise = sin(uv.x * 3.0 + time * 0.1) * 0.5 + 0.5;
          noise *= sin(uv.y * 2.0 - time * 0.05) * 0.5 + 0.5;
          
          // Modern, professional color palette for tech
          vec3 color1 = vec3(0.05, 0.05, 0.15); // Deep blue
          vec3 color2 = vec3(0.1, 0.1, 0.2); // Slightly lighter blue
          vec3 color3 = vec3(0.15, 0.15, 0.25); // Even lighter blue
          
          // Enhanced colors during intro
          if (introProgress < 1.0) {
            float pulseIntensity = sin(introProgress * 6.28) * 0.5 + 0.5;
            color1 += vec3(0.02, 0.02, 0.05) * pulseIntensity * (1.0 - introProgress);
            color3 += vec3(0.0, 0.1, 0.2) * pulseIntensity * (1.0 - introProgress);
          }
          
          vec3 finalColor = mix(color1, color2, uv.y);
          finalColor = mix(finalColor, color3, noise * 0.3);
          
          gl_FragColor = vec4(finalColor, 1.0);
        }
      `
    }) as GradientMaterial;
  }, []);
  
  // Animation
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

// Grid component props
interface GridProps {
  scrollData: ScrollData;
  introAnimationProgress: number;
}

// Grid component that creates a modern, minimal grid effect
function Grid({ scrollData, introAnimationProgress }: GridProps): JSX.Element {
  const gridRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();
  
  // Grid parameters
  const gridSize = 50;
  const gridDivisions = 20;
  const baseColor = new THREE.Color('#1E293B');
  const highlightColor = new THREE.Color('#3B82F6');
  
  // Memoize glow points to prevent re-creation on each render
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
  
  // Animation
  useFrame(({ clock }) => {
    if (!gridRef.current) return;
    
    const time = clock.getElapsedTime();
    
    // Safety check to prevent jumps
    if (introAnimationProgress === 0) {
      // Keep grid hidden and in initial state until animation starts
      gridRef.current.scale.set(0.001, 0.001, 0.001); // Very small but not zero to avoid scaling issues
      gridRef.current.position.y = -20;
      
      // Make sure all children are invisible
      gridRef.current.children.forEach((child) => {
        const anyChild = child as any;
        if (anyChild.material && anyChild.material.opacity !== undefined) {
          anyChild.material.opacity = 0;
        }
      });
      return;
    }
    
    // Intro animation
    if (introAnimationProgress < 1) {
      // Start from below and fade in during intro
      const easing = easeOutCubic(introAnimationProgress);
      
      // Scale up from zero
      const introScale = Math.max(0.001, easing); // Avoid zero scale
      gridRef.current.scale.set(introScale, introScale, introScale);
      
      // Start from below and move up
      gridRef.current.position.y = -20 + (15 * easing);
      
      // Start with more rotation during intro
      gridRef.current.rotation.x = Math.PI / 2 - Math.sin(time * 0.3) * 0.2 * (1 - easing);
      gridRef.current.rotation.z = Math.sin(time * 0.2) * 0.2 * (1 - easing);
      
      // Apply opacity to all materials
      gridRef.current.children.forEach((child) => {
        const anyChild = child as any;
        if (anyChild.material && anyChild.material.opacity !== undefined) {
          anyChild.material.opacity = easing * 0.3;
        }
        
        // Handle LineSegments which might have different material structure
        if (anyChild.type === 'LineSegments' && anyChild.material) {
          anyChild.material.opacity = easing * 0.3;
        }
      });
    } else {
      // Normal animation after intro
      gridRef.current.scale.set(1, 1, 1);
      gridRef.current.rotation.x = Math.PI / 2 - Math.sin(time * 0.1) * 0.05;
      gridRef.current.rotation.z = Math.sin(time * 0.05) * 0.05;
      
      // Scroll-based movement
      gridRef.current.position.y = -5 - scrollData.scrollY * 0.00002;
    }
  });
  
  return (
    <group ref={gridRef} position={[0, -20, -10]}>
      <gridHelper 
        args={[gridSize, gridDivisions, baseColor, baseColor]} 
        position={[0, 0, 0]}
      />
      
      {/* Add pulsing glow points at grid intersections */}
      {glowPoints.map((point) => (
        <mesh 
          key={`glow-${point.id}`} 
          position={point.position}
        >
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshBasicMaterial 
            color={highlightColor} 
            transparent 
            opacity={0} // Start invisible, will be set in animation
          />
        </mesh>
      ))}
    </group>
  );
}

// Glow point interface
interface GlowPoint {
  position: [number, number, number];
  color: THREE.Color;
  scale: number;
  initialScale: number;
  initialPosition: [number, number, number];
  delay: number;
}

// Glow effect props
interface GlowEffectProps {
  scrollData: ScrollData;
  introAnimationProgress: number;
}

// Glow effect for accent elements
function GlowEffect({ scrollData, introAnimationProgress }: GlowEffectProps): JSX.Element {
  const glowRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();
  
  // Glow positions
  const glowPoints = useMemo<GlowPoint[]>(() => {
    return Array.from({ length: 3 }).map((_, i) => {
      // Final positions
      const position: [number, number, number] = [
        (Math.random() - 0.5) * viewport.width * 0.8,
        (Math.random() - 0.5) * viewport.height * 0.8,
        -30 - Math.random() * 10
      ];
      
      // Initial positions - more centered for initial burst effect
      const initialPosition: [number, number, number] = [
        position[0] * 0.2,
        position[1] * 0.2,
        position[2] - 20
      ];
      
      return {
        position,
        initialPosition,
        color: new THREE.Color(
          0.3 + Math.random() * 0.2,
          0.3 + Math.random() * 0.2,
          0.6 + Math.random() * 0.4
        ),
        scale: 10 + Math.random() * 20,
        initialScale: 0, // Start from zero
        delay: i * 0.2 // Staggered animation
      };
    });
  }, [viewport.width, viewport.height]);
  
  // Animation
  useFrame(({ clock }) => {
    if (!glowRef.current) return;
    
    const time = clock.getElapsedTime();
    
    glowRef.current.children.forEach((glow, i) => {
      if (i >= glowPoints.length) return;
      const point = glowPoints[i];
      
      // Intro animation
      if (introAnimationProgress < 1) {
        // Consider delay in animation
        const delayedProgress = Math.max(0, Math.min((introAnimationProgress - point.delay) * 1.5, 1));
        const easing = easeOutCubic(delayedProgress);
        
        // Interpolate position
        glow.position.x = point.initialPosition[0] + (point.position[0] - point.initialPosition[0]) * easing;
        glow.position.y = point.initialPosition[1] + (point.position[1] - point.initialPosition[1]) * easing;
        glow.position.z = point.initialPosition[2] + (point.position[2] - point.initialPosition[2]) * easing;
        
        // Scale up and add extra burst at the start
        const burstEffect = delayedProgress < 0.3 
          ? 1.5 - delayedProgress * 1.5 
          : 0;
        
        const scaleValue = point.scale * easing * (1 + burstEffect);
        glow.scale.set(scaleValue, scaleValue, 1);
        
        // Opacity animation
        const material = (glow as THREE.Mesh).material as THREE.MeshBasicMaterial;
        material.opacity = 0.15 * easing * (1 + burstEffect);
      } else {
        // Normal animation after intro
        // Subtle pulsing
        const pulse = Math.sin(time * 0.2 + i) * 0.2 + 0.8;
        glow.scale.set(
          point.scale * pulse,
          point.scale * pulse,
          1
        );
        
        // Very subtle position changes
        glow.position.x += Math.sin(time * 0.1 + i * 10) * 0.01;
        glow.position.y += Math.cos(time * 0.1 + i * 10) * 0.01;
        
        // Scroll effect
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
            opacity={0} // Start invisible
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      ))}
    </group>
  );
}

// Code line interface
interface CodeLine {
  position: [number, number, number];
  initialPosition: [number, number, number];
  width: number;
  height: number;
  color: THREE.Color;
  speed: number;
  opacity: number;
  delay: number;
}

// Code effect props
interface CodeEffectProps {
  scrollData: ScrollData;
  introAnimationProgress: number;
}

// Code animation effect
function CodeEffect({ scrollData, introAnimationProgress }: CodeEffectProps): JSX.Element {
  const codeRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();
  
  // Code line parameters
  const codeLines = useMemo<CodeLine[]>(() => {
    const count = 15;
    const lines: CodeLine[] = [];
    
    for (let i = 0; i < count; i++) {
      // Final position
      const position: [number, number, number] = [
        (Math.random() - 0.5) * viewport.width * 0.6,
        (Math.random() - 0.5) * viewport.height * 1.5,
        -10 - Math.random() * 20
      ];
      
      // Initial position - come from top or sides
      let initialPosition: [number, number, number];
      if (Math.random() > 0.5) {
        // From top
        initialPosition = [
          position[0] * 0.3,
          viewport.height * 0.8,
          position[2] - 10
        ];
      } else {
        // From sides
        initialPosition = [
          (Math.random() > 0.5 ? 1 : -1) * viewport.width * 0.8,
          position[1] * 0.3,
          position[2] - 10
        ];
      }
      
      lines.push({
        position,
        initialPosition,
        width: 2 + Math.random() * 8,
        height: 0.05 + Math.random() * 0.1,
        color: new THREE.Color(
          0.3 + Math.random() * 0.2,
          0.6 + Math.random() * 0.3,
          0.7 + Math.random() * 0.3
        ),
        speed: 0.2 + Math.random() * 0.3,
        opacity: 0.2 + Math.random() * 0.3,
        delay: i * 0.1 // Staggered intro
      });
    }
    
    return lines;
  }, [viewport.width, viewport.height]);
  
  // Animation
  useFrame(({ clock }) => {
    if (!codeRef.current) return;
    
    const time = clock.getElapsedTime();
    
    codeRef.current.children.forEach((line, i) => {
      if (i >= codeLines.length) return;
      const cl = codeLines[i];
      
      const material = (line as THREE.Mesh).material as THREE.MeshBasicMaterial;
      
      // Intro animation
      if (introAnimationProgress < 1) {
        // Consider delayed animation per line
        const delayedProgress = Math.max(0, Math.min((introAnimationProgress - cl.delay), 1));
        const easing = easeOutCubic(delayedProgress);
        
        // Interpolate position
        line.position.x = cl.initialPosition[0] + (cl.position[0] - cl.initialPosition[0]) * easing;
        line.position.y = cl.initialPosition[1] + (cl.position[1] - cl.initialPosition[1]) * easing;
        line.position.z = cl.initialPosition[2] + (cl.position[2] - cl.initialPosition[2]) * easing;
        
        // Width animation
        (line as THREE.Mesh).scale.x = easing;
        
        // Opacity animation
        material.opacity = cl.opacity * easing;
      } else {
        // Normal animation after intro
        // Ensure line is in final position
        line.position.x = cl.position[0];
        line.position.y = cl.position[1];
        line.position.z = cl.position[2];
        (line as THREE.Mesh).scale.x = 1;
        
        // Pulsing opacity to simulate code typing/activity
        material.opacity = cl.opacity * (0.7 + 0.3 * Math.sin(time * cl.speed + i * 10));
        
        // Scroll influence
        line.position.y -= scrollData.scrollY * 0.00003;
        
        // Reset when out of view
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
        <mesh key={i} position={line.initialPosition} scale={[0, 1, 1]}>
          <planeGeometry args={[line.width, line.height]} />
          <meshBasicMaterial
            color={line.color}
            transparent
            opacity={0} // Start invisible
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      ))}
    </group>
  );
}

// Initial starburst animation effect
interface StarburstProps {
  introAnimationProgress: number;
}

function StarburstEffect({ introAnimationProgress }: StarburstProps): JSX.Element {
  const burstRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();
  
  // Animation
  useFrame(({ clock }) => {
    if (!burstRef.current) return;
    
    const time = clock.getElapsedTime();
    
    // Only show during first half of intro animation
    const opacity = introAnimationProgress < 0.5 ? (0.5 - introAnimationProgress) * 2 : 0;
    
    // Scale burst based on intro progress
    const scale = Math.min(5, 5 * introAnimationProgress * 2);
    
    burstRef.current.scale.set(scale, scale, 1);
    
    // Set opacity of all children
    burstRef.current.children.forEach((child) => {
      const material = (child as THREE.Mesh).material as THREE.MeshBasicMaterial;
      material.opacity = opacity;
    });
  });
  
  // Create starburst rays
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
        color: new THREE.Color(
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
      {/* Center glow */}
      <mesh>
        <circleGeometry args={[0.5, 32]} />
        <meshBasicMaterial 
          color={new THREE.Color(0.5, 0.7, 1.0)} 
          transparent 
          opacity={0.5} 
          blending={THREE.AdditiveBlending} 
        />
      </mesh>
      
      {/* Rays */}
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
            blending={THREE.AdditiveBlending} 
          />
        </mesh>
      ))}
    </group>
  );
}

// Camera reference interface
interface CameraRef {
  targetX: number;
  targetY: number;
}

// Main scene props
interface MainSceneProps {
  introAnimationProgress: number;
}

// Main scene composition
function MainScene({ introAnimationProgress }: MainSceneProps): JSX.Element {
  const scrollData = useScrollPosition();
  const { camera } = useThree();
  const cameraRef = useRef<CameraRef>({ targetX: 0, targetY: 0 });
  const initialCameraPosition = useRef({ x: 0, y: 10, z: 60 });
  const initialized = useRef<boolean>(false);
  
  // Set initial camera position when component mounts
  useEffect(() => {
    if (!initialized.current) {
      camera.position.set(0, 10, 60);
      camera.rotation.set(0.2, 0, 0);
      initialized.current = true;
    }
  }, [camera]);
  
  // Mouse movement effect for parallax
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
  
  // Camera animation
  useFrame(() => {
    // Safety check to prevent jumps
    if (introAnimationProgress === 0) {
      // Keep camera in initial position until animation starts
      camera.position.set(0, 10, 60);
      camera.rotation.set(0.2, 0, 0);
      return;
    }
    
    // Intro animation for camera
    if (introAnimationProgress < 1) {
      // Ease the camera from initial position to final position
      const easing = easeOutCubic(introAnimationProgress);
      
      // Camera flies in from above and zooms in
      camera.position.x = initialCameraPosition.current.x * (1 - easing);
      camera.position.y = initialCameraPosition.current.y * (1 - easing) + cameraRef.current.targetY * easing;
      camera.position.z = initialCameraPosition.current.z * (1 - easing) + 40 * easing;
      
      // Camera rotation animation
      camera.rotation.x = 0.2 * (1 - easing);
      camera.rotation.y = 0;
      camera.rotation.z = 0;
    } else {
      // Regular camera animation after intro
      // Subtle mouse parallax effect
      camera.position.x += (cameraRef.current.targetX - camera.position.x) * 0.05;
      camera.position.y += (cameraRef.current.targetY - camera.position.y) * 0.05;
      
      // Very subtle tilt effect based on mouse position
      camera.rotation.x += (cameraRef.current.targetY * 0.1 - camera.rotation.x) * 0.05;
      camera.rotation.y += (-cameraRef.current.targetX * 0.1 - camera.rotation.y) * 0.05;
      
      // Extremely subtle scroll-based camera movement
      camera.position.z = 40 + Math.sin(scrollData.scrollProgress * Math.PI) * 1.5;
    }
  });
  
  return (
    <>
      {/* Base gradient background */}
      <GradientBackground introAnimationProgress={introAnimationProgress} />
      
      {/* Starburst effect only during intro */}
      {introAnimationProgress > 0 && introAnimationProgress < 1 && 
        <StarburstEffect introAnimationProgress={introAnimationProgress} />
      }
      
      {/* Ambient glow */}
      <GlowEffect scrollData={scrollData} introAnimationProgress={introAnimationProgress} />
      
      {/* Grid for structure and depth */}
      <Grid scrollData={scrollData} introAnimationProgress={introAnimationProgress} />
      
      {/* Particle system for atmosphere */}
      <ParticleSystem scrollData={scrollData} introAnimationProgress={introAnimationProgress} />
      
      {/* Tech-themed elements */}
      <TechElements scrollData={scrollData} introAnimationProgress={introAnimationProgress} />
      
      {/* Code effect for developer theme */}
      <CodeEffect scrollData={scrollData} introAnimationProgress={introAnimationProgress} />
      
      {/* Ambient light for better visibility */}
      <ambientLight intensity={0.3} />
    </>
  );
}

// Entry point component with initial animation
export default function ModernPortfolioBackground(): JSX.Element {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [opacity, setOpacity] = useState<number>(0);
  const [introAnimationProgress, setIntroAnimationProgress] = useState<number>(0);
  const [readyToAnimate, setReadyToAnimate] = useState<boolean>(false);
  
  useEffect(() => {
    // Initialize but keep invisible
    setIsLoaded(true);
    
    // First ensure everything is loaded but hidden
    const readyTimer = setTimeout(() => {
      // Now we're ready to start animation
      setReadyToAnimate(true);
      
      // Fade in animation for overall container
      setOpacity(1);
      
      // Setup intro animation with proper timing after a slight delay
      const startTime = Date.now();
      const introAnimationDuration = 3500; // 3.5 seconds intro animation
      
      const animateIntro = () => {
        const elapsedTime = Date.now() - startTime;
        const progress = Math.min(elapsedTime / introAnimationDuration, 1);
        
        setIntroAnimationProgress(progress);
        
        if (progress < 1) {
          requestAnimationFrame(animateIntro);
        }
      };
      
      // Start intro animation
      requestAnimationFrame(animateIntro);
    }, 300); // Wait for 300ms to ensure all components are mounted properly
    
    return () => {
      clearTimeout(readyTimer);
    };
  }, []);
  
  return (
    <>
      {/* Base background color */}
      <div className="fixed inset-0 -z-10 bg-[#050510]" />
      
      {/* Preloader overlay - gradually fades out */}
      <div 
        className="fixed inset-0 -z-5 bg-[#050510] pointer-events-none transition-opacity duration-1000"
        style={{ opacity: readyToAnimate ? 0 : 1 }}
      />
      
      {/* 3D Canvas */}
      {isLoaded && (
        <div 
          className="fixed inset-0 -z-5 pointer-events-none transition-opacity duration-1500"
          style={{ 
            opacity,
            width: '100vw',
            height: '100vh',
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            overflow: 'hidden'
          }}
        >
          <Canvas
            style={{ 
              position: 'absolute',
              width: '100%', 
              height: '100%',
              display: 'block'
            }}
            camera={{
              position: [0, 10, 60],
              fov: 60, // FOV를 더 넓게 조정 (45에서 60으로)
              near: 0.1,
              far: 2000 // far plane을 더 멀리 설정 (1000에서 2000으로)
            }}
            dpr={[1, 2]}
            gl={{
              alpha: true,
              antialias: true,
              powerPreference: "high-performance",
              stencil: false,
              depth: true
            }}
          >
            <MainScene introAnimationProgress={readyToAnimate ? introAnimationProgress : 0} />
          </Canvas>
        </div>
      )}
    </>
  );
}