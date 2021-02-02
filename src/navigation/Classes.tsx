import {routesClasses as routes} from '@constants';
import {createStackNavigator} from 'react-navigation-stack';

import Classes from '@screens/Classes';

const ClassesStack = createStackNavigator(
  {
    [routes.CLASSES]: {
      screen: Classes,
    },
  },
  {
    initialRouteName: routes.CLASSES,
    defaultNavigationOptions: {
      headerShown: false,
    },
  },
);

export default ClassesStack;
