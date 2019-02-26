import React from 'react'
import { connect } from 'react-redux'
import { v4 as uuid } from 'uuid'
import { SoundScapeListView } from './SoundScapeListView'
import { SoundScape, ISoundScape } from '../Models/SoundScape'
import { soundScapesSelector, soundScapeAddAction } from '../Store'
import { AppState } from '../../App'
import { Dispatch } from '../../Global'

interface Props {
  soundScapes: SoundScape[]
  soundScapeAdd: (soundScape: ISoundScape) => void
  className?: string
}

class _SoundScapeListContainer extends React.Component<Props> {
  public render() {
    const { soundScapes, className } = this.props

    return (
      <SoundScapeListView
        className={className}
        soundScapes={soundScapes}
        onSoundScapeAdd={this.onSoundScapeAdd}
      />
    )
  }

  private onSoundScapeAdd = () => {
    this.props.soundScapeAdd({
      id: uuid(),
      name: 'New Sound Scape',
      active: false,
    })
  }
}

const mapStateToProps = () => (state: AppState) => ({
  soundScapes: soundScapesSelector(state)
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  soundScapeAdd: (soundScape: ISoundScape) => {
    dispatch(soundScapeAddAction(soundScape))
  },
})

export const SoundScapeListContainer = connect(mapStateToProps, mapDispatchToProps)(_SoundScapeListContainer)
