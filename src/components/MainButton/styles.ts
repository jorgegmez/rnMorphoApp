import {colorsGlobal as colors} from '@constants';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonBlue: {
    backgroundColor: colors.PRIMARY_BLUE,
  },
  buttonCommon: {
    alignItems: 'center',
    borderRadius: 25,
    height: 45,
    justifyContent: 'center',
    marginVertical: 10,
    width: '85%',
  },
  buttonGray: {
    backgroundColor: colors.LIGHT_GREY,
  },
  buttonWhite: {
    backgroundColor: colors.PRIMARY_WHITE,
    borderColor: colors.PRIMARY_BLUE,
    borderRadius: 25,
    borderWidth: 1,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonFlat: {
    // width: '90%',
    paddingHorizontal: 123,
    paddingVertical: 15,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.PRIMARY_GOLD,
    borderRadius: 8,
  },
  textFlatButton: {
    color: colors.BLACK,
    margin: 'auto',
    fontSize: 16,
    fontWeight: '500',
  },
  icon: {
    marginRight: 10,
  },
  buttonOutline: {
    backgroundColor: colors.PRIMARY_WHITE,
    borderColor: colors.PRIMARY_BLUE,
  },
});

export default styles;
