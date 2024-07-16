import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen: React.FC = () => {
  const [showHowToUse, setShowHowToUse] = useState(false);
  const [showUpdates, setShowUpdates] = useState(false);

  const toggleHowToUse = () => {
    setShowHowToUse(prevState => !prevState);
  };

  const toggleUpdates = () => {
    setShowUpdates(prevState => !prevState);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Welcome to Organic Feed Formulator</Text>

      <View style={styles.grid}>
        <View style={styles.gridItem}>
          <Text style={styles.itemText}>Welcome Farmer</Text>
          <Text style={styles.paragraph}>
            Welcome to the Organic Feed Formulator App! Our goal is to help you create effective and nutritious organic feed formulations for your livestock.
          </Text>
        </View>
        <View style={styles.gridItem}>
          <Text style={styles.itemText}>App Overview</Text>
          <Text style={styles.paragraph}>
            This app is designed to assist farmers in creating organic feed with the right amount of Crude protein for various types of Live Stocks
          </Text>
        </View>
        <TouchableOpacity style={styles.gridItem} onPress={toggleHowToUse}>
          <Text style={styles.itemText}>How to Use the App</Text>
          {showHowToUse && (
            <Text style={styles.paragraph}>
              Simply navigate to the LiveStock section, select your livestock type and stage, and input the required ingredients. The app will calculate the crude protein content to ensure your feed meets the necessary nutritional standards.
            </Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity style={styles.gridItem} onPress={toggleUpdates}>
          <Text style={styles.itemText}>Updates and Announcements</Text>
          {showUpdates && (
            <Text style={styles.paragraph}>
              Stay tuned for the latest updates and new features! We are constantly working to improve the app and add new functionalities to better serve your needs.
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#eee',
  },
  title: {
    fontSize: 15, // Adjusted font size
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#4e342e', // Dark brown color for text
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    backgroundColor: '#ffffff', // White background color
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    width: '48%',
    borderWidth: 1,
    borderColor: '#e0e0e0', // Light grey border color
    shadowColor: '#000', // Shadow properties for modern look
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  itemText: {
    fontSize: 12, // Adjusted font size
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#4e342e', // Dark brown color for text
  },
  paragraph: {
    fontSize: 14, // Adjusted font size
    marginBottom: 10,
    color: '#6d4c41', // Medium brown color for text
  },
});

export default HomeScreen;
