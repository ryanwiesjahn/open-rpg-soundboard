import { ISoundScape } from '../../SoundScapes'

export interface StateData<TData> {
  data: TData
}

export interface AppState {
  soundScapes: StateData<ISoundScape[]>,
}
