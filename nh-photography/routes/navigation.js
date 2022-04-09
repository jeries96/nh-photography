
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// // Screen
import HomePage from '../app/screens/Homepage/HomePage'
import Login from '../app/screens/Login/Login'
import ContactUs from '../app/screens/ContactUs/ContactUs'


const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomePage" component={HomePage} options={{headerShown: false}} />
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
      <Stack.Screen name="ContactUs" component={ContactUs} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}
