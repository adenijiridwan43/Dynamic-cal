export const mapKeyToButton = (
  key: string
): { value: string; type: 'number' | 'operator' | 'function' | 'clear' | 'equals' } | null => {
  if (!key) return null;

  // digits and decimal
  if (/^[0-9]$/.test(key)) return { value: key, type: 'number' };
  if (key === '.') return { value: '.', type: 'number' };

  // operators
  if (key === '+' || key === '-' || key === '*' || key === '/' || key === '^')
    return { value: key === '*' ? '×' : key === '/' ? '÷' : key, type: 'operator' };

  // enter/equals
  if (key === 'Enter' || key === '=') return { value: '=', type: 'equals' };

  // clear / backspace
  if (key === 'Backspace') return { value: 'backspace', type: 'operator' };
  if (key.toLowerCase() === 'c') return { value: 'clear', type: 'clear' };

  // simple functions
  const lower = key.toLowerCase();
  if (lower === 'p') return { value: 'π', type: 'function' };
  if (lower === 's') return { value: 'sin', type: 'function' };
  if (lower === 'l') return { value: 'ln', type: 'function' };

  return null;
};
