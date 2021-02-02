import {StyleSheet, TextStyle} from 'react-native';
import {colorsGlobal as colors} from '@constants';

const profilePic: TextStyle = {
  flexGrow: 1,
  width: 30,
  height: 30,
  alignItems: 'flex-end',
};

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
  header: {
    height: 'auto',
    backgroundColor: colors.PRIMARY_BLUE,
    flexGrow: 1,
    paddingVertical: 20,
    fontWeight: 'bold',
  },
  textInfo: {
    flexGrow: 1,
    alignItems: 'flex-start',
    padding: 20,
    fontSize: 20,
    color: colors.PRIMARY_WHITE,
    textTransform: 'uppercase',
  },
  userInfoSection: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
  },
  userInitialsText: {
    alignItems: 'center',
    alignSelf: 'center',
    color: colors.PRIMARY_WHITE,
    fontSize: 25,
    // fontFamily: 'Sf-Pro-Display-Regular',
    // textTransform: 'uppercase',
    // display: 'flex',
    // justifyContent: 'center',
    // position: 'absolute',
    // right: 2,
    // marginTop: 2,
  },
  usernameInitials: {
    width: 75,
    height: 75,
    padding: 20,
    backgroundColor: colors.PRIMARY_GOLD,
    borderRadius: 50,
    alignItems: 'center',
    alignSelf: 'center',
    marginRight: 20,
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
  profilePic,
});

export default styles;
