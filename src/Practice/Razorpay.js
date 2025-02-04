import React from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';

const Razorpay = () => {
  const handlePayment = () => {
    var options = {
      description: 'Test Transaction',
      image: 'https://your-logo-url.com/logo.png',
      currency: 'INR',
      key: 'YOUR_RAZORPAY_KEY', // Replace with your Razorpay Key
      amount: 50000, // Amount in paisa (50000 = ₹500)
      name: 'Your App Name',
      prefill: {
        email: 'test@example.com',
        contact: '9999999999',
        name: 'Test User'
      },
      theme: { color: '#3399cc' }
    };
    
    RazorpayCheckout.open(options)
      .then(data => {
        Alert.alert('Payment Successful', `Payment ID: ${data.razorpay_payment_id}`);
      })
      .catch(error => {
        Alert.alert('Payment Failed', error.description);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Razorpay Payment UI</Text>
      <TouchableOpacity style={styles.button} onPress={handlePayment}>
        <Text style={styles.buttonText}>Pay Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#3399cc',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Razorpay;