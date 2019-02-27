import React from 'react'
import styled from '@emotion/styled'
import { WaveformView as _WaveformView } from './WaveformView'
import { SoundView } from './SoundView'
import { Sound } from '../Models/Sound'
import { theme } from '../../Global'

interface Props {
  name: string
  fileSrc: string
  sounds: Sound[]
  onPlay: () => void
  onChangeRate: (rate: number) => void
  onChangeVolume: (volume: number) => void
  className?: string
}

export class SoundControllerView extends React.Component<Props> {
  public render() {
    const { name, fileSrc, className } = this.props

    return (
      <View className={className}>
        <Name>{name}</Name>
        <WaveformContainer>
          <WaveformView fileSrc={fileSrc} />
          {this.renderSounds()}
        </WaveformContainer>
      </View>
    )
  }

  private renderSounds = () => {
    return this.props.sounds.map((sound) => (
      <SoundView key={sound.id} sound={sound} />
    ))
  }

  // private onChangeRate = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const rate = Number.parseFloat(event.target.value) / 10
  //   this.props.onChangeRate(rate)
  // }

  // private onChangeVolume = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const volume = Number.parseFloat(event.target.value) / 100
  //   this.props.onChangeVolume(volume)
  // }
}

const Name = styled.h3({
  padding: 0,
  margin: 0,
})

const View = styled.div({
  background: theme.color.background.tertiary,
  borderRadius: 6,
  padding: 10,
})

const WaveformView = styled(_WaveformView)({
  height: 50,
})

const WaveformContainer = styled.div({
  position: 'relative',
})
