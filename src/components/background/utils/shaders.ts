export const particleVertexShader = `
  attribute float size;
  varying vec3 vPosition;
  uniform float time;
  uniform float scrollProgress;
  uniform float scrollVelocity;
  uniform float introProgress;
  
  void main() {
    vPosition = position;
    
    // 인트로 애니메이션 - 파티클이 멀리서 시작하여 위치로 이동
    vec3 startPos = position * 3.0; // 더 멀리서 시작
    startPos.z -= 30.0; // z 방향으로 더 멀리
    
    // 인트로 진행도에 따른 보간 (이징 적용)
    float easedProgress = introProgress * introProgress * (3.0 - 2.0 * introProgress); // 스무스스텝
    vec3 pos = mix(startPos, position, easedProgress);
    
    // 시간과 위치에 따른 미세한 움직임
    pos.y += sin(time * 0.2 + position.x * 0.05) * 0.5 * mix(0.0, 1.0, introProgress);
    pos.x += cos(time * 0.2 + position.y * 0.05) * 0.5 * mix(0.0, 1.0, introProgress);
    
    // 스크롤 영향 - 더 미세하게
    pos.y -= scrollProgress * 1.5 * mix(0.0, 1.0, introProgress);
    
    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    // 인트로 중 크기도 커짐
    gl_PointSize = size * (300.0 / -mvPosition.z) * mix(0.3, 1.0, introProgress);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

export const particleFragmentShader = `
  varying vec3 vPosition;
  
  void main() {
    // 부드러운 원형 파티클
    vec2 center = gl_PointCoord - vec2(0.5);
    float dist = length(center);
    float alpha = 1.0 - smoothstep(0.3, 0.5, dist);
    
    // 위치에 따른 미세한 색상 변화
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
    // 위치와 시간에 따른 동적 그라데이션
    vec2 uv = vUv;
    
    // 천천히 움직이는 그라데이션 생성
    float noise = sin(uv.x * 3.0 + time * 0.1) * 0.5 + 0.5;
    noise *= sin(uv.y * 2.0 - time * 0.05) * 0.5 + 0.5;
    
    // 기술 테마를 위한 현대적, 전문적인 색상 팔레트
    vec3 color1 = vec3(0.05, 0.05, 0.15); // 진한 파란색
    vec3 color2 = vec3(0.1, 0.1, 0.2);    // 약간 밝은 파란색
    vec3 color3 = vec3(0.15, 0.15, 0.25); // 더 밝은 파란색
    
    // 인트로 중 색상 강화
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
