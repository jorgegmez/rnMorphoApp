import {colorsGlobal as colors} from '@constants';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
  },
  inputTextLabel: {
    fontSize: 16,
    marginBottom: 10,
    color: colors.LIGHT_GREY,
  },
  inputStyle: {
    fontSize: 25,
    borderRadius: 2,
    flex: 1,
    padding: 5,
    backgroundColor: colors.PRIMARY_WHITE,
    color: colors.BLACK,
  },
  inputStyleCode: {
    fontSize: 18,
    backgroundColor: colors.PRIMARY_WHITE,
    color: colors.BLACK,
    letterSpacing: 30,
    textAlign: 'center',
  },
  inputContainer: {
    width: '100%',
    // overflow: 'hidden',
    // alignItems: 'center',
  },
  inputWithMaskIcon: {
    paddingRight: 15,
    paddingLeft: 10,
  },
});

export default styles;
