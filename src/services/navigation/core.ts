import {
  NavigationActions,
  NavigationContainerComponent,
} from 'react-navigation';

let navigator: NavigationContainerComponent;

const setTopLevelNavigator = (ref: NavigationContainerComponent | null) => {
  if (ref) {
    navigator = ref;
  }
};

const getTopLevelNavigator = () => {
  return navigator;
};

const navigate = (routeName: string) => {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
    }),
  );
};

export {setTopLevelNavigator, getTopLevelNavigator, navigate};
