import React, { Component } from 'react'
import { Provider } from 'mobx-react';
import RootContainer from './app/container';
import stores from './app/stores';
import '../config'

const App = () => (
  <Provider {...stores}>
    <RootContainer />
  </Provider>
)

export default App
