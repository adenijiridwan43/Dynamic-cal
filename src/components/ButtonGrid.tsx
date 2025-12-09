import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from './Button';
import { ButtonConfig } from '../types';

interface ButtonGridProps {
  buttons: ButtonConfig[][];
  onPress: (value: string, type: string) => void;
}

export const ButtonGrid: React.FC<ButtonGridProps> = ({ buttons, onPress }) => {
  return (
    <View style={styles.container}>
      {buttons.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((button, colIndex) => (
            <Button
              key={`${rowIndex}-${colIndex}`}
              label={button.label}
              onClick={() => onPress(button.value, button.type)}
              type={button.type}
              span={button.span}
            />
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 8,
  },
});