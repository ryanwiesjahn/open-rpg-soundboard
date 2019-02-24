import React from 'react'
import styled from '@emotion/styled'
import { SoundScapeItemContainer as _SoundScapeItemContainer } from './SoundScapeItemContainer'
import { SoundScape } from '../Models/SoundScape'

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
      </View>
    )
  }

  private renderSoundScapeItems = (): JSX.Element[] => (
    this.props.soundScapes.map((soundScape) => (
      <SoundScapeItemContainer soundScape={soundScape} />
    ))
  )
}

const View = styled.div({
  padding: 15,
})

const SoundScapeItemContainer = styled(_SoundScapeItemContainer)({
  marginTop: 15,
})
