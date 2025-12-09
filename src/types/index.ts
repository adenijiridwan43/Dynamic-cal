export interface CalculationHistory {
  id: string;
  expression: string;
  result: string;
  timestamp: number;
}

export interface CalculatorState {
  display: string;
  expression: string;
  history: CalculationHistory[];
  mode: 'basic' | 'scientific';
  memory: number;
  lastResult: string;
  setDisplay: (display: string) => void;
  setExpression: (expression: string) => void;
  addToHistory: (item: CalculationHistory) => void;
  clearHistory: () => void;
  toggleMode: () => void;
  setMemory: (value: number) => void;
  setLastResult: (result: string) => void;
}

export type ButtonType = 'number' | 'operator' | 'function' | 'equals' | 'clear';

export interface ButtonConfig {
  label: string;
  value: string;
  type: ButtonType;
  span?: number;
}