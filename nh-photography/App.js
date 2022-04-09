import { StyleSheet, View } from 'react-native';
import ContactUs from './app/screens/ContactUs/ContactUs';
import HomePage from './app/screens/Homepage/HomePage';
import Login from './app/screens/Login/Login';

import Navigation from './routes/navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './routes/navigation';


export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
