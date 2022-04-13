
import { createStackNavigator } from '@react-navigation/stack';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import HomePage from '../app/screens/Homepage/HomePage'
import Login from '../app/screens/Login/Login'
import ContactUs from '../app/screens/ContactUs/ContactUs'
import GalleryPage from '../app/screens/Gallery/GalleryPage';


const Stack = createStackNavigator();

export default function MyStack() {

  const [token, setToken] = useState(false)

  useEffect(async () => {
    let userToken;

    try {
      userToken = await AsyncStorage.getItem('token')

    
      setToken(true)

    } catch (e) {
      console.log(e)
    }
  }, [])

  return (
    <Stack.Navigator>

      <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="ContactUs" component={ContactUs} options={{ headerShown: false }} />
      <Stack.Screen name="Gallery" component={GalleryPage} options={{ headerShown: false }} />

    </Stack.Navigator>
  );
}
