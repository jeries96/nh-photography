import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    mainScreenContainer: {
      flex:1,
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'center',
    },
    backWardIcon: {
      width: 30,
      height: 30,
      position: 'absolute',
      left: '12%',
      top: 58,
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      borderRadius: 50,
      },
    image: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
    logoContainer: {
        position: 'absolute',
        bottom: '10%',
    },
    contactUsContainer: {
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'center',
    },
    headingContainer : {
      width: '90%',
      textAlign: 'center',
    },
    
    // Icons styles 
    socialIConsContainer: {
      // flex: 1, 
      flexDirection: 'row', 
      width: '80%',
      justifyContent: 'space-evenly',
      margin: '20%',
      },
    iconWrapper: {
      width: 100,
      alignItems: 'center',
      },
    icon: {
      width: 50,
      height: 50,
      },
    iconsText: {
      color: 'white',
      fontSize: 10,
      padding: 10,
      },
  });

  export {styles}