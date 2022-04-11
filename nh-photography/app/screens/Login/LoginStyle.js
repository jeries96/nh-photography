import { StyleSheet, Dimensions } from 'react-native';

var height = Dimensions.get("window").height;
var width = Dimensions.get("window").width;

const styles = StyleSheet.create({
    loginWrapper: {
      justifyContent: 'center',
      position: 'relative',
      alignItems: 'center',
      width: '100%',
      bottom: '30%',
    },
    inputContainer: {
      width: '90%',
      flexDirection: 'column',
    },
    input: {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      paddingHorizontal: 12,
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
    
    headingContainer : {
        width: '85%',
        textAlign: 'center',
        margin: 20,
      },

  });

  export {styles}