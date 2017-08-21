import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './Styles/SearchBarStyles'
import { Colors, Metrics } from 'styles'

const SearchBar = props => (
  <View style={styles.container}>
    <Icon name='search' size={Metrics.icons.tiny} style={styles.searchIcon} />
    <TextInput
      ref='searchText'
      autoFocus
      placeholder='Search'
      placeholderTextColor={Colors.snow}
      underlineColorAndroid='transparent'
      style={styles.searchInput}
      value={props.searchTerm}
      onChangeText={() => {}}
      autoCapitalize='none'
      onSubmitEditing={() => {}}
      returnKeyType={'search'}
      autoCorrect={false}
      selectionColor={Colors.snow}
    />
    <TouchableOpacity onPress={() => {}} style={styles.cancelButton}>
      <Text style={styles.buttonLabel}>Cancel</Text>
    </TouchableOpacity>
  </View>
)

SearchBar.propTypes = {
  onSearch: React.PropTypes.func.isRequired,
  onCancel: React.PropTypes.func.isRequired,
  searchTerm: React.PropTypes.string
}

export default SearchBar
