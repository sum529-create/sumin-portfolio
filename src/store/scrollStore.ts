import { create } from 'zustand';

interface ScrollStoreProps {
  targetSection: string | null;
  setTargetSection: (id: string | null) => void;
}

export const useScrollStore = create<ScrollStoreProps>((set) => ({
  targetSection: null,
  setTargetSection: (id) => set({ targetSection: id }),
}));
