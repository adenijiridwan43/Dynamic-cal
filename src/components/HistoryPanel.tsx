import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Modal,
  StyleSheet,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { CalculationHistory } from '../types';

interface HistoryPanelProps {
  visible: boolean;
  history: CalculationHistory[];
  onClose: () => void;
  onClear: () => void;
  onSelectItem: (result: string) => void;
}

export const HistoryPanel: React.FC<HistoryPanelProps> = ({
  visible,
  history,
  onClose,
  onClear,
  onSelectItem,
}) => {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.header}>
            <Text style={styles.title}>History</Text>
            <View style={styles.actions}>
              <TouchableOpacity onPress={onClear} style={styles.clearButton}>
                <Text style={styles.clearButtonText}>Clear All</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                <MaterialIcons name="close" size={24} color="#cbd5e1" />
              </TouchableOpacity>
            </View>
          </View>

          <ScrollView style={styles.list}>
            {history.length === 0 ? (
              <Text style={styles.emptyText}>No calculations yet</Text>
            ) : (
              history.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => {
                    onSelectItem(item.result);
                    onClose();
                  }}
                  style={styles.item}
                >
                  <Text style={styles.expression} numberOfLines={1}>
                    {item.expression}
                  </Text>
                  <Text style={styles.result}>= {item.result}</Text>
                  <Text style={styles.time}>
                    {new Date(item.timestamp).toLocaleTimeString()}
                  </Text>
                </TouchableOpacity>
              ))
            )}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#1e293b',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    maxHeight: '80%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#334155',
  },
  title: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  clearButton: {
    backgroundColor: 'rgba(239, 68, 68, 0.2)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    marginRight: 12,
  },
  clearButtonText: {
    color: '#ef4444',
    fontSize: 12,
  },
  closeButton: {
    padding: 4,
  },
  list: {
    padding: 16,
  },
  emptyText: {
    color: '#94a3b8',
    textAlign: 'center',
    paddingVertical: 40,
  },
  item: {
    backgroundColor: 'rgba(51, 65, 85, 0.5)',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#334155',
  },
  expression: {
    color: '#94a3b8',
    fontSize: 14,
    marginBottom: 4,
  },
  result: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 4,
  },
  time: {
    color: '#64748b',
    fontSize: 12,
  },
});