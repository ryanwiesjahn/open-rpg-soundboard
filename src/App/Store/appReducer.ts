import { combineReducers } from 'redux'
import { AppState } from './AppState'
import { soundScapeReducers } from '../../SoundScapes'

export const appReducer = combineReducers<AppState>({
  soundScapes: soundScapeReducers,
})
