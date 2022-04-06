import { StyleSheet, View } from 'react-native';
import HomePage from './app/screens/Homepage/HomePage';
import Login from './app/screens/Login/Login';
 
export default function App() {
  return (
    <View style={styles.container}>
      <Login />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
