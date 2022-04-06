import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent: 'center',
      top: 200,
      alignItems: 'center',
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
    headingContainer : {
      width: '80%',
      textAlign: 'center',
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
    backWardIcon: {
        width: '30px',
        height: '30px',
        position: 'absolute',
        left: 50,
        top: 50,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 50,
      },
      flexcontainer: {
        flex: 3, 
        flexDirection: 'row', 
        width: '80%', 
        justifyContent: 'space-around',
        margin: 50,
      },
      box1: {
        width: 50,
        height: 50,
        alignItems: 'center'
      },
      iconsText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 10,
      },
  });

  export {styles}