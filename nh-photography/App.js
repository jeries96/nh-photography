import { StyleSheet, View } from 'react-native';
import Login from './app/screens/Login/login';
 
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
