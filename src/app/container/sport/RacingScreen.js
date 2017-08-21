import React from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import RoundedButton from 'app/components/RoundedButton'
import { observer, inject } from 'mobx-react/native'
import styles from '../Styles/LaunchScreenStyles'
import Spinner from 'app/components/Spinner'
import { Colors, Images } from 'styles'

const RacingScreen = props => (
  <View style={styles.mainContainer}>
    <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
    <ScrollView style={styles.container}>
      <View style={styles.centered}>
        <Image source={Images.appclon} style={styles.logo} />
      </View>

      <View style={styles.section} >
        <Text style={styles.sectionText}>
          Base Boilerplate integrating Ignite with MobX and React Navigation.
        </Text>
      </View>
      { this.loginLogout() }

      <RoundedButton
        text={`Search "${this.search}" on Spotify`}
        onPress={this.openMusic}
      />

    </ScrollView>
  </View>
)

export default RacingScreen
