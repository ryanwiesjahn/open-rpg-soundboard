import React from 'react'
import styled from '@emotion/styled'
import { SoundScapeItemContainer as _SoundScapeItemContainer } from './SoundScapeItemContainer'
import { SoundScape } from '../Models/SoundScape'
import { Button as _Button } from '../../Global'

interface Props {
  soundScapes: SoundScape[]
  className?: string
}

export class SoundScapeListView extends React.Component<Props> {
  constructor(props: any) {
    super(props)

    console.log("HIT")
    console.log(_SoundScapeItemContainer)
  }
  public render() {
    return (
      <View className={this.props.className}>
        {this.renderSoundScapeItems()}
        <Button>Test 1</Button>
        <Button bordered>Test 1</Button>
        <Button secondary>Test 2</Button>
        <Button secondary bordered>Test 2</Button>
        <Button tertiary>Test 3</Button>
      </View>
    )
  }

  private renderSoundScapeItems = (): JSX.Element[] => (
    this.props.soundScapes.map((soundScape) => (
      <SoundScapeItemContainer key={soundScape.name} soundScape={soundScape} />
    ))
  )
}

const View = styled.div({
  padding: 15,
})

const SoundScapeItemContainer = styled(_SoundScapeItemContainer)({
  marginTop: 15,
})

const Button = styled(_Button)({
  marginTop: 15,
})
