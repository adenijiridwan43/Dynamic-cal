import { useCallback } from 'react';
import { mapKeyToButton } from '../utils/keyboard';

export const useKeyboard = (onPress?: (value: string, type: string) => void) => {
  // handleKey can be used by components (or future keyboard listeners)
  const handleKey = useCallback(
    (key: string) => {
      const mapped = mapKeyToButton(key);
      if (mapped && onPress) {
        onPress(mapped.value, mapped.type);
      }
      return mapped;
    },
    [onPress]
  );

  return { handleKey };
};
