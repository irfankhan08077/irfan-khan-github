import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

const Email = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [number, setNumber] = useState('');
  const navigation = useNavigation();

  const validateInputs = () => {
    if (!name.trim() || !email.trim() || !password.trim() || !number.trim()) {
      return false;
    }
    return true;
  };



  
  const createUser = async () => {
    if (!validateInputs()) {
      navigation.navigate('Dashboard'); 
      return;
    }

    try {
      const userCredential = await auth().createUserWithEmailAndPassword(email, password);
      const userId = userCredential.user.uid;

      console.log('User account created & signed in!', userId);

      await firestore().collection('users').doc(userId).set({
        name,
        email,
        number,
        createdAt: firestore.FieldValue.serverTimestamp(),
      });

      navigation.navigate('Dashboard');
    } catch (error) {
      console.error('Error:', error);

      if (error.code === 'auth/email-already-in-use' || error.code === 'auth/invalid-email') {
        navigation.navigate('Dashboard'); 
      } else {
        navigation.navigate('Dashboard');
      }
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


