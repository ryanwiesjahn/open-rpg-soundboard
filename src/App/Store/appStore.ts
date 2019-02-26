import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { appReducer } from './appReducer'

export const appStore = createStore(
  appReducer,
  applyMiddleware(thunk),
)
