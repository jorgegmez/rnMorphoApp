/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { NavigationService } from '@services';
import AppContainer from './src/navigation/AppNavigation';
import configureStore from './src/state/store';

// import SplashScreen from 'react-native-splash-screen';

export default class App extends Component {
  componentDidMount() {
    console.log('entro al app component');
  }

  public render() {
    return (
      <Provider store={configureStore().store}>
        <AppContainer
          ref={navigatorRef => {
            NavigationService.core.setTopLevelNavigator(navigatorRef);
          }}
        />
      </Provider>
    );
  }
}
