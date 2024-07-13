import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HeaderScreen from './HeaderScreen';

const GuideIngredientsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Guide and Ingredients Screen</Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GuideIngredientsScreen;
