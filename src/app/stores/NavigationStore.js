import { action, observable } from 'mobx'

import Navigation from 'app/navigation/AppNavigation'

class NavigationStore {

  @observable.ref state = {
    index: 0,
    routes: [
      { key: 'LaunchScreen', routeName: 'LaunchScreen' }
      // { key: "LoginScreen", routeName: "LoginScreen" }
    ]
  }

  @action dispatch = (action, stackNavState = true) => {
    const previousNavState = stackNavState ? this.state : null
    return this.state = Navigation.router
        .getStateForAction(action, previousNavState)
  }
}

export default navigationStore = new NavigationStore()
