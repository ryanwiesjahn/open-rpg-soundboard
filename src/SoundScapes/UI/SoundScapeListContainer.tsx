import React from 'react'
import { connect } from 'react-redux'
import { SoundScapeListView } from './SoundScapeListView'
import { SoundScape } from '../Models/SoundScape'
import { soundScapesSelector } from '../Store'
import { AppState } from '../../App'

interface Props {
  soundScapes: SoundScape[]
  className?: string
}

class _SoundScapeListContainer extends React.Component<Props> {
  public render() {
    const { soundScapes, className } = this.props

    return (
      <SoundScapeListView
        className={className}
        soundScapes={soundScapes}
      />
    )
  }
}

const mapStateToProps = (state: AppState) => ({
  soundScapes: soundScapesSelector(state)
})

export const SoundScapeListContainer = connect(mapStateToProps)(_SoundScapeListContainer)
