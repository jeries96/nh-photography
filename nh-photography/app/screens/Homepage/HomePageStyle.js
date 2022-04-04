import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text : {
        color: 'white',
        textAlign: 'center'
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
      borderRadius: 15,
      padding:12,
      margin: 10,
    },
    loginButton: {
      backgroundColor: 'rgb(197,179,88)'
    },
    registerButton:{
      backgroundColor: 'grey',
      opacity: 0.9,
      marginTop: 10,
    },
    boldText: {
      fontWeight: '700',
      fontSize: 14,
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
       top:0,
       marginTop: '10%',
       display: 'flex',
      },
      logoLeftText: {
        color: 'white',
        padding: 10,
        borderRightWidth: '2px',
        borderRightColor: 'gold',
       },
  });

  export {styles}