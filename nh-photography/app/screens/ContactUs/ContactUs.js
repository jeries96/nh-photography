
import { Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { styles } from "./ContactUsStyle";

const backGroundImage = require("../../../assets/contactUs.png");
const logo = require("../../../assets/NHLogo.png");
const backward = require("../../../assets/back.png");
const phoneLogo = require("../../../assets/Phone.png");
const instaLogo = require("../../../assets/facebookk.png");
const fbLogo = require("../../../assets/insta.png");

export default function ContactUs() {
  const socialIconsLink = {'url': '', 'name': '', 'icon': ''}


  return (
    <ImageBackground source={backGroundImage} resizeMode="cover" style={styles.image}> 
             <View>
                <Image source={backward} style = {styles.backWardIcon}/>
             </View>
        <KeyboardAvoidingView style={styles.container} behavior="padding">


             <View style={styles.headingContainer}>
                 <Text style={styles.headingText}> CONTACT US </Text>
                 <Text style={styles.infoText}> let’s get in touch in a way that you’re comfortable with </Text>
             </View>
             
             <View style={styles.flexcontainer}>
                
                <View style={styles.box1}>
                  <Image source={phoneLogo} style={styles.box1}/>
                  <Text style={styles.iconsText}> Phone</Text>
                </View>
        
                <View style={styles.box1}>
                 <Image source={instaLogo} style={styles.box1}/>
                 <Text style={styles.iconsText}> Facebook </Text>
                </View>

                <View style={styles.box1}>
                  <Image source={fbLogo} style={styles.box1}/>
                  <Text style={styles.iconsText}>  Instgram </Text>
                </View>

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
