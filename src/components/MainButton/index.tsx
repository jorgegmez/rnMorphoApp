import {
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

import {Icon} from '@components';
import React, {PureComponent, ReactNode} from 'react';
import {colorsGlobal as colors} from '@constants';
import styles from './styles';

interface Props extends TouchableOpacityProps {
  text: string;
  outline?: boolean;
  flat?: boolean;
  icon?: {name: string; size?: number; color?: string; type: string};
  children?: ReactNode;
  customIcon?: boolean;
  readonly customTextStyle?: TextStyle[] | TextStyle;
  readonly customButtonStyle?: TextStyle[] | TextStyle;
  readonly customIconStyle?: TextStyle[] | TextStyle;
  onPress?(): void | Promise<void>;
  testID?: string;
  disabled?: boolean;
}

class MainButton extends PureComponent<Props> {
  render() {
    const {
      text,
      onPress,
      icon,
      customTextStyle,
      customButtonStyle,
      customIcon = false,
      children,
      testID,
      disabled = false,
    } = this.props;

    return (
      <TouchableOpacity
        disabled={disabled}
        testID={testID}
        style={[styles.buttonFlat, customButtonStyle]}
        onPress={onPress}>
        {customIcon && children}
        {icon && (
          <Icon
            config={{...icon, color: colors.PRIMARY_WHITE}}
            style={text ? styles.icon : {}}
          />
        )}
        {text && (
          <Text style={[styles.textFlatButton, customTextStyle]}>{text}</Text>
        )}
      </TouchableOpacity>
    );
  }
}

export default MainButton;
