import { StyleSheet, Text, View, FlatList, TouchableOpacity, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Firestore se data fetch karne ke liye listener
    const unsubscribe = firestore()
      .collection('users')
      .orderBy('createdAt', 'desc')
      .onSnapshot(snapshot => {
        const userList = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUsers(userList);
      });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

  // Function to delete a user from Firestore
  const deleteUser = async (userId) => {
    Alert.alert(
      "Delete User",
      "Are you sure you want to delete this user?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Yes, Delete",
          onPress: async () => {
            try {
              await firestore().collection('users').doc(userId).delete();
              console.log("User deleted successfully!");
            } catch (error) {
              console.error("Error deleting user:", error);
            }
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registered Users</Text>
      <FlatList
        style={styles.flatlists}
        data={users}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.userCard}>
            <Text style={styles.texts}>Name : {item.name}</Text>
            <Text style={styles.texts}>Email : {item.email}</Text>
            <Text style={styles.texts}>Password : {item.password}</Text>
            <Text style={styles.texts}>Number : {item.number}</Text>

            {/* Delete Button */}
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => deleteUser(item.id)}
            >
              <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 25,
    color:'#444',
    fontWeight: 'bold',
    textAlign: 'center',
    top:27
  },
  userCard: {
    padding: 15,
    marginVertical: 10,
    borderWidth: 1,
    height:200,
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 12,
    top:20,
    borderRadius: 5,
    alignItems: 'center',
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  flatlists:{
    top:66
  },
  texts:{
    fontSize:17,
    color:'black',
    left:5,
    lineHeight:26,
    fontWeight:'400'
  }
});
