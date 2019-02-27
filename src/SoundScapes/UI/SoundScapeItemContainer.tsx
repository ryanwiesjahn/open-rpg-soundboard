import React from 'react'
import { SoundScapeItemView } from './SoundScapeItemView'
import { SoundScape } from '../Models/SoundScape'

interface Props {
  soundScape: SoundScape
  className?: string
}

export class SoundScapeItemContainer extends React.Component<Props> {
  public render() {
    const { soundScape, className } = this.props

    return (
      <SoundScapeItemView
        className={className}
        id={soundScape.id}
        name={soundScape.name}
        active={soundScape.active}
      />
    )
  }
}
