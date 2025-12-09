export const evaluateExpression = (expr: string): string => {
  try {
    if (!expr || expr.trim() === '') return '0';

    let evalExpression = expr
      .replace(/×/g, '*')
      .replace(/÷/g, '/')
      .replace(/π/g, Math.PI.toString())
      .replace(/e/g, Math.E.toString())
      .replace(/sin\(/g, 'Math.sin(')
      .replace(/cos\(/g, 'Math.cos(')
      .replace(/tan\(/g, 'Math.tan(')
      .replace(/log\(/g, 'Math.log10(')
      .replace(/ln\(/g, 'Math.log(')
      .replace(/√\(/g, 'Math.sqrt(')
      .replace(/\^/g, '**');

    // eslint-disable-next-line no-eval
    const result = eval(evalExpression);
    return Number.isFinite(result) ? result.toString() : 'Error';
  } catch (error) {
    return 'Error';
  }
};

export const formatNumber = (num: string): string => {
  if (num === 'Error' || num === '0') return num;
  
  const parsed = parseFloat(num);
  if (isNaN(parsed)) return num;
  
  // Format with commas for thousands
  if (Math.abs(parsed) >= 1000) {
    return parsed.toLocaleString('en-US', { maximumFractionDigits: 8 });
  }
  
  return num;
};

// ensure a default export (compatible with CJS/interop)
export default evaluateExpression;