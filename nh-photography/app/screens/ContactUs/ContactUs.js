
import { Text, 
        View, 
        KeyboardAvoidingView, 
        ImageBackground, 
        Image, 
        TouchableOpacity } from 'react-native';
import { styles } from "./ContactUsStyle";
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

const backGroundImage = require("../../../assets/contactUs.png");
const logo = require("../../../assets/NHLogo.png");
const backward = require("../../../assets/back.png");
const phoneLogo = require("../../../assets/Phone.png");
const instaLogo = require("../../../assets/insta.png");
const fbLogo = require("../../../assets/facebookk.png");

export default function ContactUs( {navigation}) {
  
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
                <Image source={backward} style = {styles.backWardIcon}/>
             </TouchableOpacity>

        <KeyboardAvoidingView style={styles.container} behavior="padding">


             <View style={styles.headingContainer}>
                 <Text style={{
                              fontFamily: 'Roboto_700Bold', 
                              fontWeight: '700',
                              fontSize: 34,
                              color: 'white',
                              fontWeight: 'bold',
                              textAlign:'center',
                              fontStyle: 'normal'}}> CONTACT US </Text>
                 
                 <Text style={{
                              fontFamily: 'Roboto_400Regular', 
                              fontSize: 12,
                              color: 'white',
                              textAlign:'center',
                              fontStyle: 'normal',
                              }}> let’s get in touch in a way that you’re comfortable with </Text>
             </View>
             
             <View style={styles.flexcontainer}>
                
                <View style={styles.box1}>
                  <Image source={phoneLogo} style={styles.iconsImages}/>
                  <Text style={styles.iconsText}> Phone</Text>
                </View>
        
                <View style={styles.box1}>
                 <Image source={instaLogo} style={styles.iconsImages}/>
                 <Text style={styles.iconsText}> Instgram</Text>
                </View>

                <View style={styles.box1}>
                  <Image source={fbLogo} style={styles.iconsImages}/>
                  <Text style={styles.iconsText}>  Facebook </Text>
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
