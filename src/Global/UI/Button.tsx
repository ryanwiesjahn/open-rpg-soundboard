
import styled from '@emotion/styled'
import { theme } from '../../Global/UI'
import chroma from 'chroma-js'

interface Props {
  secondary?: boolean
  tertiary?: boolean
  bordered?: boolean
}

export const Button = styled.button((props: Props) => ({
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

  ...(props.secondary && secondaryStyles(props)),
  ...(props.tertiary && tertiaryStyles(props)),
}))

const secondaryStyles = (props: Props) => ({
  background: props.bordered ? 'transparent' : theme.color.background.tertiary,
  borderColor: props.bordered ? theme.color.background.tertiary : undefined,

  ['&:hover']: {
    background: props.bordered ? 'rgba(255, 255, 255, 0.07)' : `${chroma(theme.color.background.tertiary).brighten(0.3)}`,
  },
})

const tertiaryStyles = (props: Props) => ({
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
