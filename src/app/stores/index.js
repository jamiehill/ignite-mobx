import SpotifyStore from './SpotifyStore'
import nav from './NavigationStore'
import userStore from './UserStore'

export default {
  searchStore: new SpotifyStore(),
  userStore,
  nav,
}
