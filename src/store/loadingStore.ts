import { create } from 'zustand';

interface LoadingStore {
  isLoading: boolean;
  contentVisible: boolean;
  setIsLoading: (loading: boolean) => void;
  setContentVisible: (visible: boolean) => void;
}

export const useLoadingStore = create<LoadingStore>((set) => ({
  isLoading: false,
  contentVisible: false,
  setIsLoading: (loading: boolean) => set({ isLoading: loading }),
  setContentVisible: (visible: boolean) => set({ contentVisible: visible }),
}));
