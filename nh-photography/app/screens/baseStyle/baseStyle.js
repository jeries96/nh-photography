import { StyleSheet,  } from 'react-native';

const baseStyle = StyleSheet.create({
    mainScreenContainer: {
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'center',
    },

    backButtonWrapper : {
      position: 'absolute',
      left: '12%',
      top: '10%',
    },

    backWardIcon: {
      width: 30,
      height: 30,
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      borderRadius: 50,
      },

    image: {
      // flex: 1,
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      justifyContent: 'center',
    },

    logoContainer: {
      width: '100%',
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'center',
        position: 'absolute',
        bottom: '10%',
    },
    
  });

  export {baseStyle}