import React from 'react'
import { SoundController, SoundControllerContainer } from '../Sounds'

export default class Root extends React.Component {
  private sound: SoundController

  constructor(props: {}) {
    super(props)

    this.sound = new SoundController({
      name: 'Crowd',
      fileName: 'crowd.wav',
    })
  }

  public render() {
    return (
      <SoundControllerContainer soundController={this.sound} />
    )
  }
}
