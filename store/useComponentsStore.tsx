import { Button } from 'native-base';
import { ReactNode } from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';
import create from 'zustand';

interface ComponentState {
  imports: string[];
  components: ReactNode[];
  globalStyles: any,
  addComponent: (comp: ReactNode) => void;
  duplicateComponent: () => void;
  editComponents: (id: number, component: ReactNode) => void;
  clearComponents: () => void;
  addImport: (importt: string) => void;
  updateStyles: (newStyle: any) => void;
}

export const useComponentStore = create<ComponentState>(set => ({
  imports: [],
  components: [],
  globalStyles: {},
  editComponents: (id, component) => set(state => {
    const comps = state.components.map((comp, idx) => {
      if (idx === id) return component
      return comp
    })
    console.log(reactElementToJSXString(comps[0]))
    return {components: comps}
  }),
  addComponent: comp =>
    set(state => ({ components: [...state.components, comp] })),
  duplicateComponent: () =>
    set(state => ({
      components: [...state.components, state.components.at(-1)],
    })),
  clearComponents: () => set(state => ({ components: [] })),
  addImport: importt =>
    set(state => ({ imports: [...state.imports, importt] })),
  updateStyles: (newStyle) => set(state => ({ globalStyles: { ...state.globalStyles, ...newStyle } }))
}));
