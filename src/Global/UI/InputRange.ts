import { css } from '@emotion/core'
import styled from '@emotion/styled'
import _InputRange, { InputRangeProps } from 'react-input-range'
import { withProps } from 'recompose';
import 'react-input-range/lib/css/index.css'
import './InputRange.css'

export const InputRange = withProps<InputRangeProps, any>((props) => ({
  ...props,
  className: 'test',
}))(_InputRange)

// export const InputRange = styled(_InputRange)({
//   ['span']: {
//     background: 'red',
//   }
// })

export { Range } from 'react-input-range'
