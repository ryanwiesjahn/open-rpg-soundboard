import React from 'react'
import { SoundController, SoundControllerListView, SoundPlayMode } from '../Sounds'

export default class Root extends React.Component {
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
      <SoundControllerListView soundControllers={this.soundControllers} />
    )
  }
}
