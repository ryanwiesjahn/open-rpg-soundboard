import React from 'react'
import { AppView } from './AppView'
import { SoundController, SoundPlayMode } from '../../Sounds'

export class AppContainer extends React.Component {
  private soundControllers: SoundController[]

  constructor(props: {}) {
    super(props)

    this.soundControllers = [
      new SoundController({
        name: 'Crowd',
        fileName: 'crowd.wav',
      }),
      new SoundController({
        name: 'Kick Drum',
        fileName: 'kick-drum.wav',
      }),
      new SoundController({
        name: 'Laser',
        fileName: 'laser.wav',
        playMode: SoundPlayMode.SingleBlock,
      }),
    ]
  }

  public render() {
    return (
      <AppView />
    )
  }
}
