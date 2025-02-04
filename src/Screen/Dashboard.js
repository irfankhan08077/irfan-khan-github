import { StatusBar, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Video from 'react-native-video';

const Dashboard = ({ navigation }) => {
  // const [videoVisible, setVideoVisible] = useState(false);

  const handleVideoPress = () => {
    setVideoVisible(true);
   };

  const closeVideo = () => {
    setVideoVisible(false);
   };

  return (
    <View style={styles.maincontainer}>
      <StatusBar backgroundColor={'white'}/>
      <View style={styles.containerbox}>
      <View style={styles.header}>
        <View>
            <Image style={styles.profile} source={require('../Image/profile.png')}/>
        </View>
        <View style={styles.center}>
            <Text style={styles.text}>Good Morning Rahul,</Text>
            <Text style={styles.welcome}>Welcome Aboard</Text>
        </View>
        <View>
           <Image style={styles.pics} source={require('../Image/pics.png')}/>
        </View>
      </View>
      <View style={styles.images}>
          <TouchableOpacity style={styles.click} onPress={handleVideoPress}>
           <Image style={styles.starbuge1} source={require('../Icon/video.png')}/>
          </TouchableOpacity>
           <Image style={styles.starbuge} source={require('../Image/video.png')}/>       
      </View>
      <View style={styles.container}>
          <View style={styles.texts}>
          <Text style={styles.message}>Starbucks has a message for you!</Text>
          <Text style={styles.lorem}>Lorem lpsum is simply dummy text of the {'\n'}
            printing and typesetting... <Text style={styles.readmore}>read more</Text>
          </Text>
          </View>
          <Image style={styles.men} source={require('../Image/men.png')}/>
      </View>
      </View>
      <View style={styles.service}>
         <View style={styles.servis}>
           <Text style={styles.services}>Services</Text>
           <Image style={styles.pics2} source={require('../Image/staricon.png')}/>
         </View>

         <View style={styles.boxs}>
            <TouchableOpacity style={styles.box1}>
              <Image style={styles.icons} source={require('../Icon/home.png')}/>
              <Text style={styles.icontext}>SITE LIFECYCLE</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('Visit')}>
              <Image style={styles.icons} source={require('../Icon/setting.png')}/>
              <Text style={styles.icontext}>VISIT MANAGEMENT</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box2}>
              <Image style={styles.icons} source={require('../Icon/mode.png')}/>
              <Text style={styles.icontext}>ITMS</Text>
            </TouchableOpacity>
         </View>

         {/* <View style={styles.bottamtab}>
            <TouchableOpacity onPress={() => navigation.navigate('Bottam')}>
              <Image style={styles.bottam1} source={require('../Icon/profile.png')}/>
              <Text style={styles.text1}>My Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touch}>
              <Image style={styles.bottam2} source={require('../Icon/dashboard.png')}/>
              <Text style={styles.text2}>Dashboard</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={styles.bottam3} source={require('../Icon/menu.png')}/>
              <Text style={styles.text3}>Menu</Text>
            </TouchableOpacity>
         </View> */}

        {/* <Modal visible={videoVisible} transparent={true} animationType="slide">
         <View style={styles.modalContainer}>
          <Video
            source={require('../Image/video.mp4')} 
            style={styles.videoPlayer}
            controls={true} 
            resizeMode="contain"
          />
          <TouchableOpacity style={styles.closeButton} onPress={closeVideo}>
            <Text style={styles.closeText}>Close</Text>
          </TouchableOpacity>
         </View>
       </Modal> */}

      </View>
    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({
    maincontainer:{
       // borderWidth:2,
        backgroundColor:'white',
        height:'100%'
    },
    profile:{
        width:55,
        height:55,
        left:23
    },
    text:{
        fontSize:13,
        color:'black'
    },
    welcome:{
        fontSize:19,
        color:'#1E3932',
        fontWeight:'bold'
    },
    header:{
        //borderWidth:2,
        height:110,
        top:20,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    pics:{
        width:50,
        height:65,
        bottom:7
    },
    center:{
        right:35,
        top:6
    },
    starbuge:{
        width:360,
        height:210,
        alignSelf:'center',
        borderRadius:15,
        position:'absolute'
    },
    images:{
        //flexDirection:'row',
        height:235
    },
    container:{
      //borderWidth:2,
      width:360,
      height:80,
      alignSelf:'center',
      borderRadius:10,
      backgroundColor:'#539E87',
      flexDirection:'row',
      justifyContent:'space-evenly'
    },
    message:{
      color:'white',
      fontSize:15,
      fontWeight:'500'
    },
    lorem:{
      color:'white',
      fontWeight:'300'
    },
    readmore:{
      fontWeight:'500',
      borderColor:'white',
      borderBottomWidth:2,
      fontSize:16
    },
    men:{
      width:78,
      height:78,
      top:2
    },
    texts:{
      top:9,
      left:10
    },
    service:{
      //borderWidth:2,
      width:'100%',
      height:'40%',
      backgroundColor:'#F2F0EB'
    },
    containerbox:{
      //borderWidth:2,
      height:'60%'
    },
    pics2:{
      width:70,
      height:70,
      bottom:5
  },
  services:{
    fontSize:33,
    top:7,
    left:24,
    color:'black',
    fontWeight:'800'
  },
  servis:{
    //borderWidth:2,
    height:103,
    top:20,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  boxs:{
    //borderWidth:2,
    height:210,
    flexDirection:'row',
    justifyContent:'space-evenly',
  },
  box:{
    //borderWidth:2,
    width:112,
    height:114,
    borderRadius:15,
    backgroundColor:'white'
  },
  box1:{
    //borderWidth:2,
    width:112,
    height:114,
    left:5,
    borderRadius:15,
    backgroundColor:'white'
  },
  box2:{
    //borderWidth:2,
    width:112,
    height:114,
    right:5,
    borderRadius:15,
    backgroundColor:'white'
  },
  icons:{
    width:37,
    height:37,
    top:15,
    alignSelf:'center'
  },
  icontext:{
    textAlign:'center',
    fontSize:13,
    top:24,
    color:'black'
  },
  bottamtab:{
    //borderWidth:2,
    height:80,
    borderRadius:12,
    backgroundColor:'white',
    flexDirection:'row',
    justifyContent:'space-evenly'
  },
  bottam1:{
    width:27,
    height:27,
    left:12,
    top:10,
    alignSelf:'center'
  },
  bottam2:{
    width:30,
    height:30,
    top:21,
    alignSelf:'center',
    //tintColor:'#28AC7C',
   // backgroundColor:'#28AC7C'
  },
  bottam3:{
    width:22,
    height:22,
    right:12,
    top:12,
    alignSelf:'center'
  },
  text1:{
    fontSize:9,
    top:10,
    left:12
  },
  text2:{
    fontSize:9,
    top:43,
    left:13
  },
  text3:{
    fontSize:9,
    top:15,
    right:10
  },
  touch:{
    backgroundColor:'#28AC7C',
    height:70,
    width:70,
    bottom:35,
    borderRadius:40
  },
  starbuge1:{
    width:37,
    height:37,
    alignSelf:'center',
    position:'relative',
    zIndex:1,
    top:30,
    right:1
  },
  click:{
    position:'relative',
    zIndex:1,
    top:55
  }
})