import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ButtonGrid } from './ButtonGrid';
import { SCIENTIFIC_BUTTONS } from '../constants/buttons';

interface ScientificPanelProps {
  onPress: (value: string, type: string) => void;
}

export const ScientificPanel: React.FC<ScientificPanelProps> = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <ButtonGrid buttons={SCIENTIFIC_BUTTONS} onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
});