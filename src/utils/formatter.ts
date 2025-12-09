export const formatResult = (value: string): string => {
  if (value === 'Error' || value === '0') return value;
  
  const num = parseFloat(value);
  if (isNaN(num)) return value;
  
  // Scientific notation for very large/small numbers
  if (Math.abs(num) >= 1e10 || (Math.abs(num) < 1e-6 && num !== 0)) {
    return num.toExponential(6);
  }
  
  // Regular formatting
  return num.toLocaleString('en-US', { 
    maximumFractionDigits: 10,
    useGrouping: true 
  });
};

export const truncateExpression = (expr: string, maxLength: number = 30): string => {
  if (expr.length <= maxLength) return expr;
  return '...' + expr.slice(-maxLength);
};