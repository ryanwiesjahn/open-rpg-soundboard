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
}

export class SoundControllerView extends React.Component<Props> {
  public render() {
    return (
      <View>
        <Name>{this.props.name}</Name>
        <WaveformContainer>
          <WaveformView fileSrc={this.props.fileSrc} />
          {this.renderSounds()}
        </WaveformContainer>
        <Button onClick={this.props.onPlay}>Play</Button>
        <input type="range" min="10" max="30" defaultValue="10" onChange={this.onChangeRate} />
      </View>
    )
  }

  private renderSounds = () => {
    return this.props.sounds.map((sound) => (
      <SoundView key={sound.id} sound={sound} />
    ))
  }

  private onChangeRate = (event: React.ChangeEvent<HTMLInputElement>) => {
    const rate = Number.parseFloat(event.target.value) / 10
    this.props.onChangeRate(rate)
  }
}

const View = styled.div({
  background: '#eeeeee',
})

const WaveformView = styled(_WaveformView)({
  color: 'purple',
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
