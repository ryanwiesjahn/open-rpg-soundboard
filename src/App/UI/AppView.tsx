import React from 'react'
import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'
import { SoundScapeListContainer } from '../../SoundScapes'
import { theme } from '../../Global'
import 'typeface-roboto/index.css'
import 'normalize.css/normalize.css'

export class AppView extends React.Component {
  public render() {
    return (
      <>
      <Global styles={globalStyles} />
        <View>
          <SoundScapeListContainer />
        </View>
      </>
    )
  }
}

const globalStyles = css({
  body: {
    background: theme.color.background.primary,
    fontFamily: theme.font.body,
    fontSize: 16,
    color: theme.color.text.primary,
  },
})

const View = styled.div({
  height: '100vh',
})
