
import { Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { styles } from "./LoginStyle";

const backGroundImage = require("../../../assets/signInBackground.png");
const logo = require("../../../assets/NHLogo.png");
const backward = require("../../../assets/back.png");


export default function Login() {


  return (
    <ImageBackground source={backGroundImage} resizeMode="cover" style={styles.image}> 
             <View>
                <Image source={backward} style = {styles.backWardIcon}/>
             </View>
        <KeyboardAvoidingView style={styles.container} behavior="padding">


             <View style={styles.headingContainer}>
                 <Text style={styles.headingText}> SIGN IN </Text>
                 <Text style={styles.infoText}> Enter your provided Username and Password </Text>
             </View>
             
             <View style={styles.inputContainer}>

               <TextInput placeholder='Email' style={styles.input}  />
               <TextInput placeholder='Password' style={styles.input} secureTextEntry/>

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
