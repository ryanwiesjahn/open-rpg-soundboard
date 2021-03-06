import React from 'react'
import { connect } from 'react-redux';
import { SoundScapeView } from './SoundScapeView'
import { SoundScape } from '../Models'
import { AppState, NotFoundView } from '../../App'
import { soundScapeSelector } from '../Store'

interface Props {
  id: UUID
  soundScape?: SoundScape
}

class _SoundScapeContainer extends React.Component<Props> {
  public render() {
    const { soundScape } = this.props

    return (soundScape ? (
      <SoundScapeView
        name={soundScape.name}
        soundControllers={soundScape.soundControllers}
      />
    ) : (
      <NotFoundView />
    ))
  }
}

// Higher-order-function helps with memoization: https://blog.isquaredsoftware.com/2017/12/idiomatic-redux-using-reselect-selectors/
const mapStateToProps = () => (state: AppState, props: Props) => ({
  soundScape: soundScapeSelector(state, props.id)
})

export const SoundScapeContainer = connect(mapStateToProps)(_SoundScapeContainer)
