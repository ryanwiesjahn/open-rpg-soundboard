import { Howl } from 'howler'

interface SoundParams {
  id: number
  howl: Howl
}

export interface SoundConfig {
  rate?: number
}

const PROGRESS_THROTTLE = 50

export class Sound {
  public readonly id: number
  private howl: Howl
  private config: SoundConfig

  private trackProgress: boolean
  private progressDuration: number

  constructor({
    id,
    howl,
  }: SoundParams, config: SoundConfig) {
    this.howl = howl
    this.id = id
    this.config = config
    this.trackProgress = false
    this.progressDuration = 0

    this.init()
  }

  private init() {
    this.howl.once('play', this.onStart, this.id)
    this.howl.once('end', this.onEnd, this.id)

    if (this.config.rate) {
      this.setRate(this.config.rate)
    }
  }

  private onStart = () => {
    this.trackProgress = true
    requestAnimationFrame(this.onProgress)
  }

  private onEnd = () => {
    this.trackProgress = false
  }

  // TODO: Should this be moved to SoundsController?
  private onProgress = () => {
    console.log(this.position)

    if (this.trackProgress) {
      setTimeout(() => {
        requestAnimationFrame(this.onProgress)
      }, PROGRESS_THROTTLE)
    }
  }

  public stop() {
    this.howl.stop(this.id)
  }

  public setRate(rate: number) {
    this.howl.rate(rate, this.id)
  }

  public get duration(): number {
    return this.howl.duration(this.id)
  }

  public get position(): number {
    return this.howl.seek(this.id) as number || 0
  }

  public get progressPercent(): number {
    return this.progressDuration / this.duration
  }
}
