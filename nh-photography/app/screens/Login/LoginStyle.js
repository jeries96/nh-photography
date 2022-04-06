import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex:1,
    //   justifyContent: 'center',
      top: 200,
      alignItems: 'center',
    },
    inputContainer: {
      width: '80%',
    },
    input: {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      paddingHorizontal: 14,
      paddingVertical: 12,
      borderRadius: 30,
      margin: 10,
    },
    buttonsContainer: {
      width: '76%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 40,
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
        width: '80%',
        textAlign: 'center',
      },
      backWardIcon: {
        width: '30px',
        height: '30px',
        position: 'absolute',
        left: 50,
        top: 50,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 50,
      }
  });

  export {styles}