import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  contactUsContainer: {
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  },
  headingContainer: {
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

export { styles }