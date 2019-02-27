import React from 'react'
import styled from '@emotion/styled'
import { SoundController } from '../Models'
import { SoundControllerContainer as _SoundControllerContainer } from './SoundControllerContainer'

interface Props {
  soundControllers: SoundController[]
  className?: string
}

export class SoundControllerListView extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  public render() {
    const { className } = this.props

    return (
      <View className={className}>
        {this.renderSoundControllers()}
      </View>
    )
  }

  private renderSoundControllers = () => (
    this.props.soundControllers.map((soundController) => (
      <SoundControllerContainer
        key={soundController.name}
        soundController={soundController}
      />
    ))
  )
}

const View = styled.div({})

const SoundControllerContainer = styled(_SoundControllerContainer)({
  marginBottom: 20,
})
