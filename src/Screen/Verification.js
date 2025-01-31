import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Verification = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isInvalid, setIsInvalid] = React.useState(false);
  const navigation = useNavigation()

const handleInputChange = (value, index) => {
    const newOtp = [...otp];
  
    if (/^\d$/.test(value)) {
      newOtp[index] = value;
      setOtp(newOtp);
  
      if (index < 5) {
        const nextInput = `otp${index + 1}`;
        this[nextInput]?.focus();
      }
    } else if (value === '') {
      newOtp[index] = '';
      setOtp(newOtp);
  
      if (index > 0) {
        const prevInput = `otp${index - 1}`;
        this[prevInput]?.focus();
      }
    }
  };
  

const handleConfirm = () => {
    const enteredOtp = otp.join('');
    if (enteredOtp === '111111') {
      setIsInvalid(false);
      navigation.navigate('Bottam');
    } else {
      setIsInvalid(true);
    }
  };

  return (
    <View style={styles.maincontainer}>
      <StatusBar backgroundColor={'#FAFAFA'} />
      <View style={styles.container}>
        <Image style={styles.tree} source={require('../Image/tree.png')} />
      </View>
      <View style={styles.loginimg}>
        <Image style={styles.login} source={require('../Image/OTP.png')} />
      </View>
      <View style={styles.logintext}>
        <Text style={styles.text}>OTP Verification</Text>
        <Text style={styles.texts}>
          Please enter the 6-digit OTP sent to {'\n'}
          mobile +919876543210
        </Text>
        <Image style={styles.icon} source={require('../Icon/pen.png')} />
      </View>
      <View style={styles.inputview}>
        <Text style={styles.number}>ENTER OTP</Text>
        <View style={styles.inputs}>
          {otp.map((value, index) => (
            <TextInput
              key={index}
              style={styles.input}
              value={value}
              keyboardType="phone-pad"
              maxLength={1}
              onChangeText={(text) => handleInputChange(text, index)}
              ref={(input) => (this[`otp${index}`] = input)}
            />
        ))}
        </View>
        <View style={styles.resend}>
          <Text style={styles.otp}>Didn't receive OTP?</Text>
          <Text style={styles.resent}>Resend</Text>
        </View>
        <View>
        {isInvalid && (
                  <Text style={styles.invalidText}>OTP is invalid</Text>
                )}
        </View>
      </View>
      <View style={styles.loginbtn}>
        <TouchableOpacity style={styles.buttontuch} onPress={handleConfirm}>
          <Text style={styles.button}>Confirm</Text>
        </TouchableOpacity>
        <Image style={styles.star} source={require('../Image/star.png')} />
      </View>
    </View>
  );
};

export default Verification;

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: '#FAFAFA',
    height: '100%',
  },
  tree: {
    top: 15,
  },
  container: {
    alignSelf: 'flex-end',
  },
  login: {
    width: 90,
    height: 95,
    top: 22,
    alignSelf: 'center',
    position: 'relative',
  },
  loginimg: {
    width: 140,
    height: 140,
    alignSelf: 'center',
    borderRadius: 100,
    backgroundColor: '#eeeeee',
  },
  text: {
    fontSize: 25,
    color: 'black',
    top: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  texts: {
    fontSize: 16,
    top: 28,
    color: '#666',
    fontWeight: '400',
    lineHeight: 28,
    textAlign: 'center',
  },
  logintext: {
    height: 120,
  },
  number: {
    fontSize: 12,
    color: 'black',
    padding: 18,
    left: 7,
  },
  input: {
    width: 40,
    height: 40,
    textAlign: 'center',
    borderColor: '#333',
    //borderWidth: 1,
    borderBottomWidth:1,
    fontSize: 18,
    bottom:15
  },
  button: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    top: 8,
  },
  buttontuch: {
    alignSelf: 'center',
    backgroundColor: '#00754A',
    width: 370,
    height: 45,
    borderRadius: 30,
  },
  loginbtn: {
    height: 200,
  },
  inputview: {
    height: 132,
  },
  star: {
    width: 50,
    height: 50,
    top: 10,
  },
  icon: {
    width: 25,
    height: 25,
    right: 95,
    alignSelf: 'flex-end',
  },
  inputs: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  resend: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    right: 30,
    bottom:5
  },
  resent: {
    left: 6,
    fontSize: 12,
    borderBottomWidth: 1,
    color: '#777',
    borderColor: '#777',
  },
  otp: {
    fontSize: 12,
    color: '#444',
  },
  invalidText: {
    color: 'red',
    fontSize: 13,
    bottom:23,
    left:23
  },
});
