import { ReactNode } from 'react';
import create from 'zustand';

interface ComponentState {
  imports: string[];
  components: ReactNode[];
  globalStyles:any,
  addComponent: (comp: ReactNode) => void;
  duplicateComponent: () => void;
  clearComponents: () => void;
  addImport: (importt: string) => void;
  updateStyles:(newStyle:any)=>void;
}

export const useComponentStore = create<ComponentState>(set => ({
  imports: [],
  components: [],
  globalStyles: {margin:100},
  addComponent: comp =>
  set(state => ({ components: [...state.components, comp] })),
  duplicateComponent: () =>
  set(state => ({
    components: [...state.components, state.components.at(-1)],
  })),
  clearComponents: () => set(state => ({ components: [] })),
  addImport: importt =>
    set(state => ({ imports: [...state.imports, importt] })),
    updateStyles:(newStyle)=> set(state => ({ globalStyles: {...state.globalStyles, ...newStyle}}))
}));
