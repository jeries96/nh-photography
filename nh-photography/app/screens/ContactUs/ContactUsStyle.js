import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex:1,
      top: 307,
      alignItems: 'center',
      textAlign: 'center'
    },
    image: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
    logoContainer: {
        position: 'absolute',
        top: '40%',
    },
    headingContainer : {
      width: '90%',
      textAlign: 'center',
    },
    headingText: {
      fontWeight: '700',
      fontSize: 34,
      fontWeight: 'bold',
      color: 'white',
      textAlign:'center',
    },
    infoText: {
      fontWeight: '200',
      fontSize: 12,
      color: 'white',
    },
    backWardIcon: {
      width: 30,
      height: 30,
      position: 'absolute',
      left: 45,
      top: 58,
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      borderRadius: 50,
      },
    flexcontainer: {
      flex: 3, 
      flexDirection: 'row', 
      width: '90%', 
      justifyContent: 'space-evenly',
      margin: 50,
      },
    box1: {
      width: 100,
      alignItems: 'center',
      },
    iconsImages: {
      width: 50,
      height: 50,
      },
    iconsText: {
      // textAlign: 'center',
      color: 'white',
      fontSize: 10,
      padding: 10,
      },
  });

  export {styles}