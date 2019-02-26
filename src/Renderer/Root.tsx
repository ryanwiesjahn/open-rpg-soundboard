import React from 'react'
import { Provider } from 'react-redux'
import { MemoryRouter as Router } from 'react-router-dom'
import { AppContainer, appStore } from '../App'

export default class Root extends React.Component {
  public render() {
    return (
      <Provider store={appStore}>
        <Router>
          <AppContainer />
        </Router>
      </Provider>
    )
  }
}
