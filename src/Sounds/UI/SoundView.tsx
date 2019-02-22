import React from 'react'
import styled from '@emotion/styled'

interface Props {
  name: string
  onPlay: () => void
  onChangeRate: (rate: number) => void
}

export class SoundView extends React.Component<Props> {
  public render() {
    return (
      <View>
        <Name>{this.props.name}</Name>
        <Button onClick={this.props.onPlay}>Play</Button>
        <input type="range" min="10" max="30" defaultValue="10" onChange={this.onChangeRate} />
      </View>
    )
  }

  private onChangeRate = (event: React.ChangeEvent<HTMLInputElement>) => {
    const rate = Number.parseFloat(event.target.value) / 10
    this.props.onChangeRate(rate)
  }
}

const View = styled.div({
  background: '#eeeeee',
})

const Name = styled.div({
  fontWeight: 500,
})

const Button = styled.button({
  
})
