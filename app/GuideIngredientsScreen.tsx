import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const GuideIngredients: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Guide to Ingredients</Text>

      <Text style={styles.sectionTitle}>Introduction</Text>
      <Text style={styles.paragraph}>
        Understanding the ingredients used in organic feed formulation is crucial for ensuring the health and productivity of your livestock.
      </Text>

      <Text style={styles.sectionTitle}>Rice Bran (D1)</Text>
      <Text style={styles.paragraph}>Description: Rice bran is a by-product of rice milling.</Text>
      <Text style={styles.paragraph}>Nutritional Value: High in protein, fiber, and essential fatty acids.</Text>
      <Text style={styles.paragraph}>Benefits: Improves digestion and overall health of livestock.</Text>
      <Text style={styles.paragraph}>Usage: Recommended quantity is 50kg for starter pigs.</Text>
      <Text style={styles.paragraph}>Sourcing Tips: Available at most agricultural supply stores.</Text>

      <Text style={styles.sectionTitle}>Copra Meal</Text>
      <Text style={styles.paragraph}>Description: Copra meal is derived from coconut meat.</Text>
      <Text style={styles.paragraph}>Nutritional Value: Rich in protein and fiber.</Text>
      <Text style={styles.paragraph}>Benefits: Supports muscle development and overall health.</Text>
      <Text style={styles.paragraph}>Usage: Recommended quantity is 7kg for starter pigs.</Text>
      <Text style={styles.paragraph}>Sourcing Tips: Available at most agricultural supply stores.</Text>

      {/* Repeat similar structure for other ingredients */}
      
      <Text style={styles.sectionTitle}>Feeding Procedures</Text>
      <Text style={styles.paragraph}>
        Follow these steps to mix the ingredients for different stages of livestock (Starter, Grower, Finisher).
      </Text>
      <Text style={styles.paragraph}>Step 1: Mix the rice bran and copra meal thoroughly.</Text>
      <Text style={styles.paragraph}>Step 2: Add the soya meal and chopped greens, and mix again.</Text>
      <Text style={styles.paragraph}>Step 3: Gradually add the EM-1 Concentrate and Molasses while mixing.</Text>
      <Text style={styles.paragraph}>Step 4: Finally, add water to the mixture and stir until evenly distributed.</Text>
      <Text style={styles.paragraph}>Storage Tips: Store the feed in a cool, dry place.</Text>

      <Text style={styles.sectionTitle}>Tips and Best Practices</Text>
      <Text style={styles.paragraph}>General Tips: Select high-quality ingredients for optimal results.</Text>
      <Text style={styles.paragraph}>Common Mistakes: Avoid overmixing or undermixing the ingredients.</Text>
      <Text style={styles.paragraph}>Sustainability Practices: Use locally sourced ingredients to reduce environmental impact.</Text>

      <Text style={styles.sectionTitle}>Conclusion</Text>
      <Text style={styles.paragraph}>
        Proper ingredient selection and feed formulation are essential for the health and productivity of your livestock. Follow these guidelines to achieve the best results.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default GuideIngredients;
