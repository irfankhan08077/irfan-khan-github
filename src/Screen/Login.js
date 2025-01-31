import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const [mobileNumber, setMobileNumber] = React.useState('');
  const [isInvalid, setIsInvalid] = React.useState(false);
  const navigation = useNavigation();

  const handleLogin = () => {
    if (mobileNumber.length === 10 && /^\d+$/.test(mobileNumber)) {
      setIsInvalid(false);
      navigation.navigate('Verification');
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
        <Image style={styles.login} source={require('../Image/login.png')} />
      </View>
      <View style={styles.logintext}>
        <Text style={styles.text}>Login To Continue</Text>
        <Text style={styles.texts}>
          Please enter your registered mobile {'\n'}
          number to login your account.
        </Text>
      </View>
      <View style={styles.inputview}>
        <Text style={styles.number}>MOBILE NUMBER</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor={'#999'}
          placeholder="Enter your 10 digit mobile number"
          keyboardType="phone-pad"
          value={mobileNumber}
          onChangeText={setMobileNumber}
          maxLength={10}
        />
       {isInvalid && (
          <Text style={styles.invalidText}>Mobile number is invalid</Text>
        )}
      </View>
      <View style={styles.loginbtn}>
        <TouchableOpacity style={styles.buttontuch} onPress={handleLogin}>
          <Text style={styles.button}>Login</Text>
        </TouchableOpacity>
        <Image style={styles.star} source={require('../Image/star.png')} />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
    maincontainer:{
       //borderWidth:2,
        backgroundColor:'#FAFAFA',
        height:'100%'
    },
    tree:{
        top:15
    },
    container:{
        alignSelf:'flex-end'
    },
    login:{
        width:90,
        height:95,
        top:22,
        alignSelf:'center',
        position:'relative'
    },
    loginimg:{
        //borderWidth:2,
        width:140,
        height:140,
        alignSelf:'center',
        borderRadius:100,
        //color:'#A4C8BA',
        backgroundColor:'#eeeeee'
    },
    text:{
        fontSize:25,
        color:'black',
        top:20,
        fontWeight:'bold',
        textAlign:'center'
    },
    texts:{
        fontSize:18,
        top:28,
        color:'#000000',
        fontWeight:'400',
        textAlign:'center'
    },
    logintext:{
        //borderWidth:2,
        height:120
    },
    number:{
        fontSize:14,
        color:'black',
        padding:18,
        left:3
    },
    input:{
        width:370,
        height:36,
        bottom:13,
        alignSelf:'center',
        borderColor:'#999',
        borderBottomWidth:1
    },
    button:{
        fontSize:16,
        color:'white',
        textAlign:'center',
        top:8
    },
    buttontuch:{
        alignSelf:'center',
        backgroundColor:'#00754A',
        width:370,
        height:45,
        top:10,
        borderRadius:30
    },
    loginbtn:{
        //borderWidth:2,
        height:200
    },
    inputview:{
        //borderWidth:2,
        height:130
    },
    star:{
        width:50,
        height:50,
        top:10
    },
    invalidText: {
        color: 'red',
        fontSize: 13,
        bottom:10,
        left:20
      },

})