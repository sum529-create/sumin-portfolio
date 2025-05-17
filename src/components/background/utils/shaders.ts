export const particleVertexShader = `
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
`;

export const particleFragmentShader = `
  varying vec3 vPosition;
  
  void main() {
    // Soft circular particles
    vec2 center = gl_PointCoord - vec2(0.5);
    float dist = length(center);
    float alpha = 1.0 - smoothstep(0.3, 0.5, dist);
    
    // Subtle color variation based on position
    vec3 color = vec3(0.5, 0.7, 1.0) + vPosition * 0.02;
    
    gl_FragColor = vec4(color, alpha * 0.5);
  }
`;

export const gradientVertexShader = `
  varying vec2 vUv;
  
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const gradientFragmentShader = `
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
`; 