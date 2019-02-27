import { SoundControllerParams, SoundController, hydrateSoundControllers } from '../../Sounds'

export interface SoundScapeParams {
  id: UUID
  name: string
  active: boolean
  soundControllers?: SoundControllerParams[]
}

export class SoundScape implements SoundScapeParams {
  public readonly id: UUID
  public readonly name: string
  public readonly active: boolean
  public readonly soundControllers?: SoundController[]

  constructor(params: SoundScapeParams) {
    this.id = params.id
    this.name = params.name
    this.active = params.active
    this.soundControllers = hydrateSoundControllers(params.soundControllers)
  }
}

export const hydrateSoundScape = (params: SoundScapeParams) => new SoundScape(params)
export const hydrateSoundScapes = (list?: SoundScapeParams[]) => list ? list.map(hydrateSoundScape) : []
