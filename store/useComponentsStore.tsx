import { ReactNode } from 'react';
import create from 'zustand';

interface ComponentState {
  components: ReactNode[];
  addComponent: (comp: ReactNode) => void;
}

export const useComponentStore = create<ComponentState>(set => ({
  components: [],
  addComponent: comp =>
    set(state => ({ components: [...state.components, comp] })),
}));
