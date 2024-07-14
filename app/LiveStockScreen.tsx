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

const LiveStockScreen: React.FC = () => {
  const navigation = useNavigation();
  const [selectedLivestock, setSelectedLivestock] = useState<LivestockType | undefined>(undefined);
  const [selectedStage, setSelectedStage] = useState<string | undefined>(undefined);
  const [inputsEnabled, setInputsEnabled] = useState(false);
  const [riceBran, setRiceBran] = useState('');
  const [copraMeal, setCopraMeal] = useState('');
  const [soyaMeal, setSoyaMeal] = useState('');
  const [greens, setGreens] = useState('');
  const [em1, setEm1] = useState('');
  const [water, setWater] = useState('');
  const [crudeProtein, setCrudeProtein] = useState<number | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const livestockOptions: LivestockType[] = ['Pig', 'Goat', 'Duck', 'Chicken'];

  const handleLivestockChange = (itemValue: LivestockType | undefined) => {
    setSelectedLivestock(itemValue);
    setSelectedStage(undefined); // Reset the stage when livestock changes
    setInputsEnabled(false); // Disable form until both selections are made
    setCrudeProtein(null); // Reset crude protein calculation
  };

  const handleStageChange = (itemValue: string | undefined) => {
    setSelectedStage(itemValue);
    if (selectedLivestock && itemValue) {
      setInputsEnabled(true); // Enable form when both selections are made
    } else {
      setInputsEnabled(false); // Otherwise, keep form disabled
    }
    setCrudeProtein(null); // Reset crude protein calculation
  };

  const resetForm = () => {
    setSelectedLivestock(undefined);
    setSelectedStage(undefined);
    setInputsEnabled(false);
    setRiceBran('');
    setCopraMeal('');
    setSoyaMeal('');
    setGreens('');
    setEm1('');
    setWater('');
    setCrudeProtein(null);
    setModalVisible(false);
  };

  const calculateCrudeProtein = () => {
    if (!selectedLivestock || !selectedStage) return;

    const formulation = formulations[selectedLivestock][selectedStage];

    const riceBranProtein = parseFloat(riceBran) * 0.12;
    const copraMealProtein = parseFloat(copraMeal) * 0.22;
    const soyaMealProtein = parseFloat(soyaMeal) * 0.45;
    const greensProtein = parseFloat(greens) * 0.18;
    const totalWeight = parseFloat(riceBran) + parseFloat(copraMeal) + parseFloat(soyaMeal) + parseFloat(greens);

    const totalProtein = riceBranProtein + copraMealProtein + soyaMealProtein + greensProtein;
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
        {inputsEnabled && (
          <>
            <View style={styles.inputsContainer}>
              <TextInput
                style={styles.input}
                placeholder="Rice bran (kg)"
                keyboardType="numeric"
                value={riceBran}
                onChangeText={setRiceBran}
              />
              <TextInput
                style={styles.input}
                placeholder="Copra meal (kg)"
                keyboardType="numeric"
                value={copraMeal}
                onChangeText={setCopraMeal}
              />
            </View>
            <View style={styles.inputsContainer}>
              <TextInput
                style={styles.input}
                placeholder="Soya meal (kg)"
                keyboardType="numeric"
                value={soyaMeal}
                onChangeText={setSoyaMeal}
              />
              <TextInput
                style={styles.input}
                placeholder="Greens (kg)"
                keyboardType="numeric"
                value={greens}
                onChangeText={setGreens}
              />
            </View>
            <View style={styles.inputsContainer}>
              <TextInput
                style={styles.input}
                placeholder="EM-1 Concentrate (ml)"
                keyboardType="numeric"
                value={em1}
                onChangeText={setEm1}
              />
              <TextInput
                style={styles.input}
                placeholder="Water (liters)"
                keyboardType="numeric"
                value={water}
                onChangeText={setWater}
              />
            </View>
            <View style={styles.buttonsContainer}>
              <Button title="Calculate" onPress={calculateCrudeProtein} />
              <Button title="Reset" onPress={resetForm} />
            </View>
          </>
        )}
        <Modal visible={modalVisible} animationType="slide" transparent={true}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>
                Calculated Crude Protein for {selectedLivestock} as {selectedStage}
              </Text>
              <Text style={styles.modalText}>Crude Protein: {crudeProtein?.toFixed(2)}%</Text>
              <Text style={styles.modalTitle}>Procedure:</Text>
              {selectedLivestock && selectedStage && formulations[selectedLivestock][selectedStage].procedure.map((step: string, index: number) => (
                <Text key={index} style={styles.modalText}>{index + 1}. {step}</Text>
              ))}
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
  },
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  pickerContainer: {
    flexDirection: 'row',
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
  },
  inputsContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 10,
    paddingHorizontal: 10,
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
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 5,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#2196F3',
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
