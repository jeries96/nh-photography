import { Text, View, KeyboardAvoidingView, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { styles } from "./ContactUsStyle";
import { baseStyle } from "../baseStyle/baseStyle";
import { OpenSans_300Light } from '@expo-google-fonts/open-sans'
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

const backGroundImage = require("../../../assets/contactUs.png");
const logo = require("../../../assets/NHLogo.png");
const backward = require("../../../assets/back.png");
const phoneLogo = require("../../../assets/Phone.png");
const instaLogo = require("../../../assets/insta.png");
const fbLogo = require("../../../assets/facebookk.png");

export default function ContactUs({ navigation }) {
  // Using Open sans font
  let [fontsLoaded, error] = useFonts({ OpenSans_300Light })
  if (!fontsLoaded) { return <AppLoading /> }

  return (
    <ImageBackground dir='ltr' source={backGroundImage} resizeMode="cover" style={baseStyle.image}>

      <View dir='ltr' style={baseStyle.backButtonWrapper}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={backward} style={baseStyle.backWardIcon} />
        </TouchableOpacity>
      </View>

      <KeyboardAvoidingView dir='ltr' style={baseStyle.mainScreenContainer} behavior="padding">


        <View style={styles.contactUsContainer}>

          <View style={styles.headingContainer}>
            <Text style={{
              fontFamily: 'OpenSans_300Light',
              fontWeight: '300',
              fontSize: 33,
              color: 'white',
              letterSpacing: 0.02,
              textAlign: 'center',
              fontStyle: 'normal'
            }}> CONTACT US </Text>

            <Text style={{
              fontFamily: 'OpenSans_300Light',
              fontWeight: '300',
              fontSize: 11,
              color: 'white',
              letterSpacing: 0.01,
              textAlign: 'center',
              fontStyle: 'normal',
            }}> let’s get in touch in a way that you’re comfortable with </Text>
          </View>

          <View style={styles.socialIConsContainer}>

            <View style={styles.iconWrapper}>
              <Image source={phoneLogo} style={styles.icon} />
              <Text style={styles.iconsText}> Phone</Text>
            </View>

            <View style={styles.iconWrapper}>
              <Image source={instaLogo} style={styles.icon} />
              <Text style={styles.iconsText}> Instgram</Text>
            </View>

            <View style={styles.iconWrapper}>
              <Image source={fbLogo} style={styles.icon} />
              <Text style={styles.iconsText}>  Facebook </Text>
            </View>

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
