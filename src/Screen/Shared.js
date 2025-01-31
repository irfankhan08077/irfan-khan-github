import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar, Image } from 'react-native';

const Shared = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#1E3932'}/>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Schedule')}>
           <Image style={styles.Image} source={require('../Icon/left.png')}/>
        </TouchableOpacity>
        <Text style={styles.headerText}>Share Itinerary</Text>
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
        <View style={styles.comment}>
          <Image style={styles.addicon} source={require('../Icon/addicon.png')}/>
          <Text style={styles.sectionTitle}>ADD COMMENTS</Text>
        </View>
        <View style={{height:125}}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your remarks here . . ."
          placeholderTextColor="#888"
        />
        </View>
        
        <View style={styles.texts}>
          <Image style={styles.icon} source={require('../Icon/information.png')}/>
          <Text style={styles.charCount}>300 characters remaining to reach max. limit</Text>
        </View>

        <Text style={styles.sectionTitle2}>ADD ATTACHMENTS</Text>
        <View style={styles.attachmentRow}>
          <TouchableOpacity style={styles.uploadButton}>
            <Text style={styles.uploadText}>+   Upload</Text>
          </TouchableOpacity>
          <View style={styles.text}>
          <Image style={styles.icon} source={require('../Icon/information.png')}/>
          <Text style={styles.attachmentInfo}>
            .jpeg or .pdf format. {'\n'}
             Max. upload file size: 2 MB. {'\n'}
             Max. 5 images
          </Text>
          </View>
        </View>
      </View>

      <View style={styles.containerview}>
        <View style={styles.buttons}>
            <TouchableOpacity onPress={() => navigation.navigate('Schedule')}>
            <Text style={styles.meeting}>Close</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('RMvisit')}>
            <Text style={styles.meeting2}>Share Visit</Text>
            </TouchableOpacity>
        </View>
        <View>
            <Image style={styles.flor2} source={require('../Image/star2.png')}/>
        </View>
      </View>
      

    </View>
  );
};

export default Shared;

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
  textInput: {
    height: 100,
    width:370,
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 8,
    padding: 8,
    backgroundColor: '#FFF',
    alignSelf:'center',
    top:14,
  },
  charCount: {
    fontSize: 12,
    color: '#333',
    left:5
    //alignSelf:'flex-end'
  },
  attachmentRow: {
    flexDirection: 'row',
    right:9,
    bottom:5,
    justifyContent:'space-evenly'
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
  uploadText: {
    color: '#00754A',
    fontSize:17,
    textAlign:'center',
    fontWeight: '600',
  },
  attachmentInfo: {
    fontSize: 12,
    color: '#888',
    left:10
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
  addicon:{
    width:16,
    height:7,
    top:6
  },
  comment:{
    flexDirection:'row',
    //borderWidth:2,
    width:368,
    alignSelf:'center'
  },
  icon:{
    width:20,
    height:20
  },
  texts:{
    flexDirection:'row',
    alignSelf:'flex-end',
    right:28
  },
  sectionTitle2:{
    fontSize: 15,
    fontWeight: '500',
    color:'black',
    padding:20
  },
  text:{
    flexDirection:'row'
  },
  buttons:{
    flexDirection:'row',
    right:7,
    justifyContent:'space-around'
},
meeting:{
    color:'black',
    fontWeight:'bold',
    fontSize:13,
    borderWidth:1,
    width:168,
    height:43,
    left:7,
    textAlign:'center',
    borderRadius:25,
    textAlignVertical:'center'
},
meeting2:{
    color:'white',
    fontWeight:'bold',
    fontSize:13,
    //borderWidth:1,
    width:168,
    height:43,
    right:7,
    textAlign:'center',
    backgroundColor:'#00754A',
    borderRadius:25,
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
}
});

