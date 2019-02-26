export interface ISoundScape {
  id: UUID
  name: string
  active: boolean
}

export class SoundScape implements ISoundScape {
  public readonly id: UUID
  public readonly name: string
  public readonly active: boolean

  constructor(params: ISoundScape) {
    this.id = params.id
    this.name = params.name
    this.active = params.active
  }
}
