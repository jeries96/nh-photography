import { Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { styles } from "./LoginStyle";
import { baseStyle } from "../baseStyle/baseStyle";
import { useState } from 'react';

import { OpenSans_300Light, OpenSans_700Bold } from '@expo-google-fonts/open-sans'
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import AsyncStorage from '@react-native-async-storage/async-storage';


const backGroundImage = require("../../../assets/signInBackground.png");
const logo = require("../../../assets/NHLogo.png");
const backward = require("../../../assets/back.png");


export default function Login({ navigation }) {

  const [email, setEmail] = useState({})
  const [password, setPassword] = useState({})

  // Making sure the fonts loaded, if not renders app loading 
  let [fontsLoaded, error] = useFonts({ OpenSans_300Light, OpenSans_700Bold })
  if (!fontsLoaded) { return <AppLoading /> }

  const storeData = async (token, username, event) => {
    try {
      await AsyncStorage.setItem('token', token)
      await AsyncStorage.setItem('username', username)
      await AsyncStorage.setItem('event', event)
    } catch (e) {
      console.log(e)
    }
  }

  const login = () => {
    console.log('HIIIIIIIIIIIIIIIIIIIIIII')
    if (email === 'admin' && password === 'admin') {
      navigation.navigate('Gallery')
      storeData('asdasdadsaloasda', 'jeries', 'wedding')
    }
  }

  // const login = () => {
  //     console.log('IN')
  //     fetch('https://demo.parklolo.com/api/login', {
  //         method: "POST",
  //         body: JSON.stringify({identifier:'admin', password:'admin'}),
  //         headers: {
  //             "Content-Type": "application/json",
  //         },
  //     })
  //         .then((res) => res.json())
  //         .then((data) => {
  //           console.log(data)
  //           save('secure_token', data.accessToken)

  //             }

  //         );
  // }

  return (
    <ImageBackground dir='ltr' source={backGroundImage} resizeMode="cover" style={baseStyle.image}>

      <View dir='ltr' style={baseStyle.backButtonWrapper}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={backward} style={baseStyle.backWardIcon} />
        </TouchableOpacity>
      </View>

      <KeyboardAvoidingView dir='ltr' style={styles.mainScreenContainer} behavior="padding">

        <View style={styles.loginWrapper}>
          <View style={styles.headingContainer}>

            <Text style={{
              fontFamily: 'OpenSans_300Light',
              fontSize: 33,
              color: 'white',
              textAlign: 'left',
              fontStyle: 'normal'
            }}> SIGN IN </Text>

            <Text style={{
              fontFamily: 'OpenSans_300Light',
              fontSize: 11,
              color: 'white',
              textAlign: 'left',
              marginLeft: 5,
              fontStyle: 'normal'
            }}> Enter your provided Username and Password </Text>
          </View>

          <View style={styles.inputContainer}>

            <TextInput placeholder='Email' placeholderTextColor="grey" style={styles.input} onChangeText={(email) => setEmail(email)} />
            <TextInput placeholder='Password' placeholderTextColor="grey" style={styles.input} onChangeText={(password) => setPassword(password)} secureTextEntry />


          </View>

          <View style={styles.buttonsContainer}>

            <TouchableOpacity style={[styles.buttons, styles.loginButton]}>
              <Text style={styles.boldText} onPress={login}> Continue </Text>
            </TouchableOpacity>

          </View>
        </View>

      </KeyboardAvoidingView>

      <View style={baseStyle.logoContainer}>

        <View>
          <Image source={logo} style={{ width: 150, height: 50 }} />
        </View>

      </View>

    </ImageBackground>
  );
}
