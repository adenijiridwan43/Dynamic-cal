import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';
import { Display } from './Display';
import { Button } from './Button';
import { HistoryPanel } from './HistoryPanel';
import { AnimatedBackground } from './AnimatedBackground';
import { useCalculator } from '../hooks/useCalculator';
import { BASIC_BUTTONS, SCIENTIFIC_BUTTONS, MEMORY_BUTTONS } from '../constants/buttons';

export const Calculator: React.FC = () => {
  const {
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
  } = useCalculator();

  const [showHistory, setShowHistory] = useState(false);
  const [copied, setCopied] = useState(false);
  const [openBracket, setOpenBracket] = useState(true);

  const handleButtonPress = (value: string, type: string) => {
    if (value === 'equals') {
      calculate();
    } else if (value === 'brackets') {
      if (openBracket) {
        handleNumberClick('(');
        setOpenBracket(false);
      } else {
        handleNumberClick(')');
        setOpenBracket(true);
      }
    } else if (type === 'number') {
      handleNumberClick(value);
    } else if (type === 'operator') {
      if (value === 'backspace') {
        handleBackspace();
      } else if (value === '%') {
        handleOperatorClick('/100');
      } else {
        handleOperatorClick(value);
      }
    } else if (type === 'function') {
      if (['MC', 'MR', 'M+', 'M-'].includes(value)) {
        handleMemory(value);
      } else {
        handleScientificFunction(value);
      }
    } else if (type === 'clear') {
      handleClear();
      setOpenBracket(true);
    }
  };

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(display);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <View style={styles.container}>
      <AnimatedBackground />

      {/* Modern Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.appTitle}>Calculator</Text>
        </View>

        <View style={styles.headerRight}>
          <TouchableOpacity
            onPress={() => setShowHistory(true)}
            style={styles.headerButton}
          >
            <MaterialIcons name="history" size={24} color="#e2e8f0" />
          </TouchableOpacity>

          <TouchableOpacity onPress={toggleMode} style={styles.modeToggle}>
            <MaterialIcons 
              name={mode === 'basic' ? 'functions' : 'dialpad'} 
              size={20} 
              color="#ffffff" 
            />
            <Text style={styles.modeText}>
              {mode === 'basic' ? 'Scientific' : 'Basic'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Display */}
      <Display
        expression={expression}
        display={display}
        memory={memory}
        onCopy={copyToClipboard}
        copied={copied}
      />

      {/* History Panel */}
      <HistoryPanel
        visible={showHistory}
        history={history}
        onClose={() => setShowHistory(false)}
        onClear={clearHistory}
        onSelectItem={(result) => {
          handleNumberClick(result);
        }}
      />

      {/* Scrollable Button Area */}
      <ScrollView 
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.buttonsContainer}>
          {/* Scientific Mode Buttons */}
          {mode === 'scientific' && (
            <>
              {SCIENTIFIC_BUTTONS.map((row, rowIndex) => (
                <View key={`sci-${rowIndex}`} style={styles.buttonRow}>
                  {row.map((button, colIndex) => (
                    <Button
                      key={`sci-${rowIndex}-${colIndex}`}
                      label={button.label}
                      onClick={() => handleButtonPress(button.value, button.type)}
                      type={button.type}
                      span={button.span}
                    />
                  ))}
                </View>
              ))}

              {/* Memory Buttons */}
              <View style={styles.buttonRow}>
                {MEMORY_BUTTONS.map((button, index) => (
                  <Button
                    key={`mem-${index}`}
                    label={button.label}
                    onClick={() => handleButtonPress(button.value, button.type)}
                    type={button.type}
                  />
                ))}
              </View>
            </>
          )}

          {/* Basic Buttons */}
          {BASIC_BUTTONS.map((row, rowIndex) => (
            <View key={`basic-${rowIndex}`} style={styles.buttonRow}>
              {row.map((button, colIndex) => (
                <Button
                  key={`basic-${rowIndex}-${colIndex}`}
                  label={button.label}
                  onClick={() => handleButtonPress(button.value, button.type)}
                  type={button.type}
                  span={button.span}
                />
              ))}
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 12,
  },
  headerLeft: {
    flex: 1,
  },
  appTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#ffffff',
    letterSpacing: -0.5,
  },
  headerRight: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  headerButton: {
    padding: 8,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  modeToggle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: 'rgba(124, 58, 237, 0.6)',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
  },
  modeText: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '600',
  },
  scrollContainer: {
    flex: 1,
  },
  buttonsContainer: {
    paddingHorizontal: 12,
    paddingBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    marginBottom: 0,
  },
});