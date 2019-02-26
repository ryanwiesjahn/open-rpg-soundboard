import React from 'react'
import { SoundScapeView } from './SoundScapeView'
import { SoundScape } from '../Models'

interface Props {
  soundScape?: SoundScape
}

export class SoundScapeContainer extends React.Component<Props> {
  public render() {
    const { soundScape } = this.props

    return (
      <SoundScapeView
        name={soundScape ? soundScape.name : 'NONE'}
      />
    )
  }
}
