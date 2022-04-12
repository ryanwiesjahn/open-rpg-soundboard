import React from 'react'
import { Link, generatePath } from 'react-router-dom'
import styled from '@emotion/styled'
import { withProps } from 'recompose'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, ButtonProps, theme } from '../../Global/UI'
import { soundScapeVariables } from './soundScapeVariables'
import { APP_ROUTES } from '../../App'

interface Props {
  id: UUID
  name: string
  active?: boolean
  className?: string
}

export class SoundScapeItemView extends React.Component<Props> {
  public render() {
    const { id, name, active, className } = this.props

    return (
      <View className={className}>
        <PlayButton active={active}>
          <FontAwesomeIcon icon={['far', 'play-circle']} />
        </PlayButton>
        <MainButton to={generatePath(APP_ROUTES.SOUND_SCAPE, { id })}>
          {name}
        </MainButton>
      </View>
    )
  }
}

const View = styled.div({
  display: 'flex',
})

const MainButton = withProps<ButtonProps, any>({
  secondary: true,
})(styled(Button)({
  borderTopLeftRadius: 0,
  borderBottomLeftRadius: 0,
  flex: 1,
}).withComponent(Link))

const PlayButton = withProps<ButtonProps, any>({
  secondary: true,
})(styled(Button)((props: {
  active?: boolean
}) => ({
  borderTopRightRadius: 0,
  borderBottomRightRadius: 0,
  borderRightColor: 'rgba(255, 255, 255, 0.3)',
  color: props.active ? theme.color.brand.primary : 'inherit',
  fontSize: soundScapeVariables.icon.fontSize,
  lineHeight: soundScapeVariables.icon.lineHeight,
})))
