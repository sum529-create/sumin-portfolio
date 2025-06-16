import { Group, Points, ShaderMaterial, MeshBasicMaterial, Color } from 'three';

export interface ScrollData {
  scrollY: number;
  scrollVelocity: number;
  scrollProgress: number;
}

export interface CameraRef {
  targetX: number;
  targetY: number;
}

export interface CustomShaderMaterial extends ShaderMaterial {
  uniforms: {
    time: { value: number };
    scrollProgress: { value: number };
    scrollVelocity: { value: number };
    introProgress: { value: number };
  };
}

export interface GradientMaterial extends ShaderMaterial {
  uniforms: {
    time: { value: number };
    introProgress: { value: number };
  };
}

export interface TechElement {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
  color: string;
  shapeType: number;
  speed: number;
  initialPosition: [number, number, number];
  targetPosition: [number, number, number];
  animationDelay: number;
}

export interface GlowPoint {
  position: [number, number, number];
  color: Color;
  scale: number;
  initialScale: number;
  initialPosition: [number, number, number];
  delay: number;
}

export interface CodeLine {
  position: [number, number, number];
  initialPosition: [number, number, number];
  width: number;
  height: number;
  color: Color;
  speed: number;
  opacity: number;
  delay: number;
}

export interface ParticleData {
  positions: Float32Array;
  sizes: Float32Array;
}

export interface ComponentProps {
  scrollData: ScrollData;
  introAnimationProgress: number;
}
