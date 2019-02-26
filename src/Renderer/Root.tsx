import React from 'react'
import { MemoryRouter as Router } from 'react-router-dom'
import { AppContainer } from '../App'

export default class Root extends React.Component {
  public render() {
    return (
      <Router>
        <AppContainer />
      </Router>
    )
  }
}
