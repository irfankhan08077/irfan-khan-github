import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './Profile';
import Menu from './Menu';
import Dashboard from './Dashboard';
import { StyleSheet, View } from 'react-native';
import * as Animatable from 'react-native-animatable';

const Tab = createBottomTabNavigator();

const Bottam = () => {
  const bounceAnimation = {
    0: { scale: 2 },
    0.5: { scale: 1.2 },
    1: { scale: 1.2 },
  };

  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconSource;

          if (route.name === 'Profile') {
            iconSource = require('../Icon/profile.png');
          } else if (route.name === 'Dashboard') {
            iconSource = require('../Icon/dashboards.png');
          } else if (route.name === 'Menu') {
            iconSource = require('../Icon/menu.png');
          }

          return (
            <View
              style={[
                styles.iconContainer,
                { backgroundColor: focused ? '#009966' : 'transparent' },
                { bottom: focused ? 19 : 0 },
                { borderWidth: focused ? 6 : 0 }
              ]}
            >
              <Animatable.Image
                animation={focused ? bounceAnimation : undefined} // Bounce animation
                duration={500}
                easing="ease-in-out"
                source={iconSource}
                style={[
                  styles.icon,
                  { transform: [{ scale: focused ? 1.1 : 0.9 }] }, // Scale on focus
                ]}
                resizeMode="contain"
              />
            </View>
          );
        },
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: 'gray',
      })}
    >
      <Tab.Group screenOptions={{ headerShown:false }} >
       <Tab.Screen name="Profile" component={Profile} options={{ tabBarLabel: 'Profile' }} />
       <Tab.Screen name="Dashboard" component={Dashboard} options={{ tabBarLabel:'Dashboard' }} />
       <Tab.Screen name="Menu" component={Menu} options={{ tabBarLabel: 'Menu' }} />
      </Tab.Group>

    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    borderColor:'#F2F0EB',
    width: 83,
    height: 83,
    //bottom: 20
  },
  icon: {
    width: 30,
    height: 30,
  },
  tabBar: {
    height: 72,
    backgroundColor: 'white',
  }
});

export default Bottam;
