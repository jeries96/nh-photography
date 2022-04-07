import { StyleSheet, View } from 'react-native';
import ContactUs from './app/screens/ContactUs/ContactUs';
import HomePage from './app/screens/Homepage/HomePage';
import Login from './app/screens/Login/Login';

import Navigation from './routes/navigation';

export default function App() {
  return (
    <View style={styles.container}>
      <Navigation />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
