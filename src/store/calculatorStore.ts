import { create } from 'zustand';
import { CalculatorState, CalculationHistory } from '../types';

export const useCalculatorStore = create<CalculatorState>((set) => ({
  display: '0',
  expression: '',
  history: [],
  mode: 'basic',
  memory: 0,
  lastResult: '',
  setDisplay: (display) => set({ display }),
  setExpression: (expression) => set({ expression }),
  addToHistory: (item) =>
    set((state) => ({
      history: [item, ...state.history].slice(0, 50),
    })),
  clearHistory: () => set({ history: [] }),
  toggleMode: () =>
    set((state) => ({
      mode: state.mode === 'basic' ? 'scientific' : 'basic',
    })),
  setMemory: (value) => set({ memory: value }),
  setLastResult: (result) => set({ lastResult: result }),
}));