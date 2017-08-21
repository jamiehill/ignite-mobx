import React, {PropTypes} from 'react'
import {TouchableOpacity, Text} from 'react-native'
import styles from './Styles/FullButtonStyles'

const FullButton = props => (
  <TouchableOpacity style={[styles.button, props.styles]} onPress={props.onPress}>
    <Text style={styles.buttonText}>{props.text && props.text.toUpperCase()}</Text>
  </TouchableOpacity>
)

FullButton.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
  styles: PropTypes.object
}

export default FullButton
