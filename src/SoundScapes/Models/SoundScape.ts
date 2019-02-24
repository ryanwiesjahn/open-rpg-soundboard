export interface ISoundScape {
  name: string
  active: boolean
}

export class SoundScape implements ISoundScape {
  public readonly name: string
  public readonly active: boolean

  constructor(params: ISoundScape) {
    this.name = params.name
    this.active = params.active
  }
}
