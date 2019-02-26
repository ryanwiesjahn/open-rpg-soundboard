import React from 'react'
import { SoundScapeListView } from './SoundScapeListView'
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
        id: '1',
        name: "Sound Scape 1",
        active: true,
      }),
      new SoundScape({
        id: '2',
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
