import { createSelector } from 'reselect'
import { AppState } from '../../App'
import { SoundScapeParams, SoundScape, hydrateSoundScapes } from '../Models';

const _soundScapesSelector = (state: AppState) => state.soundScapes.data
const idSelector = (state: AppState, id: UUID) => id;

export const soundScapesSelector = createSelector(
  _soundScapesSelector,
  (list: SoundScapeParams[]) => hydrateSoundScapes(list)
)

export const soundScapeSelector = createSelector(
  [soundScapesSelector, idSelector],
  (soundScapes: SoundScape[], id: UUID) => soundScapes.find((soundScape) => soundScape.id === id)
)
