import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex:1,
    //   justifyContent: 'center',
      top: 200,
      alignItems: 'center',
    },
    inputContainer: {
      width: '90%',
    },
    input: {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      paddingHorizontal: 12,
      // paddingVertical: 12,
      color: 'white',
      borderRadius: 30,
      margin: 10,
      height: 40,
    },
    buttonsContainer: {
      width: '85%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 25,
    },
    buttons:{
      textAlign: 'center',
      width: '100%',
      paddingHorizontal: 15,
      paddingVertical: 15,
      borderRadius: 30,
    },
    loginButton: {
      backgroundColor: '#A99449',
      color: 'white',
    },
    boldText: {
      fontWeight: '700',
      fontSize: 16,
      color: 'white',
      textAlign: 'center',
    },
    image: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
    logoContainer: {
        position: 'absolute',
        bottom: '35%',
    },
    headingText: {
      fontWeight: '700',
      fontSize: 34,
      color: 'white',
    },
    infoText: {
      fontWeight: '200',
      fontSize: 12,
      color: 'white',
    },
    headingContainer : {
        width: '85%',
        textAlign: 'center',
        margin: 20,
      },
      backWardIcon: {
        width: 30,
        height: 30,
        position: 'absolute',
        left: 45,
        top: 58,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 50,
      }
  });

  export {styles}