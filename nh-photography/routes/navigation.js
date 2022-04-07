import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'

// Screen
import HomePage from '../app/screens/Homepage/HomePage'
import Login from '../app/screens/Login/Login'
import ContactUs from '../app/screens/ContactUs/ContactUs'


const screens = {
    Home: {
        screen: HomePage,
        navigationOptions:{
            headerShown: false
          }
    },

    Login: {
        screen: Login,
        navigationOptions:{
            headerShown: false
          }
    },

    ContactUs: {
        screen: ContactUs,
        navigationOptions:{
            headerShown: false
          }
    },
}

const Navigation = createStackNavigator(screens)

export default createAppContainer(Navigation)