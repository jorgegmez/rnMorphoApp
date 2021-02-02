import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, View, Text} from 'react-native';
import {colorsGlobal as colors} from '@constants';
// import {Tabs} from '@components';

import styles from './styles';

class AuthHome extends React.PureComponent<{}> {
  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <StatusBar
          backgroundColor={colors.PRIMARY_BLUE}
          barStyle="light-content"
        />
        <ScrollView
          alwaysBounceVertical={false}
          bounces={false}
          contentContainerStyle={styles.scrollView}>
          <View>
            <Text>Classes will be listed here</Text>
          </View>
          {/* <Tabs /> */}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default AuthHome;
