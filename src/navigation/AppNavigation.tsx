import {routesAuth, routesClasses, routesBoot, routesProfile} from '@constants';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Boot from '@screens/Global/Boot';
import AuthStack from './Auth';
import ClassesStack from './Classes';
import ProfileStack from './Profile';

export default createAppContainer(
  createSwitchNavigator(
    {
      [routesBoot.BOOT]: Boot,
      [routesAuth.AUTH]: AuthStack,
      [routesClasses.CLASSES]: ClassesStack,
      [routesProfile.PROFILE]: ProfileStack,
    },
    {
      initialRouteName: routesBoot.BOOT,
    },
  ),
);
