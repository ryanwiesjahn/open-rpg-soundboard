import React from 'react'
import styled from '@emotion/styled'
import { theme } from '../../Global/UI'
import chroma from 'chroma-js'

interface Props {
  secondary?: boolean
  tertiary?: boolean
  bordered?: boolean
  className?: string
}

export class Button extends React.Component<Props> {
  public render() {
    const { secondary, tertiary } = this.props

    const View = tertiary ? TertiaryView : secondary ? SecondaryView : PrimaryView
    return (
      <View
        className={this.props.className}
        bordered={this.props.bordered}
      >
        {this.props.children}
      </View>
    )
  }
}

const PrimaryView = styled.button((props: {
  bordered?: boolean
}) => ({
  background: props.bordered ? 'transparent' : theme.color.brand.primary,
  border: '1px solid transparent',
  borderTopColor: props.bordered ? undefined : 'rgba(255, 255, 255, 0.3)',
  borderColor: props.bordered ? theme.color.brand.primary : undefined,
  boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.1)',
  color: theme.color.text.soft,
  borderRadius: 6,
  display: 'flex',
  alignItems: 'center',
  padding: 10,
  position: 'relative',
  overflow: 'hidden',
  cursor: 'pointer',

  ['&:hover']: {
    background: props.bordered ? `${chroma(theme.color.brand.primary).alpha(0.2)}` : `${chroma(theme.color.brand.primary).darken(0.3)}`,
  },
  
  ['&:focus']: {
    outline: 'none',
  },
}))

const SecondaryView = styled(PrimaryView)((props: {
  bordered?: boolean
}) => ({
  background: props.bordered ? 'transparent' : theme.color.background.tertiary,
  borderColor: props.bordered ? theme.color.background.tertiary : undefined,

  ['&:hover']: {
    background: props.bordered ? 'rgba(255, 255, 255, 0.07)' : `${chroma(theme.color.background.tertiary).brighten(0.3)}`,
  },
}))

const TertiaryView = styled(PrimaryView)({
  background: 'transparent',
  border: `1px dotted ${theme.color.text.softer}`,
  color: theme.color.text.softer,
  boxShadow: 'none',

  ['&:hover']: {
    background: 'transparent',
    color: theme.color.text.soft,
    borderColor: theme.color.text.soft,
  },
})
