import React, { PropTypes } from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/AlertMessageStyles'

const AlertMessage = () => {
  let messageComponent = null
  if (this.props.show) {
    const { title } = this.props
    return (
      <View
        style={[styles.container, this.props.style]}
      >
        <View style={styles.contentContainer}>
          <Text allowFontScaling={false} style={styles.message}>{title && title.toUpperCase()}</Text>
        </View>
      </View>
    )
  }
  return messageComponent
}

AlertMessage.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  style: PropTypes.object,
  show: PropTypes.bool
}

AlertMessage.defaultProps = {
  show: true
}

export default AlertMessage
