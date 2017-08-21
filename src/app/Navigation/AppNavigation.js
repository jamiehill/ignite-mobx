import React from 'react'
import { StyleSheet } from 'react-native'
import { StackNavigator } from 'react-navigation'
import RacingScreen from 'app/container/sport/RacingScreen'
import LoginScreen from 'app/container/LoginScreen'
import MusicScreen from 'app/container/MusicScreen'
import { Colors } from 'styles'

const AppNavigation = StackNavigator({
  LaunchScreen: {
    screen: RacingScreen,
  },
  LoginScreen: {
    screen: LoginScreen,
  },
  MusicScreen: {
    screen: MusicScreen
  }
}, {
  headerMode: 'screen',
  navigationOptions: {
    headerStyle: {
      backgroundColor: 'white',
    },
    headerTitleStyle: {
      color: 'white',
    },
    headerBackTitleStyle: {
      color: 'white',
    },
    headerTintColor: 'white',
  }
})

export default AppNavigation
