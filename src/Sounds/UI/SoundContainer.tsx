import React from 'react'
import {
  SoundController,
  SoundView,
} from '../index'

interface Props {
  soundController: SoundController
}

export class SoundContainer extends React.Component<Props> {
  public render() {
    return (
      <SoundView
        name={this.props.soundController.name}
        onPlay={this.onPlay}
        onChangeRate={this.onChangeRate}
      />
    )
  }

  private onPlay = () => {
    this.sound.play()
  }

  private onChangeRate = (rate: number) => {
    this.sound.setRate(rate)
  }

  private get sound(): SoundController {
    return this.props.soundController
  }
}
