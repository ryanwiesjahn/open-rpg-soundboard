import React from 'react'
import styled from '@emotion/styled'
import { theme } from '../../Global'

export class NotFoundView extends React.Component {
  public render() {
    return (
      <View>
        <h1>Page not found</h1>
      </View>
    )
  }
}

const View = styled.div({
  padding: theme.layout.page.padding,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
})
