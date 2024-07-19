import React from "react";
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const CreditScreen: React.FC = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.infoItem}>
                This application was developed by the IT students of Isabela State University Roxas Campus.
            </Text>

            <View style={styles.creditContainer}>
                <View style={styles.row}>
                    <View style={styles.creditItem}>
                        <Text style={styles.creditTitle}>Project Lead</Text>
                        <Text style={styles.creditName}>Cunanan, Janet</Text>
                    </View>
                    <View style={styles.creditItem}>
                        <Text style={styles.creditTitle}>Lead Developer & Designer</Text>
                        <Text style={styles.creditName}>Raguindin, Mark Lester</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.creditItem}>
                        <Text style={styles.creditTitle}>Documentation</Text>
                        <Text style={styles.creditName}>Apil, Diether Tom</Text>
                        <Text style={styles.creditName}>Ancheta, Katleen Gail</Text>
                    </View>
                    <View style={styles.creditItem}>
                        <Text style={styles.creditTitle}>Researcher</Text>
                        <Text style={styles.creditName}>Raguindin, Mark Lester</Text>
                        <Text style={styles.creditName}>Apil, Diether</Text>
                        <Text style={styles.creditName}>Ancheta, Katleen Gail</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        alignItems: 'center',
        backgroundColor: 'rgba(12, 149, 180, 0.8)',
    },
    infoItem: {
        width: '100%',
        backgroundColor: '#ffffff',
        padding: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#e0e0e0',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
        marginBottom: 20,
        textAlign: 'center',
        color: '#4e342e', 
        fontWeight: 'bold',
    },
    creditContainer: {
        width: '100%',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    creditItem: {
        backgroundColor: '#ffffff',
        padding: 15,
        borderRadius: 10,
        width: '48%',
        borderWidth: 1,
        borderColor: '#e0e0e0',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
    },
    creditTitle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#4e342e',
    },
    creditName: {
        fontSize: 14,
        color: '#6d4c41',
        fontWeight: '500',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 4,
    },
});

export default CreditScreen;
