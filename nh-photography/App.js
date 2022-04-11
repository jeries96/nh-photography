import { StyleSheet, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import MyStack from './routes/navigation';


export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
