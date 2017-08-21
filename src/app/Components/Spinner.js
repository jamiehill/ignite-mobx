import React, { Component } from 'react'
import { ActivityIndicator } from 'react-native'

import { Colors } from 'styles'

export default class Spinner extends Component {
  render () {
    return (
      <ActivityIndicator
        ref={c => (this._root = c)} {...this.props}
        color={
          this.props.color ? this.props.color :Colors.defaultSpinnerColor
        }
        size={this.props.size ? this.props.size : 'large'}
      />
    )
  }
}
