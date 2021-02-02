import {routesProfile as routes, colorsGlobal as colors} from '@constants';
import {createStackNavigator} from 'react-navigation-stack';

import Profile from '@screens/Profile';

const ProfileStack = createStackNavigator(
  {
    [routes.PROFILE]: {
      screen: Profile,
    },
  },
  {
    initialRouteName: routes.PROFILE,
    defaultNavigationOptions: {
      headerShown: true,
      headerStyle: {
        backgroundColor: colors.PRIMARY_BLUE,
      },
    },
  },
);

export default ProfileStack;
