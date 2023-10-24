import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import COLORS from './src/views/consts/COLORS';
import OnBoardScreen from './src/views/screens/OnBoardScreen';
import DetailsScreen from './src/views/screens/DetailsScreen';
import BottomNavigator from "./src/views/navigation/BottomNavigator"
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Reanimated from 'react-native-reanimated';
import 'react-native-gesture-handler';  

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content"/>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='BoardScreen' component={OnBoardScreen} />
        <Stack.Screen name='Home' component={BottomNavigator} />
        <Stack.Screen name='DetailsScreen' component={DetailsScreen} />

      </Stack.Navigator>
    </NavigationContainer>

  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// }
// );
