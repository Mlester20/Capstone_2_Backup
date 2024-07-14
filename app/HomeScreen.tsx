import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Welcome to Organic Feed Formulator</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Welcome Message</Text>
        <Text style={styles.paragraph}>
          Welcome to the Organic Feed Formulator App! Our goal is to help you create effective and nutritious organic feed formulations for your livestock.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>App Overview</Text>
        <Text style={styles.paragraph}>
          This app is designed to assist farmers in creating organic feed formulations for various types of livestock, including pigs, goats, ducks, and chickens. By using our app, you can ensure that your livestock receives the proper nutrition for optimal growth and health.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>How to Use the App</Text>
        <Text style={styles.paragraph}>
          Getting started is easy! Simply navigate to the LiveStock section, select your livestock type and stage, and input the required ingredients. The app will calculate the crude protein content to ensure your feed meets the necessary nutritional standards.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Updates and Announcements</Text>
        <Text style={styles.paragraph}>
          Stay tuned for the latest updates and new features! We are constantly working to improve the app and add new functionalities to better serve your needs.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact and Support</Text>
        <Text style={styles.paragraph}>
          If you have any questions, feedback, or need support, please don't hesitate to contact us at support@organicfeedformulator.com. We value your input and are here to help!
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.paragraph}>
          Thank you for using the Organic Feed Formulator App. We hope it helps you achieve the best results for your livestock!
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default HomeScreen;