import React, {PureComponent} from 'react';

// import {TextStyle} from 'react-native';
// import styles from './styles';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Classes from '@screens/Classes';
import Profile from '@screens/Profile';
// import {routesClasses, routesProfile} from '@constants';

const Tab = createBottomTabNavigator();

class Tabs extends PureComponent<{}> {
  render() {
    return (
      <NavigationContainer independent={true}>
        <Tab.Navigator>
          <Tab.Screen name="Check in" component={Classes} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

export default Tabs;
