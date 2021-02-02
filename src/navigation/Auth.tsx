import {routesAuth as routes} from '@constants';
import {createStackNavigator} from 'react-navigation-stack';

import AuthHome from '@screens/Login';

const AuthStack = createStackNavigator(
  {
    [routes.AUTH]: {
      screen: AuthHome,
    },
  },
  {
    initialRouteName: routes.AUTH,
    defaultNavigationOptions: {
      headerShown: false,
    },
  },
);

export default AuthStack;
