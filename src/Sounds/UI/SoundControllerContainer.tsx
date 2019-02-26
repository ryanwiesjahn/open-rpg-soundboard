import React from 'react'
import { SoundController } from '../Models'
import { SoundControllerView } from './SoundControllerView'

interface Props {
  soundController: SoundController
  className?: string
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
        onChangeVolume={this.onChangeVolume}
        className={this.props.className}
      />
    )
  }

  private onPlay = () => {
    this.soundController.play()
    this.forceUpdate() // TODO: Is this okay?
  }

  private onChangeRate = (rate: number) => {
    this.soundController.setRate(rate)
  }

  private onChangeVolume = (volume: number) => {
    this.soundController.setVolume(volume)
  }

  private get soundController(): SoundController {
    return this.props.soundController
  }
}
