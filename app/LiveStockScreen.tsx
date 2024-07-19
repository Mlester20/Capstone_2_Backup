import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, ScrollView, Modal, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { PigFormulations } from '@/Formulations/Pig';
import { GoatFormulations } from '@/Formulations/Goat';
import { ChickenFormulations } from '@/Formulations/Chicken';
import { DuckFormulations } from '@/Formulations/Duck';

type LivestockType = 'Pig' | 'Goat' | 'Duck' | 'Chicken';
type StageOptions = {
  [key in LivestockType]: string[];
};

const stageOptions: StageOptions = {
  Pig: ['Starter', 'Grower', 'Finisher'],
  Goat: ['Starter', 'Grower', 'Finisher'],
  Duck: ['Starter', 'Grower', 'Finisher'],
  Chicken: ['Starter', 'Grower', 'Finisher'],
};

const formulations: { [key in LivestockType]: any } = {
  Pig: PigFormulations,
  Chicken: ChickenFormulations,
  Duck: DuckFormulations,
  Goat: GoatFormulations,
};

const ingredientsOptions = ['Rice bran', 'Copra meal', 'Soya meal', 'Greens', 'EM-1 Concentrate', 'Water'];

const LiveStockScreen: React.FC = () => {
  const navigation = useNavigation();
  const [selectedLivestock, setSelectedLivestock] = useState<LivestockType | undefined>(undefined);
  const [selectedStage, setSelectedStage] = useState<string | undefined>(undefined);
  const [inputsEnabled, setInputsEnabled] = useState(false);
  const [selectedIngredients, setSelectedIngredients] = useState<(string | undefined)[]>(Array(6).fill(undefined));
  const [quantities, setQuantities] = useState<string[]>(Array(6).fill(''));
  const [crudeProtein, setCrudeProtein] = useState<number | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const livestockOptions: LivestockType[] = ['Pig', 'Goat', 'Duck', 'Chicken'];

  const handleLivestockChange = (itemValue: LivestockType | undefined) => {
    setSelectedLivestock(itemValue);
    setSelectedStage(undefined); // Reset the stage when livestock changes
    setInputsEnabled(itemValue !== undefined && selectedStage !== undefined); // Enable form if both selections are made
    setCrudeProtein(null); // Reset crude protein calculation
  };

  const handleStageChange = (itemValue: string | undefined) => {
    setSelectedStage(itemValue);
    setInputsEnabled(selectedLivestock !== undefined && itemValue !== undefined); // Enable form if both selections are made
    setCrudeProtein(null); // Reset crude protein calculation
  };

  const resetForm = () => {
    setSelectedLivestock(undefined);
    setSelectedStage(undefined);
    setInputsEnabled(false);
    setSelectedIngredients(Array(6).fill(undefined));
    setQuantities(Array(6).fill(''));
    setCrudeProtein(null);
    setModalVisible(false);
  };

  const handleIngredientChange = (index: number, value: string | undefined) => {
    const newSelectedIngredients = [...selectedIngredients];
    newSelectedIngredients[index] = value;
    setSelectedIngredients(newSelectedIngredients);
  };

  const handleQuantityChange = (index: number, value: string) => {
    const newQuantities = [...quantities];
    newQuantities[index] = value;
    setQuantities(newQuantities);
  };

  const calculateCrudeProtein = () => {
    if (!selectedLivestock || !selectedStage) return;

    const formulation = formulations[selectedLivestock][selectedStage];

    const proteinPercentages: { [key: string]: number } = {
      'Rice bran': 0.12,
      'Copra meal': 0.22,
      'Soya meal': 0.45,
      'Greens': 0.18,
      'EM-1 Concentrate': 0,
      'Water': 0,
    };

    let totalWeight = 0;
    let totalProtein = 0;

    for (let i = 0; i < selectedIngredients.length; i++) {
      if (selectedIngredients[i]) {
        const ingredientWeight = parseFloat(quantities[i]);
        const proteinPercentage = proteinPercentages[selectedIngredients[i]!];
        totalWeight += ingredientWeight;
        totalProtein += ingredientWeight * proteinPercentage;
      }
    }

    const crudeProteinPercentage = (totalProtein / totalWeight) * 100;
    setCrudeProtein(crudeProteinPercentage);
    setModalVisible(true);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.label}>Select Live Stock | Stage</Text>
        <View style={styles.pickerContainer}>
          <Picker selectedValue={selectedLivestock} onValueChange={handleLivestockChange} style={styles.picker}>
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
            {selectedLivestock && stageOptions[selectedLivestock].map((option) => (
              <Picker.Item key={option} label={option} value={option} />
            ))}
          </Picker>
        </View>
        <Text style={styles.selectionLabel}>
          Selected Live Stock: {selectedLivestock || 'None'}, Selected Stage: {selectedStage || 'None'}
        </Text>
        <Text style={styles.label}>Step 1: Choose Organic Ingredients</Text>
        <View style={styles.ingredientsContainer}>
          {selectedIngredients.map((ingredient, index) => (
            <View key={index} style={styles.ingredientRow}>
              <Picker
                selectedValue={ingredient}
                onValueChange={(value) => handleIngredientChange(index, value)}
                style={styles.ingredientPicker}
                enabled={inputsEnabled}
              >
                <Picker.Item label="Select an ingredient" value={undefined} />
                {ingredientsOptions
                  .filter((option) => !selectedIngredients.includes(option) || option === ingredient)
                  .map((option) => (
                    <Picker.Item key={option} label={option} value={option} />
                  ))}
              </Picker>
            </View>
          ))}
        </View>
        <Text style={styles.label}>Step 2: Input Quantities (kg or ml)</Text>
        <View style={styles.inputRow}>
          {quantities.map((quantity, index) => (
            <TextInput
              key={index}
              style={[styles.input, { backgroundColor: inputsEnabled ? 'white' : 'lightgray' }]}
              placeholder={`Quantity for ${selectedIngredients[index] || 'ingredient'} (kg/ml)`}
              keyboardType="numeric"
              value={quantity}
              onChangeText={(value) => handleQuantityChange(index, value)}
              editable={inputsEnabled}
            />
          ))}
        </View>
        <View style={styles.buttonsContainer}>
          <Button title="Reset" onPress={resetForm} />
          <Button title="Calculate" onPress={calculateCrudeProtein} disabled={!inputsEnabled} />
        </View>
        <Modal visible={modalVisible} animationType="slide" transparent={true}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>
                Calculated Crude Protein for {selectedLivestock} as {selectedStage}
              </Text>
              <Text style={styles.modalText}>Crude Protein: {crudeProtein?.toFixed(2)}%</Text>
              {selectedLivestock && selectedStage && formulations[selectedLivestock][selectedStage]?.procedure ? (
                <>
                  <Text style={styles.modalTitle}>Procedure:</Text>
                  {formulations[selectedLivestock][selectedStage].procedure.map((step: string, index: number) => (
                    <Text key={index} style={styles.modalText}>{index + 1}. {step}</Text>
                  ))}
                </>
              ) : (
                <Text style={styles.modalText}>No procedure available for the selected stage.</Text>
              )}
              <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(12, 149, 180, 0.8)',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: '400',
    marginBottom: 10,
    color: 'white',
    textAlign: 'center',
    marginTop: 20,
  },
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  picker: {
    flex: 1,
    height: 50,
  },
  stagePicker: {
    marginLeft: 10,
  },
  selectionLabel: {
    fontSize: 16,
    marginBottom: 20,
    color: 'white',
    textAlign: 'center',
  },
  ingredientsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  ingredientRow: {
    width: '48%',
    marginBottom: 10,
  },
  ingredientPicker: {
    height: 50,
    width: '100%',
  },
  inputRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    marginHorizontal: 5,
    backgroundColor: 'white',
    color: 'black',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default LiveStockScreen;
