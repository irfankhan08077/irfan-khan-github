import { StatusBar, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const RMvisit = ({ navigation }) => {
  return (
    <View style={styles.maincontainer}>
      <StatusBar backgroundColor={'white'}/>
      <View style={styles.container1}>
      <View style={styles.header}>
         <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Shared')}>
            <Image style={styles.Image} source={require('../Icon/left.png')}/>
            </TouchableOpacity>
            <Text style={styles.text}>Visit Management</Text>
         </View>
         <View style={styles.summer}>
            <Text style={styles.text2}>Summer</Text>
            <Image style={styles.arrow} source={require('../Icon/arrow.png')}/>
            <Image style={styles.mark} source={require('../Icon/mark.png')}/>
         </View>
      </View>
      <View style={styles.border}>
            <View style={styles.base}>
               <Text style={styles.basecity}>Base City</Text>
            </View>
            <View style={styles.base2}>
               <Text style={styles.basecity2}>Remote City</Text>
            </View>
      </View>
      </View>
      <View style={styles.box}>
        <Text style={styles.text1}>Period Planning</Text>
        <Text style={styles.text3}>District Visit</Text>
      </View>
      <View>
        <Image style={styles.flor} source={require('../Image/flor.png')}/>
        <View style={styles.note}>
          <View style={styles.texts}>
            <Image style={styles.stop} source={require('../Image/stop.png')}/>
            <Text style={styles.notes}>Note</Text>
            <Text style={styles.details}>Click here to view details in order to select {'\n'}
                meeting type
            </Text>
          </View>
          <Image style={styles.stop2} source={require('../Image/close.png')}/>
        </View>
        <View style={{height:'66%'}}>
           <View style={styles.box1}>
             <Image style={styles.img} source={require('../Image/img1.png')}/>
             <Image style={styles.img2} source={require('../Image/img2.png')}/>
           </View>
           <View style={styles.box2}>
             <Image style={styles.img} source={require('../Image/img3.png')}/>
             <Image style={styles.img2} source={require('../Image/img4.png')}/>
           </View>
        </View>
        
        <View style={styles.buttons}>
            <TouchableOpacity onPress={() => navigation.navigate('Mymeeting')}>
                <Text style={styles.meeting}>My Meeting</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('DMvisit')}>
                <Text style={styles.meeting2}>Schedule Now</Text>
            </TouchableOpacity>
        </View>
        <View>
            <Image style={styles.flor2} source={require('../Image/star2.png')}/>
        </View>
      </View>
    </View>
  )
}

export default RMvisit

const styles = StyleSheet.create({
    maincontainer:{
        //borderWidth:2,
        height:'100%',
        backgroundColor:'white'
    },
    header:{
        //borderWidth:2,
        height:85,
        flexDirection:'row',
        justifyContent:'space-between'
    },
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
    summer:{
        flexDirection:'row',
        //justifyContent:'space-between',
        //borderWidth:2,
        height:40,
        top:23,
        right:45
    },
    arrow:{
        width:14,
        height:14,
        left:5,
        top:3
    },
    text2:{
        fontSize:12,
        color:'black'
    },
    mark:{
        width:27,
        height:27,
        bottom:5,
        left:21
    },
    border:{
        borderWidth:1,
        width:363,
        height:48,
        borderRadius:25,
        alignSelf:'center',
        flexDirection:'row'
    },
    base:{
        borderWidth:1,
        width:170,
        height:38,
        top:4,
        left:4,
        backgroundColor:'#00754A',
        borderRadius:20
    },
    basecity:{
        color:'white',
        textAlign:'center',
        fontWeight:'500',
        fontSize:13,
        top:7
    },
    base2:{
        //borderWidth:1,
        width:170,
        height:38,
        top:4,
        left:16,
        //backgroundColor:'#00754A',
        borderRadius:20
    },
    basecity2:{
        color:'black',
        textAlign:'center',
        //fontWeight:'500',
        fontSize:13,
        top:9
    },
    box:{
        //borderWidth:2,
        height:50,
        backgroundColor:'#F2F0EB',
        flexDirection:'row',
        //justifyContent:'space-evenly',
        alignItems:'center'
    },
    container1:{
        //borderWidth:2,
        height:145
    },
    text1:{
        color:'#00754A',
        fontSize:16,
        fontWeight:'500',
        borderBottomWidth:2,
        borderColor:'#006241',
        lineHeight:45,
        left:28
    },
    text3:{
        fontSize:15,
        fontWeight:'300',
        color:'black',
        left:45
    },
    text4:{
        fontSize:15,
        fontWeight:'300',
        color:'black',
        right:4
    },
    flor:{
        width:60,
        height:58,
        top:18,
        alignSelf:'flex-end'
    },
    note:{
        //borderWidth:2,
        width:355,
        height:80,
        alignSelf:'center',
        position:'absolute',
        borderRadius:10,
        backgroundColor:'#D7D6D3',
        flexDirection:'row',
        justifyContent:'space-between',
        top:10
    },
    stop:{
        width:28,
        height:26
    },
    notes:{
        color:'black',
        left:9,
        fontWeight:'bold'
    },
    texts:{
        flexDirection:'row',
        top:8,
        left:8
    },
    stop2:{
        width:20,
        height:20,
        top:8,
        right:8
    },
    details:{
        top:20,
        right:22,
        color:'black',
        fontWeight:'400'
    },
    img:{
        width:170,
        height:140,
        left:5,
        borderRadius:15
    },
    box1:{
        flexDirection:'row',
        //borderWidth:2,
        height:207,
        top:60,
        justifyContent:'space-evenly'
    },
    img2:{
        width:170,
        height:140,
        right:5,
        borderRadius:15
    },
    box2:{
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
    footer:{
        //borderWidth:2,
        height:130,
        top:10,
        justifyContent:'center',
        alignSelf:'center'
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
    }
})