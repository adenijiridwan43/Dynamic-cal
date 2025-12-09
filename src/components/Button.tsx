import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';
import * as Haptics from 'expo-haptics';
import { ButtonType } from '../types';

interface ButtonProps {
  label: string;
  onClick: () => void;
  type?: ButtonType;
  span?: number;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = 'number',
  span = 1,
}) => {
  const handlePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onClick();
  };

  const getButtonStyle = (): ViewStyle => {
    const baseStyle: ViewStyle = { flex: span };

    switch (type) {
      case 'number':
        return { ...baseStyle, backgroundColor: '#2d3748' };
      case 'operator':
        return { ...baseStyle, backgroundColor: '#2563eb' };
      case 'function':
        return { ...baseStyle, backgroundColor: '#7c3aed' };
      case 'equals':
        return { ...baseStyle, backgroundColor: '#059669' };
      case 'clear':
        return { ...baseStyle, backgroundColor: '#dc2626' };
      default:
        return { ...baseStyle, backgroundColor: '#2d3748' };
    }
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.button, getButtonStyle()]}
      activeOpacity={0.8}
    >
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 65,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 6,
    marginVertical: 6,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 26,
    fontWeight: '500',
  },
});