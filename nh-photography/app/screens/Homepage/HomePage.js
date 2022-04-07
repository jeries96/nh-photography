import {ImageBackground, Image, Text, View, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { styles } from "./HomePageStyle";

const backGroundImage = require("../../../assets/Background.png");
const logo = require("../../../assets/NHLogo.png");

export default function HomePage( {navigation} ) {

  const goToGetMyPhotos = () => { 
      /*
        This function handles sign in
          - Sign in the user If cardentials correct ! 
          - Throws an unvalid cordentials error If the cardentials is unvalid!
      */
      navigation.replace('Login')
}

  const goToContactUs = () => { 
    // This function navigates the user to contact us screen
    navigation.replace('ContactUs')
}

  return (
    <ImageBackground source={backGroundImage} resizeMode="cover" style={styles.image}> 
      <KeyboardAvoidingView style={styles.container} behavior="padding">

            <View style={styles.logoContainer}>
              
                <View>
                  <Image source={logo} style = {{ width: 280, height: 80 }}/>
                </View>
            
            </View>
            
            <View style={styles.buttonsContainer}>
               
                  <TouchableOpacity style={[styles.buttons, styles.loginButton]} onPress={goToGetMyPhotos}>
                      <Text style={[styles.boldText, styles.text]}> GET MY PHOTOS </Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={[styles.buttons, styles.registerButton]} onPress={goToContactUs}>
                      <Text style={styles.text}> Contact us </Text>
                  </TouchableOpacity>
             </View> 

             <View style={styles.versionContainer}>
                 <Text style={styles.text}> Version 0.1 </Text>
             </View>

            
      </KeyboardAvoidingView>
    </ImageBackground>
   

  );
}