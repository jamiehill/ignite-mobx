// @flow

import React from 'react'
import {View, Text, Image, TouchableHighlight} from 'react-native'
import styles from './Styles/MusicRowStyle'
import {Colors} from 'styles'

const MusicRow = ({ data }) => (
  <TouchableHighlight underlayColor={Colors.fire50} onPress={() => {}}>
    <View style={styles.row}>
      <View style={styles.imgContainer}>
        <Image
          source={{uri: (data.album && data.album.images && data.album.images[2] && data.album.images[2].url) ? data.album.images[2].url : ''}}
          style={styles.image}
        />
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.boldLabel}>{data.name}</Text>
        <Text
          style={styles.label}>{(data.artists && data.artists[0] && data.artists[0].name) ? data.artists[0].name : ''}</Text>
      </View>
    </View>
  </TouchableHighlight>
)

export default MusicRow
