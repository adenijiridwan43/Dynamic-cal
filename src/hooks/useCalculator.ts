
import { useCalculatorStore } from '../store/calculatorStore';
import { evaluateExpression } from '../utils/calculator';

export const useCalculator = () => {
  const {
    display,
    expression,
    history,
    mode,
    memory,
    setDisplay,
    setExpression,
    addToHistory,
    clearHistory,
    toggleMode,
    setMemory,
  } = useCalculatorStore();

  const handleNumberClick = (num: string) => {
    if (display === '0' || display === 'Error') {
      setDisplay(num);
      setExpression(num);
    } else {
      setDisplay(display + num);
      setExpression(expression + num);
    }
  };

  const handleOperatorClick = (op: string) => {
    setExpression(expression + op);
    setDisplay(display + op);
  };

  const handleClear = () => {
    setDisplay('0');
    setExpression('');
  };

  const handleBackspace = () => {
    if (display.length > 1) {
      setDisplay(display.slice(0, -1));
      setExpression(expression.slice(0, -1));
    } else {
      setDisplay('0');
      setExpression('');
    }
  };

  const calculate = () => {
    if (!expression || expression === '0') return;
    
    const result = evaluateExpression(expression);
    setDisplay(result);

    if (result !== 'Error') {
      addToHistory({
        id: Date.now().toString(),
        expression: expression,
        result: result,
        timestamp: Date.now(),
      });
      setExpression(result);
    } else {
      setExpression('');
    }
  };

  const handleScientificFunction = (func: string) => {
    switch (func) {
      case 'sin':
      case 'cos':
      case 'tan':
      case 'log':
      case 'ln':
      case '√':
        setExpression(expression + func + '(');
        setDisplay(display + func + '(');
        break;
      case 'π':
        const piValue = Math.PI.toString();
        setExpression(expression + piValue);
        setDisplay(display + 'π');
        break;
      case 'x²':
        setExpression(expression + '^2');
        setDisplay(display + '²');
        break;
    }
  };

  const handleMemory = (operation: string) => {
    const currentNum = parseFloat(display);
    if (isNaN(currentNum)) return;

    switch (operation) {
      case 'MC':
        setMemory(0);
        break;
      case 'MR':
        setDisplay(memory.toString());
        setExpression(memory.toString());
        break;
      case 'M+':
        setMemory(memory + currentNum);
        break;
      case 'M-':
        setMemory(memory - currentNum);
        break;
    }
  };

  return {
    display,
    expression,
    history,
    mode,
    memory,
    handleNumberClick,
    handleOperatorClick,
    handleClear,
    handleBackspace,
    calculate,
    handleScientificFunction,
    handleMemory,
    clearHistory,
    toggleMode,
  };
};