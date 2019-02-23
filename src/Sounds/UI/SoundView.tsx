import React from 'react'
import styled from '@emotion/styled'
import { Sound } from '../Models/Sound'

interface Props {
  sound: Sound
  className?: string
}

interface State {
  progressPercent: number
}

export class SoundView extends React.Component<Props, State> {
  private sound: Sound

  constructor(props: Props) {
    super(props)

    this.sound = props.sound

    this.state = {
      progressPercent: this.sound.progressPercent,
    }

    this.sound.addEventListener('progress', this.onProgress)
  }

  public render() {
    const { progressPercent: percentProgress } = this.state

    return (
      <View
        className={this.props.className}
        percent={percentProgress}
      />
    )
  }

  private onProgress = () => {
    this.setState({ progressPercent: this.sound.progressPercent })
  }
}

const View = styled.div((props: {
  percent: number
}) => ({
  background: 'rgba(20, 40, 60, 0.3)',
  height: '100%',
  width: `${props.percent}%`,
  position: 'absolute',
  top: 0,
  left: 0,
}))
