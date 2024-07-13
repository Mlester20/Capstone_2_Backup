import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

type LivestockType = 'Pig' | 'Goat' | 'Duck' | 'Chicken';
type StageOptions = {
  [key in LivestockType]: string[];
};

const stageOptions: StageOptions = {
  Pig: ['Starter', 'Grower', 'Finisher'],
  Goat: ['Starter'],
  Duck: ['Starter', 'Grower', 'Finisher'],
  Chicken: ['Starter', 'Grower', 'Finisher'],
};

const LiveStockScreen: React.FC = () => {
  // const navigation = useNavigation();
  const [selectedLivestock, setSelectedLivestock] = useState<LivestockType | undefined>(undefined);
  const [selectedStage, setSelectedStage] = useState<string | undefined>(undefined);
  const [inputsEnabled, setInputsEnabled] = useState(false);

  const livestockOptions: LivestockType[] = ['Pig', 'Goat', 'Duck', 'Chicken'];

  const handleLivestockChange = (itemValue: LivestockType | undefined) => {
    setSelectedLivestock(itemValue);
    setSelectedStage(undefined); // Reset the stage when livestock changes
    setInputsEnabled(false); // Disable form until both selections are made
  };

  const handleStageChange = (itemValue: string | undefined) => {
    setSelectedStage(itemValue);
    if (selectedLivestock && itemValue) {
      setInputsEnabled(true); // Enable form when both selections are made
    } else {
      setInputsEnabled(false); // Otherwise, keep form disabled
    }
  };

  const resetForm = () => {
    setSelectedLivestock(undefined);
    setSelectedStage(undefined);
    setInputsEnabled(false);
  };

  const ingredientPlaceholders = [1, 2, 3, 4, 5, 6].map((num) => (
    <TextInput
      key={num}
      style={styles.input}
      placeholder={`Ingredient ${num}`}
      editable={inputsEnabled}
    />
  ));

  const quantityPlaceholders = [1, 2, 3, 4, 5, 6].map((num) => (
    <TextInput
      key={num}
      style={styles.input}
      placeholder={`Quantity ${num}`}
      editable={inputsEnabled}
    />
  ));

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.label}>Select Live Stock | Stage</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedLivestock}
            onValueChange={handleLivestockChange}
            style={styles.picker}
          >
            <Picker.Item label="Select a livestock" value={undefined} />
            {livestockOptions.map((option) => (
              <Picker.Item key={option} label={option} value={option} />
            ))}
          </Picker>

          <Picker
            selectedValue={selectedStage}
            onValueChange={handleStageChange}
            style={[styles.picker, styles.stagePicker]}
            enabled={selectedLivestock !== undefined}
          >
            <Picker.Item label="Select a stage" value={undefined} />
            {selectedLivestock &&
              stageOptions[selectedLivestock].map((option) => (
                <Picker.Item key={option} label={option} value={option} />
              ))}
          </Picker>
        </View>

        <Text style={styles.selectionLabel}>
          Selected Live Stock: {selectedLivestock || 'None'} | Selected Stage: {selectedStage || 'None'}
        </Text>

        <Text style={styles.stepLabel}>Step 1: Input Ingredients</Text>
        <View style={styles.inputsContainer}>{ingredientPlaceholders.slice(0, 2)}</View>
        <View style={styles.inputsContainer}>{ingredientPlaceholders.slice(2, 4)}</View>
        <View style={styles.inputsContainer}>{ingredientPlaceholders.slice(4, 6)}</View>

        <Text style={styles.stepLabel}>Step 2: Specify Quantities</Text>
        <View style={styles.inputsContainer}>{quantityPlaceholders.slice(0, 2)}</View>
        <View style={styles.inputsContainer}>{quantityPlaceholders.slice(2, 4)}</View>
        <View style={styles.inputsContainer}>{quantityPlaceholders.slice(4, 6)}</View>

        <View style={styles.buttonsContainer}>
          <Button title="Calculate" onPress={() => console.log('Calculating...')} disabled={!inputsEnabled} />
          <Button title="Reset" onPress={resetForm} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'flex-start',
    marginTop: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  picker: {
    marginTop: 50,
    flex: 1,
    height: 50,
    marginRight: 8,
  },
  stagePicker: {
    marginLeft: 8,
  },
  selectionLabel: {
    marginTop: 50,
    fontSize: 16,
    marginBottom: 16,
    textAlign: 'center',
  },
  stepLabel: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 8,
  },
  inputsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginRight: 8,
    paddingHorizontal: 8,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
});

export default LiveStockScreen;
