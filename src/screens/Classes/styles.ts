import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'space-between',
  },
  scrollView: {
    // flexGrow: 1,
    // flexDirection: 'column',
    // justifyContent: 'flex-start',
  },
  logo: {
    width: 180,
    height: 180,
  },
  content: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
  },
  imageBG: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  inputField: {
    flexGrow: 1,
    width: '100%',
    marginVertical: 100,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  grow: {
    flexGrow: 1,
  },
  mainButton: {
    height: 55,
  },
});

export default styles;
