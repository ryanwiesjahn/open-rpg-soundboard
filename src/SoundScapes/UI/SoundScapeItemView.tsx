import React from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { theme } from '../../Global/UI'

interface Props {
  name: string
  active?: boolean
  className?: string
}

export class SoundScapeItemView extends React.Component<Props> {
  public render() {
    return (
      <View className={this.props.className} active={this.props.active}>
        <PlayButton>
          <FontAwesomeIcon icon={['far', 'play-circle']} />
        </PlayButton>
        <Content>
          {this.props.name}
        </Content>
      </View>
    )
  }
}

const View = styled.div((props: {
  active?: boolean
}) => ({
  background: props.active ? theme.color.brand.primary : theme.color.background.tertiary,
  borderTop: '1px solid rgba(255, 255, 255, 0.3)',
  boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.1)',
  color: theme.color.text.soft,
  borderRadius: 6,
  display: 'flex',
  overflow: 'hidden',
}))

const PlayButton = styled.button({
  border: 'none',
  borderRight: '1px solid rgba(255, 255, 255, 0.3)',
  background: 'transparent',
  color: theme.color.text.soft,
  fontSize: '1.7rem',
  lineHeight: '1rem',
  padding: 10,

  ['&:focus']: {
    outline: 'none',
  }
})

const Content = styled.div({
  display: 'flex',
  alignItems: 'center',
  padding: 10,
})
