import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';

const meetings = [
      {
        id: "1",
        title: "Performance & Development",
        date: "2 Jan 2023 - 12:30 PM, 101, South - West"
      },
      {
        id: "2",
        title: "Observe and Coach",
        date: "2 Jan 2023 - 12:30 PM, Delhi, 101, North - West"
      },
      {
        id: "3",
        title: "Period Planning",
        date: "2 Jan 2023 - 12:30 PM, Delhi, 101, North - West"
      },
    ]

    const meetings2 = [
      {
        id: "1",
        title: "Period Planning",
        date: "2 Jan 2023 - 12:30 PM, Delhi, 101, North - West"
      },
      {
        id: "2",
        title: "Observe and Coach",
        date: "2 Jan 2023 - 12:30 PM, Delhi, 101, North - West"
      },
      {
        id: "3",
        title: "Period Planning",
        date: "2 Jan 2023 - 12:30 PM, Delhi, 101, North - West"
      },
    ];

    const meetings3 = [
      {
        id: "1",
        title: "Period Planning",
        date: "2 Jan 2023 - 12:30 PM, Delhi, 101, North - West"
      },
      {
        id: "2",
        title: "Observe and Coach",
        date: "2 Jan 2023 - 12:30 PM, Delhi, 101, North - West"
      },
      {
        id: "3",
        title: "Period Planning",
        date: "2 Jan 2023 - 12:30 PM, Delhi, 101, North - West"
      },
    ];
    
    const Mymeeting = ({ navigation }) => {
      const [activeTab, setActiveTab] = useState("Upcoming"); 
    
      const renderMeetings = () => {
        return meetings;
      };

      const renderMeetings2 = () => {
        return meetings2;
      };

      const renderMeetings3 = () => {
        return meetings3;
      };
      
  return (
  <View style={styles.container}>

    <StatusBar backgroundColor={'white'}/>

  <View style={styles.header}>
      <View style={styles.container2}>
        <TouchableOpacity onPress={() => navigation.navigate('DMvisit')}>
        <Image style={styles.Image} source={require('../Icon/left.png')} />
        </TouchableOpacity>
        <Text style={styles.text}>My Meetings</Text>
      </View>
      <View style={styles.summer}>
        <Text style={styles.text2}>Summer</Text>
        <Image style={styles.arrow} source={require('../Icon/arrow.png')} />
      </View>
  </View>

  <View style={styles.florimg}>
      {/* <Image style={styles.flor} source={require('../Image/flor.png')} /> */}
  </View>


      {/* Tab Buttons */}

      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Upcoming' && styles.activeTab]}
          onPress={() => setActiveTab('Upcoming')}
        >
          <Text style={[styles.tabText, activeTab === 'Upcoming' && styles.activeTabText]}>
            Upcoming
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'In-progress' && styles.activeTab]}
          onPress={() => setActiveTab('In-progress')}
        >
          <Text style={[styles.tabText, activeTab === 'In-progress' && styles.activeTabText]}>
            In-progress
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'History' && styles.activeTab]}
          onPress={() => setActiveTab('History')}
        >
          <Text style={[styles.tabText, activeTab === 'History' && styles.activeTabText]}>
            History
          </Text>
        </TouchableOpacity>
      </View>

      {/* Tab Content */}

  <View style={styles.contentContainer}>
  <FlatList
    data={['Upcoming', 'In-progress', 'History']}
    horizontal
    pagingEnabled
    showsHorizontalScrollIndicator={false}
    keyExtractor={(item) => item}
    onMomentumScrollEnd={(e) => {
      const index = Math.round(e.nativeEvent.contentOffset.x / e.nativeEvent.layoutMeasurement.width);
      const tabs = ['Upcoming', 'In-progress', 'History'];
      setActiveTab(tabs[index]);
    }}
    renderItem={({ item }) => (
      <View style={styles.scrollContent}>
        {activeTab === 'Upcoming' && (
          <FlatList
            style={styles.flatlists}
            data={renderMeetings()}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity              
                onPress={() => {
                if (item.id === "1") {
                  navigation.navigate('Upcoming');
                  }
                }} 
                >
                <View style={styles.card}>
                <Text style={styles.store}>Fort Store</Text>
                <View style={styles.locations}>
                  <Image style={styles.flor2} source={require('../Icon/location.png')} />
                  <Text style={styles.title}>{item.title}</Text>
                </View>
                <Text style={styles.details}>{item.date}</Text>
                <View style={styles.actions}>
                  <TouchableOpacity style={styles.cancelButton}>
                    <Image style={styles.cancel} source={require('../Icon/cancel.png')} />
                    <Text style={styles.buttonText}>CANCEL MEETING</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.rescheduleButton}>
                    <Image style={styles.cancel2} source={require('../Image/index.png')} />
                    <Text style={styles.buttonText2}>RESCHEDULE</Text>
                  </TouchableOpacity>
                </View>
              </View>
              </TouchableOpacity>
            )}
          />
        )}
        {activeTab === 'In-progress' && (
          <FlatList
            style={styles.flatlists}
            data={renderMeetings2()}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Text style={styles.store}>Fort Store</Text>
                <View style={styles.locations}>
                  <Image style={styles.flor2} source={require('../Icon/location.png')} />
                  <Text style={styles.title}>{item.title}</Text>
                </View>
                <Text style={styles.details}>{item.date}</Text>
                <View style={styles.actions}>
                  <TouchableOpacity style={styles.cancelButton}>
                    <Image style={styles.cancel} source={require('../Icon/notes2.png')} />
                    <Text style={styles.buttontext3}>TASK LIST</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.rescheduleButton}>
                    <Image style={styles.cancel2} source={require('../Icon/notes.png')} />
                    <Text style={styles.buttonText2}>CAPTURE NOTES</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        )}
        {activeTab === 'History' && (
          <FlatList
            style={styles.flatlists}
            data={renderMeetings3()}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <View style={styles.card}>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.store}>Fort Store</Text>
                  <Text style={styles.store2}>Completed</Text>
                </View>
                <View style={styles.locations}>
                  <Image style={styles.flor2} source={require('../Icon/location.png')} />
                  <Text style={styles.title}>{item.title}</Text>
                </View>
                <Text style={styles.details}>{item.date}</Text>
                <View style={styles.actions}>
                  <TouchableOpacity style={styles.cancelButton}>
                    <Image style={styles.cancel} source={require('../Icon/notes2.png')} />
                    <Text style={styles.buttontext3}>TASK LIST</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.rescheduleButton}>
                    <Image style={styles.cancel2} source={require('../Icon/notes.png')} />
                    <Text style={styles.buttonText2}>CAPTURE NOTES</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        )}
      </View>
    )}
  />
