import * as core from './core';

import {NavigationActions} from 'react-navigation';
import {routesProfile} from '@constants';

const goToProfile = (params?: UserStateModel) => {
  core.getTopLevelNavigator().dispatch(
    NavigationActions.navigate({
      routeName: routesProfile.PROFILE,
      params: {
        ...params,
      },
    }),
  );
};

export {goToProfile};
