import { useEffect } from 'react';
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'

const Splash = () => {

    const navigation = useNavigation();

useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.maincontainer}>
        <StatusBar backgroundColor={'#F2F0EB'} />
      <View style={styles.container}>
        <Image style={styles.star} source={require("../Image/splash.png")}/>
        <Text style={styles.starbuck}>STARBUCKS</Text>
        <Text style={styles.text}>With every cup, with every conversation, {"\n"}
            with every community- we nurture the {"\n"}
            limitless possibilities of human connections
        </Text>
      </View>
      <View style={styles.img2}>
        <Image style={styles.tree} source={require("../Image/splash2.png")}/>
      </View>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
    maincontainer:{
        //borderWidth:2,
        height:'100%',
        backgroundColor:'#F2F0EB',
    },
    star:{
        width:115,
        height:115,
        alignSelf:'center'
    },
    container:{
        justifyContent:'center',
        alignSelf:'center',
        //borderWidth:2,
        width:'100%',
        height:'50%'
    },
    starbuck:{
        fontSize:24,
        top:15,
        textAlign:'center',
        color:'#006241',
        fontWeight:'bold'
    },
    text:{
        textAlign:'center',
        top:28,
        fontSize:15,
        lineHeight:21,
        color:'black'
    },
    img2:{
        //borderWidth:2,
        height:'52%',
        justifyContent:'center'
        //alignSelf:'center'
    },
    tree:{
        width:'100%',
        height:'92%',
        left:10,
        //borderWidth:2,
        alignSelf:'center'
    }

})