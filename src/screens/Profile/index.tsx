import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, View, Text} from 'react-native';
import {colorsGlobal as colors} from '@constants';
import {MainButton} from '@components';

import styles from './styles';

class Profile extends React.PureComponent<{}> {
  static navigationOptions = {
    header: () => (
      <View style={styles.header}>
        <View style={styles.userInfoSection}>
          <Text style={styles.textInfo}>User Name</Text>
          <View style={styles.usernameInitials}>
            <Text style={styles.userInitialsText}>UN</Text>
          </View>
        </View>
        <View>
          <Text>Próximo pago 07/02/2021</Text>
          <MainButton
            text={'editar perfil'}
            testID={'auth_btn'}
            customButtonStyle={styles.mainButton}
            onPress={() => null}
          />
        </View>
      </View>
    ),
  };

  public handleEdit() {}

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
            <Text>Here is the user profile</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Profile;
