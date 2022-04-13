
import { createStackNavigator } from '@react-navigation/stack';
import GalleryPage from '../app/screens/Gallery/GalleryPage';


const Stack = createStackNavigator();

export default function LoggedNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Gallery" component={GalleryPage} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}
