import { NavigationContainer } from '@react-navigation/native';
import MyStack from './routes/navigation';

export default function App() {

  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
