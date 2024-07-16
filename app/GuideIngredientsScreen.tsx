import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, Modal, TouchableOpacity } from 'react-native';

const copraMeal = require('../assets/images/copra_meal.jpg');
const soya = require('../assets/images/soya.jpg');
const kangkong = require('../assets/images/kangkong.jpg');

const GuideIngredients: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedIngredient, setSelectedIngredient] = useState<any>(null);

  const ingredients = [
    {
      name: 'Copra Meal',
      image: copraMeal,
      description: 'Copra meal is derived from coconut meat. Rich in protein and fiber. Supports muscle development and overall health. Recommended quantity is 7kg for starter pigs. Available at most agricultural supply stores.',
      nutritionalContent: 'Protein: 20%, Fiber: 12%, Fat: 8%',
      livestock: 'Pigs, Poultry',
      fermentation: 'No fermentation required'
    },
    {
      name: 'Soya',
      image: soya,
      description: 'Soya is a leguminous plant known for its high protein content. Used as a source of protein in organic feed formulations. Available at most agricultural supply stores.',
      nutritionalContent: 'Protein: 40%, Fiber: 20%, Fat: 5%',
      livestock: 'Pigs, Poultry, Cattle',
      fermentation: 'No fermentation required'
    },
    {
      name: 'Kangkong',
      image: kangkong,
      description: 'Kangkong, also known as water spinach, is a leafy green vegetable rich in vitamins and minerals. Used as a nutritious component in livestock feed. Available at most markets and vegetable vendors.',
      nutritionalContent: 'Minerals: 15%, Vitamins: 10%, Fiber: 5%',
      livestock: 'Pigs, Poultry, Rabbits',
      fermentation: 'Fermentation recommended for higher nutrient absorption'
    },
  ];

  const openModal = (ingredient: any) => {
    setSelectedIngredient(ingredient);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Guides and Practices</Text>

      <View style={[styles.sectionContainer, styles.bgColor1]}>
        <Text style={styles.sectionTitle}>Introduction</Text>
        <Text style={styles.paragraph}>
          In this Guide Section we need to understand the Right Ingredients and the Right Fermentation of every Organic Ingredients. In this Content, you will see all the Ingredients for Every Livestock that you have.
        </Text>
      </View>

      <View style={[styles.sectionContainer, styles.bgColor2]}>
        <Text style={styles.sectionTitle}>Tips and Best Practices</Text>
        <Text style={styles.paragraph}>General Tips: Select high-quality ingredients for optimal results.</Text>
        <Text style={styles.paragraph}>Common Mistakes: Avoid overmixing or undermixing the ingredients.</Text>
        <Text style={styles.paragraph}>Sustainability Practices: Use locally sourced ingredients to reduce environmental impact.</Text>
        <Text style={styles.paragraph}>
          Result: After the calculation, you will be able to see the crude protein result based on your targeted animal that you wanted to make an organic feed for. It will also pop up the procedure to how to make the ingredients.
        </Text>
      </View>

      <View style={styles.imageGrid}>
        {ingredients.map((ingredient, index) => (
          
          <View key={index} style={styles.imageContainer}>
            <Image source={ingredient.image} style={styles.image} />
            <Text style={styles.sectionTitle}>{ingredient.name}</Text>
            <TouchableOpacity style={styles.button} onPress={() => openModal(ingredient)}>
              <Text style={styles.buttonText}>Display Description</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={closeModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{selectedIngredient?.name}</Text>
            <Text style={styles.modalDescription}>{selectedIngredient?.description}</Text>
            <Text style={styles.modalDescription}>Nutritional Content: {selectedIngredient?.nutritionalContent}</Text>
            <Text style={styles.modalDescription}>Suitable for: {selectedIngredient?.livestock}</Text>
            <Text style={styles.modalDescription}>Fermentation: {selectedIngredient?.fermentation}</Text>
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  sectionContainer: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  bgColor1: {
    backgroundColor: '#e0f7fa',
  },
  bgColor2: {
    backgroundColor: '#f1f8e9',
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 10,
  },
  imageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 50,
  },
  imageContainer: {
    width: '48%',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 8,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  modalDescription: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  closeButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  closeButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default GuideIngredients;
