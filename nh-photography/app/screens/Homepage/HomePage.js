import { ImageBackground, Image, Text, View, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { styles } from "./HomePageStyle";
import { OpenSans_300Light, OpenSans_700Bold } from '@expo-google-fonts/open-sans'
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

const backGroundImage = require("../../../assets/Background.png");
const logo = require("../../../assets/NHLogo.png");

export default function HomePage({ navigation }) {

  // Using Open sans font
  let [fontsLoaded, error] = useFonts({ OpenSans_300Light, OpenSans_700Bold })
  if (!fontsLoaded) { return <AppLoading /> }

  const goToGetMyPhotos = () => {
    // This function navigates the user to login screen
    navigation.navigate('Login')
  }

  const goToContactUs = () => {
    // This function navigates the user to contact us screen
    navigation.navigate('ContactUs')
  }

  return (
    <ImageBackground source={backGroundImage} resizeMode="cover" style={styles.image}>
      <KeyboardAvoidingView style={styles.container} behavior="padding">

        <View style={styles.logoContainer}>

          <View>
            <Image source={logo} style={{ width: 280, height: 80 }} />
          </View>

        </View>

        <View style={styles.buttonsContainer}>

          <TouchableOpacity style={[styles.buttons, styles.loginButton]} onPress={goToGetMyPhotos}>
            <Text style={[{
              fontFamily: 'OpenSans_300Light',
              fontWeight: '300',
              fontSize: 16,
              color: 'white',
              letterSpacing: 0.02,
              textAlign: 'center',
              fontStyle: 'normal'
            }]}> GET MY PHOTOS </Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.buttons, styles.registerButton]} onPress={goToContactUs}>
            <Text style={[{
              fontFamily: 'OpenSans_700Bold',
              fontSize: 16,
              color: 'white',
              letterSpacing: 0.02,
              textAlign: 'center',
              fontStyle: 'normal'
            }]}> Contact us </Text>
          </TouchableOpacity>

        </View>

        <View style={styles.versionContainer}>
          <Text style={{
            fontFamily: 'OpenSans_300Light',
            fontSize: 16,
            color: 'white',
            letterSpacing: 0.02,
            textAlign: 'center',
            fontStyle: 'normal'
          }}> Version 0.1 </Text>
        </View>


      </KeyboardAvoidingView>
    </ImageBackground>


  );
}