import React from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon, Props as IconProps } from '@fortawesome/react-fontawesome'
import { withProps } from 'recompose'
import { SoundScapeItemContainer as _SoundScapeItemContainer } from './SoundScapeItemContainer'
import { SoundScape } from '../Models/SoundScape'
import { Button as _Button } from '../../Global'
import { soundScapeVariables } from './soundScapeVariables'

interface Props {
  soundScapes: SoundScape[]
  className?: string
  onSoundScapeAdd: () => void
}

export class SoundScapeListView extends React.Component<Props> {
  public render() {
    return (
      <View className={this.props.className}>
        {this.renderSoundScapeItems()}
        <Button tertiary onClick={this.onClick}>
          <Icon />
          <span>New Sound Scape</span>
        </Button>
      </View>
    )
  }

  private renderSoundScapeItems = (): JSX.Element[] => (
    this.props.soundScapes.map((soundScape) => (
      <SoundScapeItemContainer key={soundScape.id} soundScape={soundScape} />
    ))
  )

  private onClick = () => {
    this.props.onSoundScapeAdd()
  }
}

const View = styled.div({
  padding: 15,
})

const SoundScapeItemContainer = styled(_SoundScapeItemContainer)({
  marginBottom: 15,
})

const Button = styled(_Button)({
  width: '100%',
  justifyContent: 'center',
})

const Icon = withProps<IconProps, any>({
  icon: ['fas', 'plus'],
})(styled(FontAwesomeIcon)({

  marginRight: 10,
  fontSize: soundScapeVariables.icon.fontSize,
  lineHeight: soundScapeVariables.icon.lineHeight,
}))
