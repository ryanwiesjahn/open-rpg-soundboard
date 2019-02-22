import React from 'react'
import styled from 'react-emotion'

export default class Root extends React.Component {
  render() {
    return (
      <View>test</View>
    )
  }
}

const View = styled.div({
  background: 'blue',
})
