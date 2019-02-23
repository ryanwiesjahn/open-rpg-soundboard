import { Howl } from 'howler'
import _ from 'lodash'

interface SoundParams {
  id: number
  howl: Howl
}

export interface SoundConfig {
  rate?: number
}

interface EventHandlerMap {
  progress: () => void
}

type EventHandlers = {
  [Key in keyof EventHandlerMap]: Array<EventHandlerMap[Key]>
}

const PROGRESS_THROTTLE = 50

export class Sound {
  public readonly id: number
  private howl: Howl
  private config: SoundConfig

  private trackProgress: boolean
  private progressDuration: number
  private eventHandlers: EventHandlers = {
    progress: [],
  }

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
    for (const handler of this.eventHandlers.progress) {
      handler()
    }

    if (this.trackProgress) {
      setTimeout(() => {
        requestAnimationFrame(this.onProgress)
      }, PROGRESS_THROTTLE)
    }
  }

  public addEventListener<T extends keyof EventHandlerMap>(
    event: T,
    callback: EventHandlerMap[T],
  ) {
    this.eventHandlers[event] = [
      ...this.eventHandlers[event],
      callback,
    ]
  }

  public removeEventListener<T extends keyof EventHandlerMap>(
    event: T,
    callback: EventHandlerMap[T],
  ) {
    this.eventHandlers[event] = _.without(this.eventHandlers[event], callback)
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
    return this.position / this.duration * 100
  }
}
