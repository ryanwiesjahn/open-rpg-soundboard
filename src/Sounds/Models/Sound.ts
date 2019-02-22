import { Howl } from 'howler'

interface SoundParams {
  id: number
  howl: Howl
}

export interface SoundConfig {
  rate?: number
  crossfade?: CrossfadeParams
}

export interface CrossfadeParams {
  startDuration?: number
  endDuration?: number
}

export class Sound {
  public readonly id: number
  private howl: Howl
  private config: SoundConfig

  constructor({
    id,
    howl,
  }: SoundParams, config: SoundConfig) {
    this.howl = howl
    this.id = id
    this.config = config

    this.init()
  }

  private init() {
    if (this.config.rate) {
      this.setRate(this.config.rate)
    }

    if (this.config.crossfade) {
      this.setCrossfade(this.config.crossfade)
    }
  }

  public stop() {
    this.howl.stop(this.id)
  }

  public setRate(rate: number) {
    this.howl.rate(rate, this.id)
  }

  public setCrossfade(crossfade: CrossfadeParams) {
    
  }
}
