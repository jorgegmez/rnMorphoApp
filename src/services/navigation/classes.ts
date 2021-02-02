import * as core from './core';

import {NavigationActions} from 'react-navigation';
import {routesClasses} from '@constants';

const goToCheckInClasses = (params?: UserStateModel) => {
  core.getTopLevelNavigator().dispatch(
    NavigationActions.navigate({
      routeName: routesClasses.CLASSES,
      params: {
        ...params,
      },
    }),
  );
};

export {goToCheckInClasses};
