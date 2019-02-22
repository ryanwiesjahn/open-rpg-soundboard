import { Howl } from 'howler'
import _ from 'lodash'
import { Sound, SoundConfig, CrossfadeParams } from './Sound'

const SOUNDS_ASSETS_PATH = '../../assets/sounds/'

export enum SoundPlayMode {
  Multiple,
  SingleBlock,
  SingleRestart,
}

interface SoundParams {
  name: string
  fileName: string
  playMode?: SoundPlayMode
}

export class SoundController {
  public readonly name: string
  public readonly playMode: SoundPlayMode

  private howl: Howl
  private soundMap: {
    [soundId: number]: Sound
  } = []

  private soundConfig: SoundConfig = {}

  constructor({
    name,
    fileName,
    playMode = SoundPlayMode.Multiple,
  }: SoundParams) {
    this.name = name
    this.playMode = playMode

    this.howl = new Howl({
      src: [`${SOUNDS_ASSETS_PATH}${fileName}`],
      autoplay: false,
    })

    this.howl.on('end', this.onSoundEnd)
  }

  public play() {
    switch (this.playMode) {
      case SoundPlayMode.SingleBlock:
        return this.playSingleBlock()
      case SoundPlayMode.SingleRestart:
        return this.playSingleRestart()
      default:
        return this._play()
    }
  }

  private _play() {
    const soundId = this.howl.play()
    const sound = new Sound({
      id: soundId,
      howl: this.howl,
    }, this.soundConfig)

    this.soundMap = {
      ...this.soundMap,
      [soundId]: sound,
    }
  }

  private playSingleBlock() {
    if(this.sounds.length) { return }
    this._play()
  }

  private playSingleRestart() {
    if(this.sounds.length) {
      const sound = this.sounds[0]
      sound.stop()
    }
    this._play()
  }

  public fade(fadeTo: number, duration: number) {
    const volume = this.howl.volume()
    this.howl.fade(volume, fadeTo, duration)
  }

  public setRate(rate: number) {
    this.soundConfig.rate = rate
    for (const sound of this.sounds) {
      sound.setRate(rate)
    }
  }

  public setCrossfade(crossfade: CrossfadeParams) {
    this.soundConfig.crossfade = {
      ...this.soundConfig.crossfade,
      ...crossfade,
    }

    for (const sound of this.sounds) {
      sound.setCrossfade(crossfade)
    }
  }

  private onSoundEnd = (soundId: number) => {
    delete this.soundMap[soundId]
  }

  private get sounds(): Sound[] {
    return _.values(this.soundMap)
  }
}
