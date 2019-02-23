import React from 'react'
import styled from '@emotion/styled'
import { SoundScapeListContainer } from '../../SoundScapes'

export class AppView extends React.Component {

  public render() {
    return (
      <View>
        <SoundScapeListContainer />
      </View>
    )
  }
}

const View = styled.div({
  background: 'red',
  height: '100vh',
})
