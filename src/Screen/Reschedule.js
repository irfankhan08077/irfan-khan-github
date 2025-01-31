import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar, Image } from 'react-native';

const Reschedule = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#1E3932'}/>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Upcoming')}>
           <Image style={styles.Image} source={require('../Icon/left.png')}/>
        </TouchableOpacity>
        <Text style={styles.headerText}>Reschedule Meeting</Text>
      </View>

      <View style={styles.detailsContainer}>

        <View style={styles.headerview}>
          <Image style={styles.mark} source={require('../Icon/location.png')}/>
          <Text style={styles.title}>Performance & Development</Text>
          <Image style={styles.flor} source={require('../Image/flor.png')}/>
        </View>

        <Text style={styles.subtitle}>Delhi, 101, North-West</Text>

        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.label}>STORE NAME</Text>
            <Text style={styles.value}>Fort Store</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.label}>SCHEDULE DATE</Text>
            <Text style={styles.value}>22/08/2023</Text>
          </View>
        </View>

        <View style={styles.row1}>
          <View style={styles.column}>
            <Text style={styles.label}>STORE ID</Text>
            <Text style={styles.value}>S001</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.label}>VISIT ID</Text>
            <Text style={styles.value}>PP000009</Text>
          </View>
        </View>
      </View>

      <View style={styles.commentsContainer}>
        <View style={styles.container2}>
           <Image style={styles.tab} source={require('../Icon/switch.png')}/>
        </View>

       <View style={styles.container3}>
         <Text style={styles.sachedule}>SCHEDULE DATE</Text>
        <View style={styles.container4}>
         <Text style={styles.date}>22/08/2023</Text>
         <Image style={styles.indeximg} source={require('../Image/index.png')}/>
        </View>
       </View>
    
      </View>

      <View style={styles.containerview}>
        <View style={styles.buttons}>
         <TouchableOpacity>
         <Text style={styles.meeting}>Reschedule</Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={() => navigation.navigate('Upcoming')}>
         <Text style={styles.meeting2}>Cancel</Text>
         </TouchableOpacity>
         <View style={{flexDirection:'row',top:30,justifyContent:'center'}}>
           <Image style={styles.mute} source={require('../Icon/mute.png')}/>
           <Text style={styles.send}>SEND NOTIFICATION</Text>
         </View>
        </View>
      <View>
        <Image style={styles.flor2} source={require('../Image/star2.png')}/>
      </View>
     </View>
      

    </View>
  );
};

export default Reschedule;

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: 'white',
    //borderWidth:2,
    height:'100%'
  },
  header: {
    backgroundColor: '#1E3932',
    padding: 16,
    flexDirection:'row'
  },
  headerText: {
    color: '#FFF',
    fontSize: 17,
    left:12,
    fontWeight: '500',
  },
  detailsContainer: {
    backgroundColor: '#1E3932',
    padding: 16,
    //borderWidth:2,
    height:290
  },
  title: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    top:7,
    left:10
  },
  subtitle: {
    color: '#FFF',
    fontSize: 14,
    left:49,
    bottom:14
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    left:8,
    top:10,
    //borderWidth:2,
    height:50
  },
  column: {
    flex: 1,
    marginRight: 8,
  },
  label: {
    color: '#B0B0B0',
    fontSize: 12,
  },
  value: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '500',
  },
  commentsContainer: {
    //padding: 16,
    //borderWidth:2,
    height:335,
    borderRadius:35,
    bottom:33,
    backgroundColor:'white'
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '500',
    color:'black',
    left:16
  },
  charCount: {
    fontSize: 12,
    color: '#333',
    left:5
    //alignSelf:'flex-end'
  },
  uploadButton: {
    backgroundColor: '#FFF',
    paddingVertical: 8,
   // paddingHorizontal: 16,
    borderRadius: 25,
    borderWidth: 1,
    width:153,
    height:43,
    borderColor: '#00754A',
    //marginRight: 16,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    //backgroundColor:'white',
    padding: 16,
  },
  closeButton: {
    backgroundColor: '#DDD',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  closeText: {
    fontWeight: 'bold',
    color: '#333',
  },
  shareButton: {
    backgroundColor: '#003F2F',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  shareText: {
    fontWeight: 'bold',
    color: '#FFF',
  },
  Image:{
    width:25,
    height:25,
    tintColor:'white'
  },
  mark:{
    width:20,
    height:28,
    top:7
  },
  flor:{
    width:57,
    height:62,
    bottom:33,
    left:24,
    tintColor:'#006241'
  },
  headerview:{
    flexDirection:'row',
    justifyContent:'space-around'
  },
  row1:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    left:8,
    top:30
  },
  container2:{
    //borderWidth:1,
    height:100,
    alignSelf:'center'
  },
  tab:{
    width:195,
    height:40,
    top:10
  },
  buttons:{
     //flexDirection:'row',
    //right:7,
    alignSelf:'center',
    //borderWidth:2
},
meeting:{
    color:'white',
    fontWeight:'bold',
    fontSize:13,
    //borderWidth:1,
    width:335,
    height:40,
    textAlign:'center',
    backgroundColor:'#00754A',
    borderRadius:25,
    textAlignVertical:'center'
},
meeting2:{
    color:'black',
    fontWeight:'bold',
    fontSize:13,
    borderWidth:1,
    width:335,
    height:40,
    top:13,
    textAlign:'center',
    borderRadius:25,
    borderColor:'black',
    textAlignVertical:'center'
},
flor2:{
    width:60,
    height:58,
    bottom:7,
    alignSelf:'flex-start'
},
containerview:{
    //borderWidth:1,
},
mute:{
    width:10,
    height:13
},
send:{
    color:'#00754A',
    fontSize:10,
    left:7,
    fontWeight:'bold'
},
container3:{
     //borderWidth:1,
     height:80,
     width:370,
     alignSelf:'center'
 },
 sachedule:{
    fontSize:13,
    color:'black'
},
container4:{
    flexDirection:'row',
    justifyContent:'space-between',
    borderBottomWidth:1,
    borderColor:'#999',
    top:15
},
date:{
    fontSize:12,
    color:'black',
    bottom:3,
    fontWeight:'500'
},
indeximg:{
    width:18,
    height:18,
    bottom:4
},
});

