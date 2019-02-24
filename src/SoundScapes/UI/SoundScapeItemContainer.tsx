import React from 'react'
import { SoundScapeItemView } from '../index'
import { SoundScape } from '../Models/SoundScape'

interface Props {
  soundScape: SoundScape
  className?: string
}

export class SoundScapeItemContainer extends React.Component<Props> {
  public render() {
    return (
      <SoundScapeItemView
        className={this.props.className}
        name={this.props.soundScape.name}
        active={this.props.soundScape.active}
      />
    )
  }
}
