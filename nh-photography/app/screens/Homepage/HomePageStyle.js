import { StyleSheet } from 'react-native';
// import {UbuntuMono_400Regular} from "@expo-google-fonts/dev";

const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text : {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        // fontFamily: UbuntuMono_400Regular,
    },
    buttonsContainer: {
      width: '65%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 40,
      textAlign: 'center'
    },
    buttons:{
      width: '100%',
      height: '40px',
      borderRadius: 30,
      padding:12,
      margin: 5,
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
    },
    loginButton: {
      backgroundColor: '#A99449'
    },
    registerButton:{
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      marginTop: 5,
    },
    boldText: {
      fontWeight: '700',
      fontSize: 16,
    },
    image: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      },
    versionContainer: {
      position: 'absolute',
      bottom:0,
      marginBottom: '15%'
    },
    logoContainer: {
       position: 'absolute',
       top:100,
      },

  });

  export {styles}