import { createSelector } from 'reselect'
import { AppState } from '../../App'
import { ISoundScape, SoundScape } from '../Models';

const _soundScapesSelector = (state: AppState) => state.soundScapes.data
const idSelector = (state: AppState, id: UUID) => id;

export const soundScapesSelector = createSelector(
  _soundScapesSelector,
  (soundScapes: ISoundScape[]) => createSoundScapeModels(soundScapes)
)

export const soundScapeSelector = createSelector(
  [soundScapesSelector, idSelector],
  (soundScapes: SoundScape[], id: UUID) => soundScapes.find((soundScape) => soundScape.id === id)
)

const createSoundScapeModels = (soundScapes: ISoundScape[]) => (
  soundScapes.map((soundScape) => new SoundScape(soundScape))
)
