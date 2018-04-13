import React, { Component } from 'react';
import { Platform } from 'react-native';
import { Landing } from './components/login/landing'
import { Home } from './components/home/home'
import { Profile } from './components/profile/profile'
import { Search } from './components/search/search'
import { InitialSearch } from './components/search/initialsearch'
import { EditProfile } from './components/profile/editProfile'
import { HospitalPublicProfile } from './components/hospital/publicProfile'
import { CreateHospital } from './components/hospital/createHospital'
import { PrivateProfileInfo } from './components/hospital/privateProfileInfo'
import { EditHospitalPrivateProfile } from './components/hospital/privateProfileEdit'
import { ChangeUserPassword } from './components/profile/changePassword'
import { Intro } from './components/intro/intro'
import { LocateOnMap } from './components/hospital/locateOnMap'

import { StackNavigator } from 'react-navigation'
import { Root } from "native-base";

/*
################################################################################
|--------------------------Navigation Routing----------------------------------|
################################################################################
*/
const RootStack = StackNavigator({
    Landing: {
        screen: Landing,
    },
    Intro: {
        screen: Intro
    },
    Home: {
        screen: Home
    },
    Profile: {
        screen: Profile
    },
    EditProfile: {
        screen: EditProfile
    },
    ChangeUserPassword: {
        screen: ChangeUserPassword
    },
    Search: {
        screen: Search
    },
    InitialSearch: {
        screen: InitialSearch
    },
    HospitalPublicProfile: {
        screen: HospitalPublicProfile
    },
    CreateHospital: {
        screen: CreateHospital
    },
    PrivateProfileInfo: {
        screen: PrivateProfileInfo
    },
    EditHospitalPrivateProfile: {
        screen: EditHospitalPrivateProfile
    },
    LocateOnMap:{
        screen: LocateOnMap
    }
    /*
    //error message: PrivateProfileInfo should be a react componenet,
    PrivateProfileInfo:{
      screen: PrivateProfileInfo
    }
    */
},
    {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        },
        initialRouteName: 'Landing',
    },
)

/*
################################################################################
|----------------------Application Root Component------------------------------|
################################################################################
*/

export default class App extends React.Component {

    render() {
        return (

            <Root>
                <RootStack />
            </Root>
        )
    }
}


/*
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
*/