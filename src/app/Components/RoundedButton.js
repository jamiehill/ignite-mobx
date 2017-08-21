import React, { PropTypes } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from './Styles/RoundedButtonStyles'

const getText = props => {
  const buttonText = props.text || props.children || ''
  return buttonText.toUpperCase()
}

const RoundedButton = props => (
  <TouchableOpacity style={styles.button} onPress={props.onPress}>
    <Text style={styles.buttonText}>{getText(props)}</Text>
  </TouchableOpacity>
)

RoundedButton.propTypes = {
  onPress: PropTypes.func,
  text: PropTypes.string,
  children: PropTypes.string,
  navigator: PropTypes.object
}

export default RoundedButton
