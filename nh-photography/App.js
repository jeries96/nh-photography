import { StyleSheet, View } from 'react-native';
import HomePage from './app/screens/Homepage/HomePage';
 
export default function App() {
  return (
    <View style={styles.container}>
      <HomePage />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
