// React packages 
import { Image, Text, View, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';

// Expo packages 
import { OpenSans_300Light, OpenSans_700Bold } from '@expo-google-fonts/open-sans'
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { LinearGradient } from 'expo-linear-gradient';

// Style 
import { styles } from "./GalleryStyle";
const logout = require("../../../assets/logout.png");


let userData = { userToken: null, username: null, email: null, eventType: null }

export default function GalleryPage({ navigation }) {


  useEffect(async () => {
    try {
      userData.userToken = await AsyncStorage.getItem('token')
      userData.username = await AsyncStorage.getItem('username')
      userData.eventType = await AsyncStorage.getItem('event')

      console.log(userData.userToken)
      console.log(userData.username)
      console.log(userData.eventType)

    } catch (e) {
      console.log(e)
    }
  }, [])

  // Using Open sans font
  let [fontsLoaded, error] = useFonts({ OpenSans_300Light, OpenSans_700Bold })
  if (!fontsLoaded) { return <AppLoading /> }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">

      <LinearGradient colors={['#A99449', 'black']} end={[0.8, 0.5]} style={styles.HeaderWrapper}>

        <View dir='ltr'>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={logout} style={{ width: 30, height: 30, position: 'relative', top: 30, left: '90%' }} />
          </TouchableOpacity>
        </View>

        <View style={styles.titleWrapper}>

          <View style={styles.wedding}>

            <Text style={{ color: 'white', fontFamily: 'OpenSans_300Light', fontSize: 20, textAlign: 'left', lineHeight: 34, justifyContent: 'space-around' }}>
              {userData.username}
            </Text>
            <Text style={{ color: '#A99449', fontSize: 15, alignItems: 'center', lineHeight: 38 }}> {userData.eventType} </Text>

          </View>

          <Text style={{ color: 'white', fontSize: 12, width: '100%' }}> Choose your favorite Photos and start downloading </Text>

        </View>

      </LinearGradient>

    </KeyboardAvoidingView >

  );
}