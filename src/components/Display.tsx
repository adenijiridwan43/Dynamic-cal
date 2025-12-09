import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface DisplayProps {
  expression: string;
  display: string;
  memory: number;
  onCopy: () => void;
  copied: boolean;
}

export const Display: React.FC<DisplayProps> = ({
  expression,
  display,
  memory,
  onCopy,
  copied,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        {memory !== 0 && (
          <View style={styles.memoryBadge}>
            <Text style={styles.memoryText}>M</Text>
          </View>
        )}
        <TouchableOpacity onPress={onCopy} style={styles.copyButton}>
          <MaterialIcons
            name={copied ? 'check' : 'content-copy'}
            size={18}
            color={copied ? '#10b981' : '#94a3b8'}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.expressionText} numberOfLines={2}>
        {expression || ' '}
      </Text>

      <Text style={styles.displayText} numberOfLines={1} adjustsFontSizeToFit>
        {display}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 30,
    minHeight: 200,
    justifyContent: 'flex-end',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  memoryBadge: {
    backgroundColor: 'rgba(124, 58, 237, 0.3)',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(124, 58, 237, 0.5)',
  },
  memoryText: {
    color: '#a78bfa',
    fontSize: 12,
    fontWeight: '600',
  },
  copyButton: {
    padding: 8,
    marginLeft: 'auto',
  },
  expressionText: {
    color: '#94a3b8',
    fontSize: 18,
    textAlign: 'right',
    marginBottom: 8,
    minHeight: 24,
  },
  displayText: {
    color: '#ffffff',
    fontSize: 56,
    fontWeight: '300',
    textAlign: 'right',
    letterSpacing: -1,
  },
});