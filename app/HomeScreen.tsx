import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const HomeScreen: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Welcome to Organic Feed Formulator</Text>

      <View style={styles.gridItem}>
        <Text style={styles.itemText}>Welcome Farmer</Text>
        <Text style={styles.paragraph}>
            Welcome to the Organic Feed Formulator App! We're excited to have you here. Our Goal is to support you in producing healthy and nutritious organic feed for your livestock. With our easy-to-use tools, you can create organic feed that meet the specific needs of your Live Stock. Let's work together to ensure the well-being of your livestock and the success of your farm.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    padding: 20,
    paddingTop: 60, 
    backgroundColor: '#088395',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#ffffff', 
  },
  gridItem: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    borderWidth: 1,
    borderColor: '#e0e0e0', 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  itemText: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#4e342e',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  paragraph: {
    fontSize: 12,
    marginBottom: 10,
    color: '#6d4c41',
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default HomeScreen;
