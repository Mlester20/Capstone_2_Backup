import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Modal, TextInput, Button, Alert } from 'react-native';

const HomeScreen: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedFAQ, setSelectedFAQ] = useState<any>(null);
  const [name, setName] = useState('');
  const [barangay, setBarangay] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [message, setMessage] = useState('');

  const faqs = [
    {
      question: 'What is organic feed?',
      answer: 'Organic feed is feed that is produced using organic farming methods, without synthetic pesticides or fertilizers.',
    },
    {
      question: 'How to use this app?',
      answer: 'This app helps you create organic feeds for your livestock. Input the necessary details and get the Crude Protein results.',
    },
    {
      question: 'Why is organic feed important?',
      answer: 'Organic feed ensures that your livestock are healthy and free from harmful chemicals, which is better for their health and the environment.',
    },
    {
      question: 'Is there a specific diet of a livestock?',
      answer: 'Yes, there is a specific diet for each type of livestock. The diet depends on various factors such as the species of the livestock, their age, health status, and the purpose of their rearing.'
    },
  ];

  const openModal = (faq: any) => {
    setSelectedFAQ(faq);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleContactSubmit = () => {
    Alert.alert('Contact Form Submitted', `Name: ${name}\nBarangay: ${barangay}\nContact Number: ${contactNumber}\nMessage: ${message}`);
    setName('');
    setBarangay('');
    setContactNumber('');
    setMessage('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Welcome to Organic Feed Formulator</Text>

      <View style={styles.gridItem}>
        <Text style={styles.itemText}>Welcome Farmer</Text>
        <Text style={styles.paragraph}>
          Welcome to the Organic Feed Formulator App! We're excited to have you here. Our goal is to support you in producing healthy and nutritious organic feed for your livestock. With our easy-to-use tools, you can create organic feed that meet the specific needs of your livestock. Let's work together to ensure the well-being of your livestock and the success of your farm.
        </Text>
      </View>

      <Text style={styles.title2}>Frequently Asked Questions</Text>
      <View style={styles.faqContainer}>
        {faqs.map((faq, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.faqItem, { backgroundColor: index % 2 === 0 ? '#ffffff' : '#f2f2f2' }]}
            onPress={() => openModal(faq)}
          >
            <Text style={styles.faqQuestion}>{faq.question}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={closeModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{selectedFAQ?.question}</Text>
            <Text style={styles.modalAnswer}>{selectedFAQ?.answer}</Text>
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Text style={styles.title2}>Contact our Team</Text>
      <View style={styles.contactForm}>
        <View style={styles.formRow}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Brgy"
            value={barangay}
            onChangeText={setBarangay}
          />
        </View>
        <View style={styles.formRow}>
          <TextInput
            style={styles.input}
            placeholder="Contact Number"
            value={contactNumber}
            onChangeText={setContactNumber}
            keyboardType="phone-pad"
          />
          <TextInput
            style={styles.input}
            placeholder="Message"
            value={message}
            onChangeText={setMessage}
            multiline
          />
        </View>
        <Button title="Submit" onPress={handleContactSubmit} />
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
    backgroundColor: 'rgba(12, 149, 180, 0.8)',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#ffffff',
  },
  title2: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#ffffff',
    marginTop: 40,
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
    marginBottom: 20,
  },
  itemText: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#4e342e',
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 12,
    marginBottom: 10,
    color: '#6d4c41',
    fontWeight: 'bold',
    marginTop: 10,
  },
  faqContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  faqItem: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 5,
    width: '48%',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  faqQuestion: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4e342e',
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
  modalAnswer: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  closeButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  contactForm: {
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
    marginBottom: 20,
  },
  formRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    height: 40,
    borderColor: '#e0e0e0',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    width: '48%',
  },
});

export default HomeScreen;