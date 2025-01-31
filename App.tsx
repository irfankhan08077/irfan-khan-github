// import React, { useEffect } from 'react';
// import { Alert, StyleSheet } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Splash from './src/Screen/Splash';
// import Login from './src/Screen/Login';
// import Verification from './src/Screen/Verification';
// import Dashboard from './src/Screen/Dashboard';
// import Visit from './src/Screen/Visit';
// import Visitmanage from './src/Screen/Visitmanage';
// import Schedule from './src/Screen/Schedule';
// import Shared from './src/Screen/Shared';
// import RMvisit from './src/Screen/RMvisit';
// import DMvisit from './src/Screen/DMvisit';
// import Mymeeting from './src/Screen/Mymeeting';
// import Bottam from './src/Screen/Bottam';
// import Upcoming from './src/Screen/Upcoming';
// import Reschedule from './src/Screen/Reschedule';

// const Stack = createNativeStackNavigator();

// const App = () => {

//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
//         <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
//         <Stack.Screen name="Verification" component={Verification} options={{ headerShown: false }} />
//         <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
//         {/* Replace this screen with the Tab Navigator */}
//         <Stack.Screen name="Bottam" component={Bottam} options={{ headerShown: false }} />
//         <Stack.Screen name="Visit" component={Visit} options={{ headerShown: false }} />
//         <Stack.Screen name="Visitmanage" component={Visitmanage} options={{ headerShown: false }} />
//         <Stack.Screen name="Schedule" component={Schedule} options={{ headerShown: false }} />
//         <Stack.Screen name="Shared" component={Shared} options={{ headerShown: false }} />
//         <Stack.Screen name="RMvisit" component={RMvisit} options={{ headerShown: false }} />
//         <Stack.Screen name="DMvisit" component={DMvisit} options={{ headerShown: false }} />
//         <Stack.Screen name="Mymeeting" component={Mymeeting} options={{ headerShown: false }} />
//         <Stack.Screen name="Upcoming" component={Upcoming} options={{ headerShown: false }} />
//         <Stack.Screen name="Reschedule" component={Reschedule} options={{ headerShown: false }} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;

// const styles = StyleSheet.create({});





import React, { useEffect } from 'react';
import { Alert, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Email from './src/Practice/Email';
import Dashboard from './src/Practice/Dashboard';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Email" component={Email} options={{ headerShown: false }} />
        <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});