import { observable } from 'mobx'
import { Alert } from 'react-native'
import API from 'app/services/Api'
import FixtureAPI from 'app/services/FixtureApi'

const api = true ? FixtureAPI : API.create()

export default class SearchStore {
  @observable tracks = [];

  getTrackList (query: string) {
    if (!query) {
      this.tracks = []
      return
    }
    api.search(query)
    .then((response) => {
      console.log('response', response)
      if (response.ok && response.data) {
        this.tracks = response.data.tracks.items
      } else {
        Alert.alert('Connection error', 'Couldn\'t fetch the data.')
      }
    })
  }
}
