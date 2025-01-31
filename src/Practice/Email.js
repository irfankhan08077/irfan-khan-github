import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import React, { useState } from 'react';
import firestore from '@react-native-firebase/firestore';

const Email = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [number, setNumber] = useState('');

  // Function to validate input fields
  const validateInputs = () => {
    if (!name.trim() || !email.trim() || !password.trim() || !number.trim()) {
      navigation.navigate('Dashboard');
      return false;
    }
    return true;
  };

  // Function to add data to Firestore
  const createUser = async () => {
    if (!validateInputs()) return; // Stop execution if inputs are empty

    try {
      await firestore().collection('users').add({
        name,
        email,
        password,
        number,
        createdAt: firestore.FieldValue.serverTimestamp(), // Timestamp for sorting
      });

      //console.log('User data added successfully!');
      
      // Navigate to Dashboard screen after data is added
      navigation.navigate('Dashboard');
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter Name"
        value={name}
        onChangeText={txt => setName(txt)}
        style={styles.input}
      />

      <TextInput
        placeholder="Enter Email"
        value={email}
        onChangeText={txt => setEmail(txt)}
        style={styles.input}
      />

      <TextInput
        placeholder="Enter Password"
        value={password}
        secureTextEntry
        onChangeText={txt => setPassword(txt)}
        style={styles.input}
      />

      <TextInput
        placeholder="Enter Number"
        value={number}
        keyboardType="numeric"
        onChangeText={txt => setNumber(txt)}
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={createUser}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Email;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '90%',
    height: 55,
    borderWidth: 0.5,
    borderRadius: 20,
    paddingLeft: 20,
    marginVertical: 10,
  },
  button: {
    width: '90%',
    height: 50,
    borderRadius: 20,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
