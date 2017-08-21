import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from 'styles'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin
  },
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  top: {
    marginTop: Metrics.doubleSection,
    height: 40,
    width: 40,
  },
  centered: {
    alignItems: 'center'
  }
})
