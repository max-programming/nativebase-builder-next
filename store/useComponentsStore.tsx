import { ReactNode } from 'react';
import create from 'zustand';

interface ComponentState {
  imports: string[];
  components: ReactNode[];
  addComponent: (comp: ReactNode) => void;
  clearComponents: () => void;
  addImport: (importt: string) => void;
}

export const useComponentStore = create<ComponentState>(set => ({
  imports: [],
  components: [],
  addComponent: comp =>
    set(state => ({ components: [...state.components, comp] })),
  clearComponents: () => set(state => ({ components: [] })),
  addImport: importt =>
    set(state => ({ imports: [...state.imports, importt] })),
}));