</View>

      <View style={{height:100}}>
        <Image style={styles.flor3} source={require('../Image/star2.png')}/>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //borderWidth:2
  },
  tabContainer: {
    //borderWidth:2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f2f2f2',
    padding: 25,
  },
  tab: {
    padding: 5,
    //borderRadius: 8,
   // backgroundColor: '#e0e0e0',
  },
  activeTab: {
    borderBottomWidth:3,
    borderColor:'#00754A'
  },
  tabText: {
    color: '#888',
    fontWeight: 'bold'
  },
  activeTabText: {
    color: '#00754A',
    fontWeight: 'bold',
  },
  contentContainer: {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //borderWidth:2,
    height:'72%'
  },
  content: {
    fontSize: 18,
  },
  header:{
    //borderWidth:2,
    height:66,
    width:415,
    backgroundColor:'white',
    alignSelf:'center',
    flexDirection:'row',
    justifyContent:'space-between'
  },
  container2:{
    // borderWidth:2,
    width:180,
    height:30,
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
  text2:{
    fontSize:12,
    color:'black'
  },
  arrow:{
    width:14,
    height:14,
    left:5,
    top:3
  },
  flor:{
    width:60,
    height:68,
    bottom:16,
    alignSelf:'flex-end',
  },
  florimg:{
   //borderWidth:2,
    width:415,
    height:150,
    position:'absolute',
    //zIndex:1,
    alignSelf:'center',
    justifyContent:'flex-end'
  },
        card: {
        backgroundColor: "white",
        borderRadius: 15,
        padding: 20,
        height:166,
        marginBottom: 12,
        //borderWidth:2
      },
      store: {
        fontSize: 12,
        color: "#666",
        width:86,
        height:18,
        //backgroundColor:'#FFFFFF',
        textAlign:'right',
        //marginBottom: 4,
      },
      store2: {
        fontSize: 10,
        color: "white",
        width:58,
        height:16,
        left:10,
        borderRadius:3,
        backgroundColor:'#D62B1F94',
        textAlign:'center'
      },
        flatlists:{
    //borderWidth:2,
    width:375,
    alignSelf:'center'
  },
    flor2:{
    width:20,
    height:26,
    //bottom:16,
    //alignSelf:'flex-end',
  },
  locations:{
    flexDirection:'row',
    top:7
  },
        title: {
        fontSize: 16,
        color:'black',
        fontWeight: "bold",
        marginBottom: 8,
        left:12
      },
            details: {
        fontSize: 14,
        color: "#555",
        left:32
      },
      actions: {
        flexDirection: "row",
        justifyContent: "space-around",
        top:25,
        //borderWidth:2,
        borderBottomRightRadius:15,
        borderBottomLeftRadius:15,
        backgroundColor:'#F9F9F9',
        width:375,
        height:52,
        alignSelf:'center',
        alignItems:'center'
      },
        cancel:{
    width:18,
    height:17,
    right:10
  },
        cancelButton: {
        //backgroundColor: "#FF4D4D",
        borderRadius: 4,
        //padding:8,
        flexDirection:'row'
      },
            rescheduleButton: {
        //backgroundColor: "#32CD32",
        borderRadius: 4,
        flexDirection:'row'
      },
            buttonText: {
        color: "#D62B1F",
        //left:10,
        //bottom:1,
        //textAlign: "center",
        fontWeight: "bold",
      },
        cancel2:{
    width:18,
    height:19,
    right:10
  },
    buttonText2: {
    color: "#00754A",
    //left:10,
    //bottom:1,
    //textAlign: "center",
    fontWeight: "bold",
  },
  flor3:{
    width:58,
    height:58
  },
  buttontext3:{
      color: "black",
      //left:10,
      //bottom:1,
      //textAlign: "center",
      fontWeight: "bold",
  },
  scrollContent: {
    width: 410,
    justifyContent: 'center',
    alignSelf:'center'
  },
});

export default Mymeeting