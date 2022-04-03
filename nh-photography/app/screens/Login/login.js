import {ImageBackground, Text, View, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { styles } from "./loginStyle";

const image = require("../../../assets/nhh.jpg");

export default function Login() {

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}> 
      <KeyboardAvoidingView style={styles.container} behavior="padding">
            
             <View style={styles.buttonsContainer}>
               
               <TouchableOpacity style={[styles.buttons, styles.loginButton]}>
                  <Text style={[styles.boldText, styles.text]}> GET MY PHOTOS </Text>
               </TouchableOpacity>

               <TouchableOpacity style={[styles.buttons, styles.registerButton]}>
                  <Text style={[styles.boldText, styles.text]}> CONTACT US </Text>
               </TouchableOpacity>
             </View> 

             <View style={styles.versionContainer}>
                 <Text style={styles.text}> Version 0.1 </Text>
             </View>

            
      </KeyboardAvoidingView>
    </ImageBackground>
   

  );
}