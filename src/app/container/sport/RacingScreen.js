import React from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import RoundedButton from 'app/components/RoundedButton'
import { observer, inject } from 'mobx-react/native'
import styles from '../Styles/LaunchScreenStyles'
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
          Racing Yeah!
        </Text>
      </View>

      <RoundedButton
        text={`Search "${this.search}" on Spotify`}
        onPress={this.openMusic}
      />

    </ScrollView>
  </View>
)

RacingScreen.navigationOptions = {
  headerVisible: true,
  title: <Image source={Images.launch} style={styles.top} />,
}

export default RacingScreen
