import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  HeaderWrapper: {
    flex: 0.2,
    borderBottomLeftRadius: 34,
    backgroundColor: '#A99449',
    height: '100%',
  },
  HeaderWrappers: {
    flex: 1,
    backgroundColor: 'black',
    textAlign: 'center',
    justifyContent: 'center',
  },
  title: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    top: '40%',
    paddingLeft: 20,
  },
  titleWrapper: {
    width: '100%',
    paddingLeft: 20,
    position: 'relative',
    top: '20%',
    textAlign: 'left',
  },
  wedding: {
    flexDirection: 'row',
  }
});

export { styles }