import { create } from 'zustand';

interface IntroProgressStore {
  introAnimationProgress: number;
  setIntroAnimationProgress: (progress: number) => void;
}

export const useIntroProgressStore = create<IntroProgressStore>((set) => ({
  introAnimationProgress: 1,
  setIntroAnimationProgress: (progress: number) =>
    set({ introAnimationProgress: progress }),
}));
