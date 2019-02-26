import _ from 'lodash'
import { AppState } from '../../App'
import { createReducers } from '../../Global'
import {
  SoundScapeActionTypes,
  SoundScapeAddAction,
  SoundScapeRemoveAction,
} from './soundScapeActions'

type SoundScapesState = AppState['soundScapes']

const initialData: SoundScapesState = {
  data: [
    {
      id: '1',
      name: 'Sound Scape 1',
      active: true,
    },
    {
      id: '2',
      name: 'Sound Scape 2',
      active: false,
    }
  ],
}

export const soundScapeReducers = createReducers(initialData, (state) => ({

  [SoundScapeActionTypes.Add]: (action: SoundScapeAddAction) => ({
    data: [
      ...state.data,
      action.soundScape,
    ],
  }),

  [SoundScapeActionTypes.Remove]: (action: SoundScapeRemoveAction) => ({
    data: [
      ...state.data.filter((soundScape) => soundScape.id !== action.id),
    ],
  }),

}))
