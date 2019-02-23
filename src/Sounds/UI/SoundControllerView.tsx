import React from 'react'
import styled from '@emotion/styled'
import { WaveformView as _WaveformView } from './WaveformView'
import { SoundView } from './SoundView'
import { Sound } from '../Models/Sound'

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
    return (
      <View className={this.props.className}>
        <Name>{this.props.name}</Name>
        <WaveformContainer>
          <WaveformView fileSrc={this.props.fileSrc} />
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

const View = styled.div({
  background: '#eeeeee',
})

const WaveformView = styled(_WaveformView)({
  height: 50,
})

const WaveformContainer = styled.div({
  position: 'relative',
})

const Name = styled.div({
  fontWeight: 500,
})

const Button = styled.button({
  
})
