import React from 'react';
import {connect} from 'react-redux';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  Image,
  ImageBackground,
} from 'react-native';
import {Formik} from 'formik';
import {colorsGlobal as colors, stringsAuth, imagesGlobal} from '@constants';
import {MainButton, Input} from '@components';
import {NavigationService} from '@services';
import {identifyUserAction} from '@state/global/user/actions';
import {authUserSchema} from './schema';

import styles from './styles';

type Props = {
  identifyUser: (user: AuthStateModel) => void;
};

class AuthHome extends React.PureComponent<Props> {
  handleStartButton() {
    NavigationService.auth.goToIdentifyUser(1);
  }

  public handleLogin = async (payload: AuthStateModel) => {
    const {identifyUser} = this.props;
    console.log('entro a handleLogin', payload);
    if (payload.email && payload.password) {
      console.log('Debio llamar el method');
      identifyUser(payload);
    }
    NavigationService.classes.goToCheckInClasses(1);
  };

  render() {
    return (
      <ImageBackground source={imagesGlobal.BG_AUTH} style={styles.imageBG}>
        <SafeAreaView style={styles.safeArea}>
          <StatusBar
            backgroundColor={colors.PRIMARY_BLUE}
            barStyle="light-content"
          />
          <ScrollView
            alwaysBounceVertical={false}
            bounces={false}
            contentContainerStyle={styles.scrollView}>
            <Formik
              initialValues={{
                email: '',
                password: '',
              }}
              validationSchema={authUserSchema}
              onSubmit={this.handleLogin}>
              {(props) => (
                <View style={styles.content}>
                  <Image source={imagesGlobal.LOGO} style={styles.logo} />
                  <View style={styles.inputField}>
                    <Input
                      onChange={props.handleChange('email')}
                      onBlur={props.handleBlur('email')}
                      type={'normal'}
                      label={stringsAuth.EMAIL_ADDRESS}
                      hasError={!!props.errors.email}
                    />
                    <Input
                      onChange={props.handleChange('password')}
                      onBlur={props.handleBlur('password')}
                      type={'password'}
                      label={stringsAuth.LOGIN_PASSWORD}
                      hasError={!!props.errors.password}
                    />
                  </View>
                  <View style={styles.grow} />
                  <MainButton
                    text={stringsAuth.LOGIN_BTN_TEXT}
                    testID={'auth_btn'}
                    customButtonStyle={styles.mainButton}
                    onPress={props.handleSubmit}
                  />
                </View>
              )}
            </Formik>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}

const mapDispatchToProps = (dispatch: DispatchRSSA) => ({
  identifyUser: (data: AuthStateModel) => dispatch(identifyUserAction(data)),
});

export default connect(null, mapDispatchToProps)(AuthHome);
