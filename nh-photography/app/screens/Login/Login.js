
import { Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { styles } from "./LoginStyle";
import { 
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic 
} from '@expo-google-fonts/roboto';

import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
const backGroundImage = require("../../../assets/signInBackground.png");
const logo = require("../../../assets/NHLogo.png");
const backward = require("../../../assets/back.png");


export default function Login({navigation}) {

  const goBack = () => { 
    /*
      This function navigates the user back to homepage screen
    */
    navigation.replace('Home')
}
let [fontsLoaded, error] = useFonts({
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic 
})

if (!fontsLoaded) {
    return <AppLoading />
}

  return (
    <ImageBackground source={backGroundImage} resizeMode="cover" style={styles.image}> 
             
             <TouchableOpacity onPressIn={() => goBack()}>
                <Image source={backward} style={styles.backWardIcon}/>
             </TouchableOpacity>
        
        <KeyboardAvoidingView style={styles.container} behavior="padding">


             <View style={styles.headingContainer}>
                 <Text style={{
                              fontFamily: 'Roboto_700Bold', 
                              // fontWeight: '700',
                              fontSize: 34,
                              color: 'white',
                              fontWeight: 'bold',
                              textAlign:'left',
                              fontStyle: 'normal'}}> SIGN IN </Text>
                 <Text style={{
                              fontFamily: 'Roboto_400Regular', 
                              // fontWeight: '700',
                              fontSize: 12,
                              color: 'white',
                              fontWeight: 'bold',
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
