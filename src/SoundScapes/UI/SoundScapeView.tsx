import React from 'react'
import styled from '@emotion/styled'
import { SoundController, SoundControllerContainer as _SoundControllerContainer } from '../../Sounds'
import { theme, PageTitle } from '../../Global'

interface Props {
  name: string
  soundControllers?: SoundController[]
}

export class SoundScapeView extends React.Component<Props> {
  public render() {
    const { name, soundControllers } = this.props

    return (
      <View>
        <PageTitle>{name}</PageTitle>
        <Content>
          {soundControllers && this.renderSoundControllers(soundControllers)}
        </Content>
      </View>
    )
  }

  private renderSoundControllers = (soundControllers: SoundController[]) => (
    soundControllers ? soundControllers.map((soundController) => (
      <SoundControllerContainer key={soundController.id} soundController={soundController} />
    )) : null
  )
}

const View = styled.div({
  padding: theme.layout.page.padding,
})

const Content = styled.div({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
})

const SoundControllerContainer = styled(_SoundControllerContainer)({
  margin: '0 10px 10px 0',

  ['&:nth-of-type(2)']: {
    marginRight: 0,
  }
})
