import _ from 'lodash'
import { AppState } from '../../App'
import { createReducers } from '../../Global'
import { SoundPlayMode } from '../../Sounds'
import {
  SoundScapeActionTypes,
  SoundScapeAddAction,
  SoundScapeRemoveAction,
} from './soundScapeActions'

type SoundScapesState = AppState['soundScapes']

// TODO: Remove initial data
const initialData: SoundScapesState = {
  data: [
    {
      id: '1',
      name: 'Sound Scape 1',
      active: true,
      soundControllers: [{
        name: 'Crowd',
        fileName: 'crowd.wav',
      }],
    },
    {
      id: '2',
      name: 'Sound Scape 2',
      active: false,
      soundControllers: [{
        name: 'Laser',
        fileName: 'laser.wav',
        playMode: SoundPlayMode.SingleBlock,
      }, {
        name: 'Kick Drum',
        fileName: 'kick-drum.wav',
      }],
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
