import { StyleSheet, Text, View, StatusBar, Image, TextInput, TouchableOpacity} from 'react-native'
import React from 'react'

const Schedule = ({navigation}) => {
  return (
    <View>
      <StatusBar backgroundColor={'white'}/>
      <View>
        <View style={styles.container1}>
            <View style={styles.container}>
              <TouchableOpacity onPress={() => navigation.navigate('Visitmanage')}>
              <Image style={styles.Image} source={require('../Icon/left.png')}/>
              </TouchableOpacity>
              <Text style={styles.text}>Schedule Visit</Text>
            </View>
        </View>
        <View>
          <Image style={styles.flor} source={require('../Image/flor.png')}/>
        </View>

        <View style={styles.index}>

            <View style={styles.container3}>
              <Text style={styles.sachedule}>SCHEDULE DATE</Text>
              <View style={styles.container2}>
              <Text style={styles.date}>22/08/2023</Text>
              <Image style={styles.indeximg} source={require('../Image/index.png')}/>
              </View>
            </View>

            <View>
              <Text style={styles.sachedule}>VISIT PURPOSE</Text>
              <View style={styles.container4}>
              <TextInput style={styles.input} placeholder='Select'/>
              <Image style={styles.topimg} source={require('../Icon/top.png')}/>
              </View>
            </View>

            <View style={styles.container6}>
              <View>
              <Text style={styles.sachedule}>STORE ID</Text>
              <View style={styles.container5}>
              <TextInput style={styles.input2} placeholder='Typeahead'/>
              <Image style={styles.topimg} source={require('../Icon/top.png')}/>
              </View>
              </View>
              <View>
              <Text style={styles.sachedule}>CITY</Text>
              <View style={styles.container5}>
              <TextInput style={styles.input2} placeholder='Select'/>
              <Image style={styles.topimg} source={require('../Icon/top.png')}/>
              </View>
              </View>
            </View>

            <View>
              <Text style={styles.sachedule}>ACCOMPANIED BY</Text>
              <View style={styles.container4}>
              <TextInput style={styles.input} placeholder='Textbox, Alphanumeric'/>
              </View>
            </View>

        </View>

        <View style={styles.containerview}>
            <View style={styles.buttons}>
             <TouchableOpacity onPress={() => navigation.navigate('Visitmanage')}>
             <Text style={styles.meeting}>Cancel</Text>
             </TouchableOpacity>
             <TouchableOpacity onPress={() => navigation.navigate('Shared')}>
             <Text style={styles.meeting2}>Schedule Now</Text>
             </TouchableOpacity>
             </View>
             <View>
              <Image style={styles.flor2} source={require('../Image/star2.png')}/>
             </View>
        </View>

      </View>
    </View>
  )
}

export default Schedule

const styles = StyleSheet.create({
    container:{
        //borderWidth:2,
        width:180,
        top:20,
        left:15,
        flexDirection:'row'
    },
    Image:{
        width:25,
        height:25
    },
    text:{
        fontSize:15,
        left:15,
        color:'black',
        fontWeight:'bold'
    },
    container1:{
        //borderWidth:2,
        backgroundColor:'white',
        height:66
    },
    flor:{
        width:57,
        height:62,
        top:5,
        position:'absolute',
        alignSelf:'flex-end'
    },
    sachedule:{
        fontSize:15,
        color:'black'
    },
    index:{
        //borderWidth:1,
        height:'79%',
        width:366,
        top:38,
        alignSelf:'center'
    },
    date:{
        fontSize:14,
        color:'black',
        bottom:3,
        fontWeight:'500'
    },
    indeximg:{
        width:20,
        height:20,
        bottom:4
    },
    container2:{
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomWidth:1,
        top:15
    },
    container3:{
       // borderWidth:1,
        height:80
    },
    input:{
        //borderWidth:1,
        width:343,
        height:40,
        right:4
    },
    container4:{
        flexDirection:'row',
        borderBottomWidth:1
    },
    topimg:{
        width:17,
        height:9,
        top:15
    },
    container5:{
        flexDirection:'row',
        borderBottomWidth:1,
        width:166
    },
    input2:{
        //borderWidth:1,
        width:144,
        height:40,
        right:4
    },
    container6:{
        flexDirection:'row',
        justifyContent:'space-between',
        top:18,
        //borderWidth:2,
        height:100
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
    buttons:{
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
    flor2:{
        width:60,
        height:58,
        bottom:7,
        alignSelf:'flex-start'
    },
    containerview:{
        //borderWidth:2
    }
})