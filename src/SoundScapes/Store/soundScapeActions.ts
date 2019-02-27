import { SoundScapeParams } from "../Models"

export enum SoundScapeActionTypes {
  Add = 'SOUND_SCAPE/ADD',
  Remove = 'SOUND_SCAPE/REMOVE',
}

export interface SoundScapeAddAction {
  type: SoundScapeActionTypes.Add
  soundScape: SoundScapeParams
}

export interface SoundScapeRemoveAction {
  type: SoundScapeActionTypes.Remove
  id: UUID
}

export const soundScapeAddAction = (soundScape: SoundScapeParams): SoundScapeAddAction => ({
  type: SoundScapeActionTypes.Add,
  soundScape,
})

export const soundScapeRemoveAction = (id: UUID): SoundScapeRemoveAction => ({
  type: SoundScapeActionTypes.Remove,
  id,
})
