import React from 'react'
import { SoundScapeListView } from '../index';
import { SoundScape } from '../Models/SoundScape'

interface Props {
  className?: string
}

export class SoundScapeListContainer extends React.Component<Props> {
  private soundScapes: SoundScape[]

  constructor(props: {}) {
    super(props)

    this.soundScapes = [
      new SoundScape({
        name: "Sound Scape 1",
        active: true,
      }),
      new SoundScape({
        name: "Sound Scape 2",
        active: false,
      }),
    ]
  }

  public render() {
    return (
      <SoundScapeListView
        className={this.props.className}
        soundScapes={this.soundScapes}
      />
    )
  }
}
