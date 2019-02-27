import { Howl } from 'howler'
import _ from 'lodash'
import { Sound, SoundConfig } from './Sound'

const SOUNDS_ASSETS_PATH = '/assets/sounds/'

export enum SoundPlayMode {
  Multiple,
  SingleBlock,
  SingleRestart,
}

export interface SoundControllerParams {
  id: UUID
  name: string
  fileName: string
  timeBetween: NumberRange
  timeBetweenIsRange?: boolean
  playMode?: SoundPlayMode
}

export class SoundController implements SoundControllerParams {
  public readonly id: UUID
  public readonly name: string
  public readonly fileName: string
  public readonly timeBetween: NumberRange
  public readonly timeBetweenIsRange: boolean
  public readonly playMode: SoundPlayMode

  private howl: Howl
  private soundMap: {
    [soundId: number]: Sound
  } = {}

  private soundConfig: SoundConfig = {}

  constructor({
    id,
    name,
    fileName,
    timeBetween,
    timeBetweenIsRange = true,
    playMode = SoundPlayMode.Multiple,
  }: SoundControllerParams) {
    this.id = id
    this.name = name
    this.fileName = fileName
    this.timeBetween = timeBetween
    this.timeBetweenIsRange = timeBetweenIsRange
    this.playMode = playMode

    this.howl = new Howl({
      src: [this.fileSrc],
      autoplay: false,
    })

    this.howl.on('end', this.onSoundEnd)
  }

  public play(): Sound | null {
    switch (this.playMode) {
      case SoundPlayMode.SingleBlock:
        return this.playSingleBlock()
      case SoundPlayMode.SingleRestart:
        return this.playSingleRestart()
      default:
        return this._play()
    }
  }

  private _play(): Sound {
    const soundId = this.howl.play()
    const sound = new Sound({
      id: soundId,
      howl: this.howl,
    }, this.soundConfig)

    this.soundMap = {
      ...this.soundMap,
      [soundId]: sound,
    }

    return sound
  }

  private playSingleBlock(): Sound | null {
    if(this.sounds.length) { return null }
    return this._play()
  }

  private playSingleRestart(): Sound {
    if(this.sounds.length) {
      const sound = this.sounds[0]
      sound.stop()
    }
    return this._play()
  }

  public fade(fadeTo: number, duration: number) {
    const volume = this.howl.volume()
    this.howl.fade(volume, fadeTo, duration)
  }

  public setRate(rate: number) {
    this.soundConfig.rate = rate
    this.howl.rate(rate)
  }

  public setVolume(volume: number) {
    this.soundConfig.volume = volume
    this.howl.volume(volume)
  }

  private onSoundEnd = (soundId: number) => {
    delete this.soundMap[soundId]
  }

  public get sounds(): Sound[] {
    return _.values(this.soundMap)
  }

  public get fileSrc(): string {
    return `${SOUNDS_ASSETS_PATH}${this.fileName}`
  }
}

export const hydrateSoundController = (params: SoundControllerParams) => new SoundController(params)
export const hydrateSoundControllers = (list?: SoundControllerParams[]) => list ? list.map(hydrateSoundController) : []
