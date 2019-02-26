import React from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '../../Global/UI'
import { soundScapeVariables } from './soundScapeVariables'

interface Props {
  name: string
  active?: boolean
  className?: string
}

export class SoundScapeItemView extends React.Component<Props> {
  public render() {
    const { name, active, className } = this.props

    return (
      <View className={className}>
        <PlayButton secondary={!active}>
          <FontAwesomeIcon icon={['far', 'play-circle']} />
        </PlayButton>
        <MainButton secondary={!active}>
          {name}
        </MainButton>
      </View>
    )
  }
}

const View = styled.div({
  display: 'flex',
})

const MainButton = styled(Button)({
  borderTopLeftRadius: 0,
  borderBottomLeftRadius: 0,
  flex: 1,
})

const PlayButton = styled(Button)({
  borderTopRightRadius: 0,
  borderBottomRightRadius: 0,
  borderRightColor: 'rgba(255, 255, 255, 0.3)',
  fontSize: soundScapeVariables.icon.fontSize,
  lineHeight: soundScapeVariables.icon.lineHeight,
})
