import React from 'react'
import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'
import { SoundScapeListContainer } from '../../SoundScapes'
import { theme } from '../../Global'
import '../../Global/UI/FontAwesomeLibrary'
import 'typeface-roboto/index.css'
import 'normalize.css/normalize.css'

export class AppView extends React.Component {
  public render() {
    return (
      <>
      <Global styles={globalStyles} />
        <View>
          <LeftPanel>
            <SoundScapeListContainer />
          </LeftPanel>
          <MainPanel>
            Main
          </MainPanel>
          <RightPanel>
            Right
          </RightPanel>
        </View>
      </>
    )
  }
}

const globalStyles = css({
  body: {
    background: theme.color.background.secondary,
    fontFamily: theme.font.body,
    fontSize: 16,
    color: theme.color.text.primary,
  },
})

const View = styled.div({
  height: '100vh',
  display: 'flex',
})

const LeftPanel = styled.div({
  width: '300px',
  background: theme.color.background.primary,
})

const MainPanel = styled.div({
  flex: 1,
})

const RightPanel = styled.div({
  width: '300px',
  background: theme.color.background.primary,
})
