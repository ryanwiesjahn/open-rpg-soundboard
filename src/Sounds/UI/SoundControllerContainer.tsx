import React from 'react'
import {
  SoundController,
  SoundControllerView,
} from '../index'

interface Props {
  soundController: SoundController
}

export class SoundControllerContainer extends React.Component<Props> {
  public render() {
    return (
      <SoundControllerView
        name={this.props.soundController.name}
        fileSrc={this.props.soundController.fileSrc}
        sounds={this.props.soundController.sounds}
        onPlay={this.onPlay}
        onChangeRate={this.onChangeRate}
      />
    )
  }

  private onPlay = () => {
    this.sound.play()
    this.forceUpdate() // TODO: Is this okay?
  }

  private onChangeRate = (rate: number) => {
    this.sound.setRate(rate)
  }

  private get sound(): SoundController {
    return this.props.soundController
  }
}
