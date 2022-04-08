import { Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { styles } from "./LoginStyle";
import { OpenSans_300Light, OpenSans_700Bold} from '@expo-google-fonts/open-sans'
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import {SecureStore} from 'expo';


const backGroundImage = require("../../../assets/signInBackground.png");
const logo = require("../../../assets/NHLogo.png");
const backward = require("../../../assets/back.png");


export default function Login({ navigation }) {

  let [fontsLoaded, error] = useFonts({ OpenSans_300Light, OpenSans_700Bold })
  if (!fontsLoaded) { return <AppLoading /> }

  const goBack = () => { 
    // This function navigates the user back to homepage screen
    navigation.replace('Home')
}

  // const login = () => {
  //   fetch('/api/users/login', {
  //     method: "POST",
  //     body: JSON.stringify({ email, password }),
  //     headers: {
  //         "Content-Type": "application/json",
  //     },
  // })
  //     .then((res) => res.json())
  //     .then((data) => {
  //         if (data.token) {
  //           const token = await SecureStore.getItemAsync('secure_token');

  //         }
  //         else {
  //             alert('wrong password / username')
  //         }
  //     });
  // }

  return (
    <ImageBackground source={backGroundImage} resizeMode="cover" style={styles.image}> 
             
             <TouchableOpacity onPressIn={() => goBack()}>
                <Image source={backward} style={styles.backWardIcon}/>
             </TouchableOpacity>
        
        <KeyboardAvoidingView style={styles.container} behavior="padding">


             <View style={styles.headingContainer}>
                 <Text style={{
                              fontFamily: 'OpenSans_300Light', 
                              fontSize: 33,
                              color: 'white',
                              textAlign:'left',
                              fontStyle: 'normal'}}> SIGN IN </Text>
                 <Text style={{
                              fontFamily: 'OpenSans_300Light', 
                              fontSize: 11,
                              color: 'white',
                              textAlign:'left',
                              marginLeft: 5,
                              fontStyle: 'normal'}}> Enter your provided Username and Password </Text>
             </View>
             
             <View style={styles.inputContainer}>

               <TextInput placeholder='Email' style={styles.input}/>
               <TextInput placeholder='Password' style={styles.input} secureTextEntry />

             </View>

             <View style={styles.buttonsContainer}>

               <TouchableOpacity style={[styles.buttons, styles.loginButton]}>
                  <Text style={styles.boldText}> Continue </Text>
               </TouchableOpacity>

             </View>

             <View style={styles.logoContainer}>
              
                <View>
                  <Image source={logo} style = {{ width: 150, height: 50 }}/>
                </View>
            
             </View>
        </KeyboardAvoidingView>

    </ImageBackground>
  );
}
