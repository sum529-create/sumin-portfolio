// Easing functions
export function easeOutCubic(x: number): number {
  return 1 - Math.pow(1 - x, 3);
}

export function easeOutElastic(x: number): number {
  const c4 = (2 * Math.PI) / 3;
  return x === 0
    ? 0
    : x === 1
    ? 1
    : Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1;
}

// Animation helpers
export function interpolatePosition(
  start: [number, number, number],
  end: [number, number, number],
  progress: number
): [number, number, number] {
  return [
    start[0] + (end[0] - start[0]) * progress,
    start[1] + (end[1] - start[1]) * progress,
    start[2] + (end[2] - start[2]) * progress,
  ];
}

export function calculateOpacity(
  baseOpacity: number,
  progress: number,
  burstEffect: number = 0
): number {
  return baseOpacity * progress * (1 + burstEffect);
}

export function calculateScale(
  baseScale: number,
  progress: number,
  burstEffect: number = 0
): number {
  return baseScale * progress * (1 + burstEffect);
}

export function calculatePulse(time: number, speed: number, offset: number = 0): number {
  return Math.sin(time * speed + offset) * 0.2 + 0.8;
} 