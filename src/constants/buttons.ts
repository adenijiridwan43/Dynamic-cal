import { ButtonConfig } from '../types';

export const BASIC_BUTTONS: ButtonConfig[][] = [
  [
    { label: 'C', value: 'clear', type: 'clear' },
    { label: '( )', value: 'brackets', type: 'operator' },
    { label: '%', value: '%', type: 'operator' },
    { label: '÷', value: '÷', type: 'operator' },
  ],
  [
    { label: '7', value: '7', type: 'number' },
    { label: '8', value: '8', type: 'number' },
    { label: '9', value: '9', type: 'number' },
    { label: '×', value: '×', type: 'operator' },
  ],
  [
    { label: '4', value: '4', type: 'number' },
    { label: '5', value: '5', type: 'number' },
    { label: '6', value: '6', type: 'number' },
    { label: '-', value: '-', type: 'operator' },
  ],
  [
    { label: '1', value: '1', type: 'number' },
    { label: '2', value: '2', type: 'number' },
    { label: '3', value: '3', type: 'number' },
    { label: '+', value: '+', type: 'operator' },
  ],
  [
    { label: '⌫', value: 'backspace', type: 'function' },
    { label: '0', value: '0', type: 'number' },
    { label: '.', value: '.', type: 'number' },
    { label: '=', value: 'equals', type: 'equals' },
  ],
];

export const SCIENTIFIC_BUTTONS: ButtonConfig[][] = [
  [
    { label: 'sin', value: 'sin', type: 'function' },
    { label: 'cos', value: 'cos', type: 'function' },
    { label: 'tan', value: 'tan', type: 'function' },
    { label: 'π', value: 'π', type: 'function' },
  ],
  [
    { label: 'log', value: 'log', type: 'function' },
    { label: 'ln', value: 'ln', type: 'function' },
    { label: '√', value: '√', type: 'function' },
    { label: 'x²', value: 'x²', type: 'function' },
  ],
];

export const MEMORY_BUTTONS: ButtonConfig[] = [
  { label: 'MC', value: 'MC', type: 'function' },
  { label: 'MR', value: 'MR', type: 'function' },
  { label: 'M+', value: 'M+', type: 'function' },
  { label: 'M-', value: 'M-', type: 'function' },
];