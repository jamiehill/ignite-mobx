import React, { Component } from 'react'
import Container from 'app/container'
import { Provider } from 'mobx-react'
import stores from 'app/stores'
import 'config'

const App = () => (
  <Provider {...stores}>
    <Container />
  </Provider>
)

export default App
