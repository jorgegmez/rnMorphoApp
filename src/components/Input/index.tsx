import {Text, TextInput, TextInputProps, TextStyle, View} from 'react-native';
import {colorsGlobal as colors} from '@constants';

import React, {PureComponent} from 'react';
import styles from './styles';

interface Props extends TextInputProps {
  label: string;
  placeholder?: string;
  value?: string;
  allowCapitalizeCase?: boolean;
  onChange: (e: any | React.ChangeEvent<any>) => void;
  onBlur?: (e: any) => void;
  hasError?: boolean;
  labelStyles?: TextStyle;
  type: 'numeric' | 'normal' | 'password' | 'email';
  testID?: string;
  maxLength?: number;
}

class Input extends PureComponent<Props> {
  render() {
    const {
      label,
      placeholder,
      value,
      allowCapitalizeCase,
      onChange,
      onBlur,
      hasError,
      labelStyles,
      type,
      maxLength,
      testID,
    } = this.props;
    return (
      <View style={styles.container}>
        <Text style={[styles.inputTextLabel, labelStyles]}>{label}</Text>
        <View>
          {type === 'numeric' && (
            <View style={styles.inputContainer}>
              <TextInput
                maxLength={maxLength}
                testID={testID}
                placeholder={placeholder}
                autoCorrect={false}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                style={[
                  styles.inputStyle,
                  {color: hasError ? colors.BLACK : colors.PRIMARY_BLUE},
                ]}
                keyboardType="numeric"
              />
            </View>
          )}

          {type === 'normal' && (
            <View style={styles.inputContainer}>
              <TextInput
                maxLength={maxLength}
                autoCapitalize={allowCapitalizeCase ? 'words' : 'none'}
                testID={testID}
                placeholder={placeholder}
                autoCorrect={false}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                style={[
                  styles.inputStyle,
                  {color: hasError ? colors.BLACK : colors.PRIMARY_BLUE},
                ]}
              />
            </View>
          )}

          {type === 'email' && (
            <View style={styles.inputContainer}>
              <TextInput
                maxLength={maxLength}
                autoCapitalize={allowCapitalizeCase ? 'words' : 'none'}
                testID={testID}
                placeholder={placeholder}
                autoCorrect={false}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                style={[
                  styles.inputStyle,
                  {color: hasError ? colors.BLACK : colors.PRIMARY_BLUE},
                ]}
                keyboardType="email-address"
              />
            </View>
          )}
          {type === 'password' && (
            <View style={styles.inputContainer}>
              <TextInput
                secureTextEntry={true}
                autoCompleteType={'password'}
                textContentType={'password'}
                maxLength={maxLength}
                autoCapitalize={allowCapitalizeCase ? 'words' : 'none'}
                testID={testID}
                placeholder={placeholder}
                autoCorrect={false}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                style={[
                  styles.inputStyle,
                  {color: hasError ? colors.BLACK : colors.PRIMARY_BLUE},
                ]}
              />
            </View>
          )}
        </View>
      </View>
    );
  }
}

export default Input;
